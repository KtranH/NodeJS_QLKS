const express = require('express');
const app = express();

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');

// Import các routes
const homeRoute = require('./routes/home');

// Sử dụng các routes
app.use('/', homeRoute);      // Route cho trang Home

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
