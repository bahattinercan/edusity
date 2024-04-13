//import React from "react";
import "./title.css";

// eslint-disable-next-line react/prop-types
const Title = ({ subtitle, title }) => (
  <div className="title">
    <p>{subtitle}</p>
    <h2>{title}</h2>
  </div>
);

export default Title;
