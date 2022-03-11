import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Clientinfo from "../clientinfo/clientinfo";
import "./individualinfo.css";

function Individualinfo() {
  return (
    <div className="individual-info">
      <Header />
      <Navbar />
      <div className="container-info">
        <div className="top-bar">
          <h5>Individual Client Information</h5>
        </div>
        <Clientinfo />
        <div className="footer-bar">
          <ul>
            <li>
              <a href="new">New</a>
            </li>
            <li>
              <a href="#undo">Undo</a>
            </li>
            <li>
              <a href="update">Update</a>
            </li>
            <li>
              <a href="#save">Save</a>
            </li>
            <li>
              <a href="#documents">Documents</a>
            </li>
            <li>
              <a href="#print">Print</a>
            </li>
            <li>
              <a href="delete">Delete</a>
            </li>
            <li>
              <a href="/">Exit</a>
            </li>
            <li>
              <a href="search">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Individualinfo;
