import React, { useState, useEffect } from "react";
import "./NavBar.css";
import axios from "axios";

function NavbarMap() {
  const [item, setItem] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [location, setLocation] = React.useState("");

  const onSubmit = async (event) => {
    await axios.post(`http://localhost:8080/found/create`, {
      item,
      description,
      name,
      email,
      location,
    });

    setItem("");
    setDescription("");
    setName("");
    setEmail("");
    setLocation("");
  };

  return (
    <div className="Navbar">
      <div className="middle">
        <a class="button" href="#popup1">
          <center>I FOUND</center>
        </a>
        <a class="button" href="page2">
          <center>I LOST</center>
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
          <form onSubmit={onSubmit}>
            <div class="content">
              <label for="fname">Item Name: </label>
              <input
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="form-control"
              />
              <br></br>
              <p></p>
            </div>
            <div class="popup-body">
              <label for="fname">Personal Name: </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
              <br></br>
              <p></p>
            </div>
            <div class="popup-body1">
              <label for="fname">Location Found: </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-control"
              />
              <br></br>
              <p></p>
            </div>
            <div class="popup-body2">
              <label for="fname">Email: </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
              <br></br>
              <p></p>
            </div>
            <div class="popup-body3">
              <label for="fname">Description: </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
              />
              <br></br>
              <p></p>
            </div>
            <div className="submit-button">
              <button>Submit</button>
            </div>
            <a class="close" href="#">
              &times;
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NavbarMap;
