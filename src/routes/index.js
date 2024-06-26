const express = require('express');
const router = express.Router();

// Sample data (replace this with your actual data storage)
let todoItems = [
  { id: 1, task: 'Đi chợ' },
  { id: 1, task: 'Nấu cơm' },
  { id: 1, task: 'Giặt quần áo' },
  // Add more todo items as needed
];

// Display all todo items
router.get('/', (req, res) => {
  res.render('index', { todoItems });
});

// Display form to add a new todo item
router.get('/new', (req, res) => {
  res.render('new');
});

// Create a new todo item
router.post('/new', (req, res) => {
  const { task } = req.body;
  const newItem = { id: todoItems.length + 1, task };
  todoItems.push(newItem);
  res.redirect('/');
});

// Display form to edit a todo item
router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = todoItems.find(item => item.id === id);
  res.render('edit', { item });
});

// Update a todo item
router.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  const itemIndex = todoItems.findIndex(item => item.id === id);
  todoItems[itemIndex] = { id, task };
  res.redirect('/');
});

// Delete a todo item
router.post('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todoItems = todoItems.filter(item => item.id !== id);
  res.redirect('/');
});

module.exports = router;

// 'use strict';
// module.exports = function(app) {
//   let productsCtrl = require('./controller/controller');

//   // todoList Routes
//   app.route('/getall')
//     .get(productsCtrl.get)


//   app.route('/v1/product/create')
//     .post(productsCtrl.store);

//   app.route('/products/:productId')
//     .get(productsCtrl.detail)
//     .put(productsCtrl.update)
//     .delete(productsCtrl.delete);
// };