const products = require('../data/products');
const singleProduct = require('../data/singleProduct');

const getAllProducts = (req, res) => {
  res.json(products);
};


const getProductById = (req, res, id) => {
  console.log("GFbdvsc", id)
  const product = singleProduct.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};


module.exports = {
  getAllProducts,
  getProductById
};
