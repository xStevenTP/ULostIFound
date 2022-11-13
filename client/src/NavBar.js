import React, { useState, useEffect } from "react";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="middle">
        <a class="button" href="#popup1">
          <center>I FOUND</center>
        </a>
      </div>

      <div classname="TypeOfPage"></div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>
            <center>FOUND</center>
          </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <label for="fname">Item Name: </label>
            <input type="text" id="fname" name="mylable"></input>
            <br></br>
            <p></p>
          </div>
          <div class="popup-body">
            <label for="fname">Personal Name: </label>
            <input type="text" id="fname" name="fname"></input>
            <br></br>
            <p></p>
          </div>
          <div class="popup-body1">
            <label for="fname">Location Found: </label>
            <input type="text" id="fname" name="fname"></input>
            <br></br>
            <p></p>
          </div>
          <div class="popup-body2">
            <label for="fname">Email: </label>
            <input type="text" id="fname" name="fname"></input>
            <br></br>
          </div>
          <div className="submit-button">
            <input type="submit" value="Submit" />
          </div>
          <a class="close" href="#">
            &times;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
