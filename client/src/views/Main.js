import React, { useState } from "react";
import AuthorsList from "../components/AuthorsList";
import Form from "../components/Form";
import Header from "../components/Header";
import axios from "axios";

const Main = () => {
  const [errors, setErrors] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);

  const newAuthorHandler = (authorName) => {
    axios
      .post("http://localhost:8000/api/author", {
        authorName,
      })
      .then((res) => {
        console.log(res);
        setAuthorsList([...authorsList, res.data]);
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <Header title={"All Authors"} />
      <Form handler={newAuthorHandler} errors={errors} />
      <AuthorsList authorsList={authorsList} setAuthorsList={setAuthorsList} />
    </div>
  );
};

export default Main;
