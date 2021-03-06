const { response } = require("express");
const Author = require("../models/authors.model");

module.exports.createAuthor = (request, response) => {
  const { authorName } = request.body;
  Author.create({ authorName: authorName })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
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
  const { authorName } = request.body;
  Author.findOneAndUpdate(
    { _id: request.params.id },
    { authorName: authorName },
    { runValidators: true, context: "query" }
    // {
    //   new: true,
    // }
  )
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => {
      response.status(400).json(err), console.log(err);
    });
};
