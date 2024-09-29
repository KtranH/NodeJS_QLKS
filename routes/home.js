const express = require('express');
const router = express.Router();

// Route cho trang Home
router.get('/', (req, res) => {
  res.render('home', { title: 'Trang chủ' });  // Render file home.ejs
});

module.exports = router;
