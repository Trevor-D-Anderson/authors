import { navigate } from "@reach/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Header from "../components/Header";

const Update = (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author/" + id)
      .then((res) => {
        console.log(res.data);
        setAuthorName(res.data[0].authorName);
        setTitle(res.data[0].authorName);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = (authorName) => {
    axios
      .put("http://localhost:8000/api/author/" + id, {
        authorName,
      })
      .then((res) => console.log(res))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
    navigate("/");
  };

  return (
    <div>
      <Header title={title} />
      <Form handler={updateHandler} errors={errors} />
    </div>
  );
};

export default Update;
