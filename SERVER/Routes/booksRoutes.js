import express from 'express'
import { Book } from '../Models/BookModel.js';

// Define routes
const router = express.Router();



// To add book to our database
router.post("/", async (req,res) => {
    try {

        //Request Validation

        if (!req.body.title || !req.body.author || !req.body. publishYear || !req.body.pages) {
            res.status(400).send({message: "All fields are required - Title, author, publishYear, pages"})
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            pages: req.body.pages
        }
        // Create a new entry
        const book = await Book.create(newBook);

        // Send book to client
        return res.status(200).json(book);

    } catch (error) {
        res.status(500).send({message: error.message})
    }
});


// Fetch boooks
router.get("/", async(req,res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        res.status(404).send({ message: error.message})
        
    }
})

// Fetch a book by ID
router.get("/:id", async(req,res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
        
    } catch (error) {
        res.status(404).send({message: error.message});
    }
})

// Update books

router.put("/:id", async(req,res) => {
    try {
        // Check validation
        if (!req.body.title || !req.body.author || !req.body. publishYear || !req.body.pages) {
            res.status(400).send({message: "All fields are required - Title, author, publishYear, pages"})
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send("Book not found");
        }else{
            return res.status(200).send({ message: "Book updated successfully"})
        }
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


// Delete Books
router.delete("/:id", async(req,res) =>{
    try {
        // Fetch id
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json("Book not found");
        }

        return res.status(200).send({message:"Book deleted successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

export default router;
