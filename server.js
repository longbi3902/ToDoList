// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// // Set up EJS as the view engine
// app.set('view engine', 'ejs');

// // Set up routes
// const indexRoutes = require('./src/routes/index.js');
// app.use('/', indexRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.set('view engine', 'ejs');

const indexRoutes = require('./src/routes/index.js');
app.use('/', indexRoutes);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

