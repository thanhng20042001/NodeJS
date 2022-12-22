// Entry point
// Model: Table
// Viet hoa chu cai dau ==> Lop doi tuong
const { Sequelize, DataTypes } = require("sequelize");
const { HOST, USER, PASSWORD, DB, dialect } = require("../configs/db.configs");
const {createProductModel} = require('./products.model')

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  HOST: HOST,
  dialect: dialect,
});

const Product = createProductModel(sequelize);


module.exports = {
  sequelize,
  Product
};
