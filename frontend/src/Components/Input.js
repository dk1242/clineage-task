import React, { useState } from "react";

const Input = () => {
  const [stringToSearch, setStringToSearch] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    setStringToSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(stringToSearch);
    let request = new XMLHttpRequest();

    var data = fetch("http://localhost:8000/api/search", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ stringToSearch: stringToSearch }),
    })
      .then((data) => {
        
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  };
  return (
    <div>
      <h3>Input string to search</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="string" onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Input;
