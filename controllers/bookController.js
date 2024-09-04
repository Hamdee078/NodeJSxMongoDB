// Import Model
const Books = require('../model/books');


// Function add and export
exports.addbooks = async(req,res) =>{
    const {title,author,published_year,genre ,available} = req.body;
    const books = new Books({ title,author,published_year,genre ,available });

    try {//begin 
        const newbooks = await books.save();
        res.status(201).json(newbooks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Function update and export
exports.updateBooks = async (req, res) => {
    try {
        const { title,author,published_year,genre ,available } = req.body;

        const updateBooks = await books.findByIdAndUpdate(
            req.params.id,
            { title,author,published_year,genre ,available },
            { new: true }
        );

        if (!updateBooks) return res.status(404).json({ message: 'Books not found' });

        res.json(updateBooks);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// Function delete and export
exports.deleteBooks = async(req, res) => {
    try {
        const books = await Books.findByIdAndDelete(
            req.params.id
        );
        if (!books) return res.status(404).json({ message: 'Books not found' });
        res.json(books);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// Function get all data and export
exports.getBooks = async (req, res) => {
    try {
        const books = await Books.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Function get data by genre and export
exports.getBooks1One = async (req, res) => {
    try {
        const { genre  } = req.query; // รับชื่อจาก query parameter
        const books = await Books.findOne({ genre  });

        if (!books) {
            return res.status(404).json({ message: 'Books not found' });
        }
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message }); // แก้ไข massage เป็น message
    }
};
