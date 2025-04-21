import React, { useState } from "react";
import "./index.css";
import profile from "./assets/profile.png";

const ProfileCard = ({ name, bio, initialBgColor }) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setBgColor("linear-gradient(135deg, #FFD700, #FFA07A)");
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setBgColor(initialBgColor);
  };

  return (
    <div
      className={`profile-card ${hovered ? "hovered" : ""}`}
      style={{ background: bgColor, color: hovered ? "#800000" : "#800000" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={profile} alt={name} className="profile-pic" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ProfileCard
        name="John Doe"
        bio="Software Engineer"
        initialBgColor="linear-gradient(135deg, #ADD8E6, rgb(146, 23, 23))"
      />
    </div>
  );
};

export default App;
