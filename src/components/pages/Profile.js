import React, { useState, useEffect } from "react";
import "../../App.css";
import "../pages.css";

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
  const [error, setError] = useState("");

  // useEffect(() => {
  //   fetch("https://api.github.com/users/example")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

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
  };

  return (
    <div className="profile">
      <form onSubmit={submitHandler}>
        <label for="user">UserName</label>
        <br />
        <input
          type="text"
          id="user"
          className="userInput"
          placeholder="Enter your user name here"
          onChange={changeHandler}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <br />
        <br />
        <img src={avatar} wrapped alt="user" ui={false} />
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
