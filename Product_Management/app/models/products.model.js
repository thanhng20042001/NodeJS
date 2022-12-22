// Tach ra nhieu model de de quan ly
const {DataTypes} = require('sequelize');
const createProductModel = (sequelize) => {
  return sequelize.define(
    "Products",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      sale:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: "products",
      timestamps: true, // Khong tu dong tao created_at, updated_at
    }
  );
};

module.exports = {
    createProductModel,
};
