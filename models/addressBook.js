module.exports = function (sequelize, DataTypes) {
  const AddressBook = sequelize.define("AddressBook", {

    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  return AddressBook;
};