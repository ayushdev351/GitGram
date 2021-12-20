import React, { useState } from "react";
import "../../App.css";
import "../pages.css";
import "./Profile.css";

import ProfileReuse from "./ProfileReuse";

export default function Profile() {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const submitHandler = () => {};

  return (
    <div className="profile">
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          value={userInput}
          className="userInput"
          placeholder="Enter your user name"
          autocomplete="off"
          onfocus="this.value=''"
          onChange={changeHandler}
        />
        <button type="submit" onCLick={submitHandler} className="btn">
          Search
        </button>
      </form>
      <ProfileReuse fetchedusername={userInput} />
    </div>
  );
}
