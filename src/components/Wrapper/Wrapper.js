import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper" style={{backgroundImage: "url('https://preview.ibb.co/cp2wjd/background.jpg')"}}>{props.children}</div>;

export default Wrapper;
