import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";    

export const register = async(req,res,next)=>{
    try {
    const salt = bcrypt.genSaltSync(10);
    // This line generates a cryptographic salt using the genSaltSync function provided by the bcrypt library. A salt is a random value that is combined with the password before hashing to add an extra layer of security. The 10 parameter specifies the "cost factor" for generating the salt. Higher values increase the time it takes to generate the hash, making it more computationally intensive and secure against brute-force attacks.
    
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Here, the hashSync function of the bcrypt library is used to create a hash of the user's password. The req.body.password is the user's plain text password obtained from the request body. The salt generated in the previous step is used along with the password to create a secure hash. The resulting hash is what you would store in your database to represent the user's password.

    // In summary, this code is taking a user's password, generating a cryptographic salt, and then using both the salt and the password to create a secure hash

        const newUser= new User({   

            username:req.body.username,
            email:req.body.email,
            password:hash,

        })

        await newUser.save()
        res.status(200).send("User has been created") // it will be shown in postman api
    } catch (err) {
        next(err)
    }
}

export const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return next(createError(404,"User Not Found!"))
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400,"Wrong Password or username!")) 
        
        // why we dont use next(err) bcz it will show that request is send bcz of error but here in this case we want that password is incorrect or user not found

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, 'qovdk')
        // if it is admin then he can delete that particular entry
        
// jwt: This suggests that you're using the jsonwebtoken library to work with JSON Web Tokens.
// .sign(): This is a method provided by the jsonwebtoken library to create a new JWT.
// { id: user._id, isAdmin: user.isAdmin }: This is the payload of the JWT. It's an object containing the data you want to include in the token. In this case, it seems to include the user's ID (_id) and their admin status (isAdmin).
// 'qovdk': This is the secret key or private key used to sign the JWT. The secret key is used to create a signature for the token, ensuring its authenticity. Only someone with the secret key can verify the token and extract its payload.
// token: This variable will store the generated JWT.    


        const {password,isAdmin,...otherDetails}= user._doc /// why we write this bcz in ._doc our details is stored
        // This line uses object destructuring to extract properties from the user object. The password and isAdmin properties are being extracted into separate variables, and the rest of the properties are collected into the otherDetails object. This separation is done to prevent sending the password and potentially sensitive information to the client.

        res.cookie('access_token',token,{httpOnly:true})
        .status(200).json({...otherDetails}) // it will be shown in postman api
        // This object includes all the user's information except for the password and admin status. The spread syntax (...otherDetails) is used to include all the properties of the otherDetails object in the response

//res.cookie() is a method provided by various libraries (such as cookie-parser in Express.js) to set a cookie in the HTTP response.
//'access_token' is the name of the cookie being set. Cookies are key-value pairs, and this code is setting the value to the token variable.
// token is likely a variable containing some form of authentication or authorization token. The token is being stored in the cookie for later use.
// { httpOnly: true } is an option that makes the cookie accessible only through HTTP(S) requests and not through JavaScript code running in the browser. 

    } catch (err) {
        next(err)
    }
}


/// jwt is used to store the users info securely in the form of json token in cookies and when you go to delete and update the entry then it checks as you are admin or not