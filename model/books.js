const mongoose = require("mongoose");

 
const booksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    published_year : { type: Number, required: true },
    genre: { type: String, required: true },
    available: { type: Boolean, required: true },
    
});

module.exports = mongoose.model('Books', booksSchema);

// Define Schame wit timestamps and disable versionKey

// Define Model

// Export Model