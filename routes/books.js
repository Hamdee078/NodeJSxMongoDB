const express = require("express");

// Import Controller
const { getBooks, getBooks1One, addbooks, updateBooks, deleteBooks } 
= require('../controllers/bookController');
const router = express.Router();

// APIs Routing Config
router.get('/books', getBooks);               // ดึงข้อมูลหนังสือทั้งหมด
router.get('/books/:genre', getBooks1One);    // ดึงข้อมูลหนังสือโดยระบุประเภท (genre)
router.post('/books/', addbooks);             // เพิ่มหนังสือใหม่
router.put('/books/:id', updateBooks);        // อัปเดตข้อมูลหนังสือโดยระบุ ID
router.delete('/books/:id', deleteBooks);     // ลบหนังสือโดยระบุ ID

// Export router
module.exports = router;
