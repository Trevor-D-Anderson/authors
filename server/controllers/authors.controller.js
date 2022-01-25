const { response } = require("express");
const Author = require("../models/authors.model");

module.exports.createAuthor = (request, response) => {
  Author.create(request.body)
    .then((author) => response.json(author))
    .catch((err) => response.json(err));
};

module.exports.getAllAuthors = (request, response) => {
  Author.find({})
    .then((authors) => {
      console.log(authors);
      response.json(authors);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getOneAuthor = (req, res) => {
  Author.find({ _id: req.params.id })
    .then((author) => res.json(author))
    .catch((err) => res.json(err));
};

module.exports.deleteOneAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deleteConfirm) => res.json(deleteConfirm))
    .catch((err) => res.json(err));
};

module.exports.updateOneAuthor = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => response.json(err));
};
