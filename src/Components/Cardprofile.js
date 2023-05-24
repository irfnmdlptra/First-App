import React from "react";
import "../css/Style.css";
import Profile from '../assets/profil.png'

const Cardprofile = () => {
  return (
    // 1 inline css
    <div
      style={{
        backgroundColor: "black",
        backgroundImage: "url(https://source.unsplash.com/1226x655?dark)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 2 Css File  */}
      <div className="card">
        <img src={Profile} />
        <div>Frontend Developer</div>
        <h2>Irfan Syahputra</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae minima veniam libero at! Fugit ipsum quos inventore excepturi aspernatur.</p>
        <button>Contact Me</button>
      </div>
    </div>
  );
};

export default Cardprofile;
