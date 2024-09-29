const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Cấu hình view engine là EJS
app.set('view engine', 'ejs');
app.set('layout', 'layout'); 
app.use(expressLayouts);

// Cấu hình file chứa css, js,...
app.use(express.static('public'));

// Xây dựng route Home
const homeRoute = require('./routes/home');
app.use('/', homeRoute);   

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
