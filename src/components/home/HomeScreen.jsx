import React from "react";
import displayResume from "../../assets/resume.png";
import "./HomeScreen.css";

export default function HomeScreen() {
  return (
    <div className="section-1">
      <div className="left">
        <h3>Impressive</h3>
        <h1>Resume</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          fuga, omnis sequi provident possimus mollitia voluptatum ipsum eveniet
          quos harum.
        </p>
        <a href="#">
          <button className="start-building">Start Building</button>
        </a>
      </div>

      <div className="right">
        <img src={displayResume} alt="display" />
      </div>
    </div>
  );
}
