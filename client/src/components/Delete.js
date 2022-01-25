import axios from "axios";
import React from "react";
import { navigate } from "@reach/router";

const Delete = (props) => {
  const { id } = props;
  const deleteAuthor = (id) => {
    axios
      .delete("http://localhost:8000/api/author/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  return <button onClick={() => deleteAuthor(id)}>Delete</button>;
};

export default Delete;
