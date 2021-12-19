import React, { useState } from "react";
import "../../App.css";
import "../pages.css";
import "./Profile.css";

export default function Profile() {
  const [name, setName] = useState("John Singh");
  const [userName, setUserName] = useState("John1245");
  const [followers, setFollowers] = useState("24");
  const [following, setFollowing] = useState("23");
  const [repos, setRepos] = useState("5");
  const [avatar, setAvatar] = useState(
    "https://avatars.githubusercontent.com/u/15178905?v=4"
  );
  const [location, setLocation] = useState("London");
  const [bio, setBio] = useState("React Developer");
  const [hireable, setHireable] = useState(false);
  const [userInput, setUserInput] = useState();

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    location,
    bio,
    hireable
  }) => {
    setName(name);
    setUserName(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
    setLocation(location);
    setBio(bio);
    setHireable(hireable);
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

  var status = hireable ? "yes" : "no";

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
        <div className="card-head">
          <h2>{name}</h2>
          <h4 className="bio">{bio}</h4>
          <h4 className="user-location">{location}</h4>
        </div>
        <div className="card-content">
          <p>User Name : {userName}</p>
          <p>Followers : {followers}</p>
          <p>Following : {following}</p>
          <p>User repo : {repos}</p>
          <p>Hireable : {status}</p>
        </div>
      </div>
    </div>
  );
}
