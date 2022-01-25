import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "@reach/router";
import Delete from "./Delete";

const ViewAuthor = (props) => {
  const { id } = props;
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header title={author.authorName} />
      <Delete id={author._id} />
      <Link to={`/author/edit/${author._id}`}>Edit {author.authorName}</Link>
    </div>
  );
};

export default ViewAuthor;
