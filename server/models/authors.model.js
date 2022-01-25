const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: [true, "Author Name Required"],
      minlength: [3, "Length must be greater than 3 Letters"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Author", AuthorSchema);
