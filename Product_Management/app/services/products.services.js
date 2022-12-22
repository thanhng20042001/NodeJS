const { Product } = require("../models/index");

// Get all products
const getData = async () => {
  const productList = await Product.findAll();
  if (productList) {
    return productList;
  } else {
    return false;
  }
};

// Get product's detail
const getInfo = async (id) => {
  const findingProduct = await Product.findOne({
    where: {
      id,
    },
  });
  if (findingProduct) {
    return findingProduct;
  } else {
    return false;
  }
};

// Create a new product
const addNewProduct = async (product) => {
  const newProduct = await Product.create({
    ...product,
  });
  if (newProduct) {
    return newProduct;
  } else {
    return false;
  }
};

// Update a product
const renovateProduct = async (id, product) => {
  const updateProduct = await getInfo(id);
  if (updateProduct) {
    updateProduct.name = product.name;
    updateProduct.amount = product.amount;
    updateProduct.price = product.price;
    updateProduct.sale = product.sale;
    const updatedProduct = updateProduct.save();
    return updatedProduct;
  } else {
    return false;
  }
};

// Delete a product
const removeAProduct = async (id) => {
  const product = await getInfo(id);
  if (product) {
    await Product.destroy({
      where: {
        id,
      },
    });
    return product;
  } else {
    return false;
  }
};

module.exports = {
  getData,
  getInfo,
  addNewProduct,
  renovateProduct,
  removeAProduct,
};
