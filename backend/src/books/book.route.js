const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();


//(request) frontend => backend server =>controleer => book schema => database => send data to server => back to frontend 


//post : when submitting from frontend to database 
//get : when getting something back from database
//put-patch : when editing or updating data
//delete : deleting something from database 

//post a book
router.post("/create-book",verifyAdminToken ,postABook )

//get all books 
router.get("/" ,getAllBooks);

//get single book
router.get("/:id",getSingleBook);

//update a book 
router.put("/edit/:id" ,verifyAdminToken, UpdateBook);

//delete book
router.delete("/:id",verifyAdminToken,deleteBook);

module.exports = router;