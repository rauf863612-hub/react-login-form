import React, { useState } from "react";

function MyFirstForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>My First Form</h1>
      {/* Name input */}
      <label> Name </label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      {/* Email input */}
      <label> Email </label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      {/* CHECK OUTPUT */}
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyFirstForm;
