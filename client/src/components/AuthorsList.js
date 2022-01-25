import { Link } from "@reach/router";
import axios from "axios";
import React, { useEffect } from "react";
import Delete from "./Delete";

const AuthorsList = (props) => {
  const { authorsList, setAuthorsList } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log(res.data);
        setAuthorsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {authorsList.map((author, index) => {
        return (
          <div key={index}>
            <p>{author.authorName}</p>
            <Link to={`/author/edit/${author._id}`}>
              Edit {author.authorName}
            </Link>
            <Link to={`/author/${author._id}`}>View</Link>
            <Delete id={author._id} />
          </div>
        );
      })}
    </div>
  );
};

export default AuthorsList;
