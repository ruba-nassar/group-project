const Book = require("./book.model");

//insert book
const postABook =async(req,res)=>{
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message:"book posted successfully", book:newBook});
    } catch (error) {
        console.error("error creating book",error);
        res.status(500).send({message:"error creating book"});
    }
};

//get all books
const getAllBooks = async (req, res) => {
try {
    const books = await Book.find().sort({createdAt:-1});
    res.status(200).send( books);
} catch (error) {
    console.error("error fetching book",error);
    res.status(500).send({message:"error fetching book"});
}
};

//get single book
const getSingleBook = async(req,res) =>{
    try {
        const{id} =req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message:"Book Not found"});

        }
        res.status(200).send( book);
    } catch (error) {
        console.error("error fetching book",error);
        res.status(500).send({message:"error fetching book"});
    }
};

//update book
const UpdateBook = async (req,res) =>{
    try {
        const {id} =req.params;
        const updateBook = await Book.findByIdAndUpdate(id, req.body , {new:true});
        if(!updateBook){
            res.status(404).send({message:"Book Not found"});
        }
        res.status(200).send({
            message:"updated book secc",
            book:updateBook
        });

    } catch (error) {
        console.error("error updating book",error);
        res.status(500).send({message:"error updating book"});
    }
};

//delete book
const deleteBook = async (req, res) => {
    try {
        const {id} =req.params;
        const deletebook = await Book.findByIdAndDelete(id);
        if(!deletebook){
            res.status(404).send({message:"Book Not found"});
        }
        res.status(200).send({
            message:"deleted book secc",
            book:deletebook
        });
    } catch (error) {
        console.error("error deleting book",error);
        res.status(500).send({message:"error deleting book"});
    }
};


module.exports ={
    postABook , 
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteBook
}