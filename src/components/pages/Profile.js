import React, { useState } from "react";
import "../../App.css";
import "../pages.css";
import "./Profile.css";

export default function Profile() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [userInput, setUserInput] = useState("");

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    location,
    bio
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setBio(bio);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    setUserInput("");
  };

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
      <div className="profile-card">
        <img src={avatar} wrapped alt="user" className="profile-img" />
        <br />
        <h3>{name}</h3>
        <p>{bio}</p>
        <p>{userName}</p>
        <p>{followers}</p>
        <p>{following}</p>
        <p>{repos}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}
