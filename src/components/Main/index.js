import React from "react";
import Sidebar from "../Sidebar";
import Map from "../Map";
import './style.css';

const Main = () => {
  return (
    <div className="container mainDiv">
      <div className="row">
        <Sidebar />
        <Map />
      </div>
    </div>
  );
};

export default Main;
