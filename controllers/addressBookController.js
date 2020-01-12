const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.AddressBook.findAll({}).then(function (dbAddressBook) {
      res.json(dbAddressBook);
    });
  },
  findOne: function (req, res) {
    db.AddressBook.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbAddressBook) {
      res.json(dbAddressBook);
    });
  },
  create: function (req, res) {
    console.log(req);
    console.log("creating contact")
    db.AddressBook.create({
      name: req.body.name,
      address: req.body.address
    }).then(function (newAddressBook) {
      console.log(newAddressBook)
      res.json(newAddressBook);
    })
  },
  remove: function (req, res) {
    db.AddressBook.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbAddressBook) {
      res.json(dbAddressBook);
    });
  },
  update: function (req, res) {
    db.AddressBook.update({
      name: req.body.name,
      address: req.body.address
    }, {
      where: {
        id: req.params.id
      },
      returning: true
    }).then(function (dbAddressBook) {
      res.json(dbAddressBook);
    });
  }
};
