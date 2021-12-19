import React, { useState } from "react";
import "../../App.css";
import "../pages.css";
import "./Home.css";

import Profile from "./Profile";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState("");

  const setData = ({ items }) => {
    setUsers(items);
  };

  const inputHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=location:${userInput}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    setUserInput("");
  };

  return (
    <div className="home">
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          value={userInput}
          placeholder="Enter Location Here"
          className="user-input"
          onChange={inputHandler}
        />
        <button type="submit">Search</button>
      </form>
      <div className="userList">
        <ul>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.login}</p>

              <br />
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
