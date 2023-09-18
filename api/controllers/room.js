import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
// hotelid Parameter: In this specific code, the URL is expected to include a parameter named hotelid. For example, if your application's route looks like this: /hotels/:hotelid/rooms, then hotelid is a dynamic value that can change with each request and is part of the URL. It's used to identify which hotel this room belongs to.

// In summary, this line of code is essential for obtaining the hotel identifier from the URL so that you can link the newly created room to the appropriate hotel record in your database.
  
    const newRoom = new Room(req.body);
    // is a common practice for taking data from an HTTP request, structuring it as an object, and preparing it for further processing, which often includes database operations and other business logic related to rooms in your application.

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        // .findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } }): This is a Mongoose method used to find a hotel document by its unique identifier (hotelId) and update it. In this case, it's updating the hotel document with new data.
        $push: { rooms: savedRoom._id },
        // The second argument to findByIdAndUpdate is an update operation. In MongoDB, the $push operator is used to add an element to an array field. In this case, it's pushing the _id of the newly created room (savedRoom._id) into the rooms array field of the hotel document.
      });
    } 

    catch (err) {
      next(err);
    }

    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updateRoom = await Hotel.findByIdAndUpdate(req.params.id,
      { $set: req.body }, // it update the value in the original doc
      { new: true }); // it shows new value

    res.status(200).json(updateRoom);  // if it runs properly then it gives 200 as staus and updaedroom in json format
  } catch (err) {
    next(err);
  }
};

export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid; 
  // This line extracts the hotelid parameter from the request's parameters and assigns it to the hotelId variable. This parameter is likely used to identify the hotel associated with the room that is being deleted.
  
  try {
    await Room.findByIdAndDelete(req.params.id);
    // This line attempts to delete a room from the database using the findByIdAndDelete method. It uses the id parameter from the request's parameters (req.params.id) to specify which room should be deleted.

    try {
      await Hotel.findByIdAndUpdate(hotelId,{
        $pull:{rooms:req.params.id}, 
      });
// This line updates the hotel document in the database to remove the reference to the deleted room. It uses the findByIdAndUpdate method on the Hotel model (assuming Hotel is a Mongoose model or something similar). The $pull operator is used to remove the specified id from the rooms array of the hotel document. The hotelId variable is used to identify the hotel to update.
    } 
    catch (err) {
      next(err)
    }
    res.status(200).json("Hotel has been deleted.");
  }
  
   catch (err) {
    next(err);
  }
};



export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};


