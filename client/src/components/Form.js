import React, { useState } from "react";

const Form = (props) => {
  const [authorName, setAuthorName] = useState("");
  const { handler, errors } = props;

  const submitHandler = (e) => {
    e.preventDefault();

    handler(authorName);
    setAuthorName("");
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <label>Author:</label>
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
