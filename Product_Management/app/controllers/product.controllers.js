const {
  getData,
  getInfo,
  addNewProduct,
  renovateProduct,
  removeAProduct,
  removeAllProduct,
} = require("../services/products.services");

// Get all product
const getAllProduct = async (req, res) => {
  const productList = await getData();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(500).send("Gặp lỗi");
  }
};

// Get product's detail
const getProductDetail = async (req, res) => {
  const { id } = req.params;
  const product = await getInfo(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("Không tìm thấy sản phẩm!!!");
  }
};

// Create new product
const createNewProduct = async (req, res) => {
  const product = req.body;
  const newProduct = await addNewProduct(product);
  if (newProduct) {
    res.status(200).send("Thêm sản phẩm thành công");
  } else {
    res.status(500).send("Thêm sản phẩm không thành công!!!");
  }
};

// Update a product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;
  const updatedProduct = await renovateProduct(id, product);
  if (updatedProduct) {
    res.status(200).send("Cập nhật thông tin sản phẩm thành công");
  } else {
    res.status(404).send("Cập nhật sản phẩm không thành công !!!");
  }
};

// Delete a Product
const deleteAProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await removeAProduct(id);
  if (deletedProduct) {
    res.status(200).send("Xoá sản phẩm thành công");
  } else {
    res.status(404).send("Không tìm thấy sản phẩm cần xoá!!!");
  }
};

module.exports = {
  getAllProduct,
  getProductDetail,
  createNewProduct,
  updateProduct,
  deleteAProduct,
};
