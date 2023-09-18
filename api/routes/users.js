import express from 'express'
import {updateUser,deleteUser,getUser,getUsers} from '../controllers/users.js'

import { verifyToken,verifyUser,verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//  URL structure. When a client (such as a web browser or a mobile app) makes an HTTP GET request to this endpoint, your Express.js server will handle the request and execute the associated route handler.
// The verifyToken middleware is responsible for verifying the user's authentication token or session, ensuring that only authenticated users can access the route.

    res .send('hello User,you are logged in');
})


router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
    res.send("hello user,your are logged in, now you can delete your account")
})


router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
    res.send("hello admin,your are logged in, now you can delete all accounts")
})
/// for this checkadmin, isadmin should be true, so we can change it in the database in mongodb compass, after changing it we need delete that cookies and we need to login again and after that we can update the user, so he can make changes in account for ex. delete 



//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id",  deleteUser);

//GET
router.get("/:id", getUser);

// GET All 
router.get("/", getUsers);

export default router;