const AuthorController = require("../controllers/authors.controller");

module.exports = (app) => {
  app.post("/api/author", AuthorController.createAuthor);
  app.get("/api/authors", AuthorController.getAllAuthors);
  app.get("/api/author/:id", AuthorController.getOneAuthor);
  app.delete("/api/author/:id", AuthorController.deleteOneAuthor);
  app.put("/api/author/:id", AuthorController.updateOneAuthor);
};
