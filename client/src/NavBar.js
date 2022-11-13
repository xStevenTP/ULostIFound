import React, { useState, useEffect } from "react";
import "./NavBar.css";
import axios from "axios";
import ReactDom from "react-dom";

function Navbar() {
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
      <div className="name">
        <h2>
          <center>ULost IFound</center>
        </h2>
      </div>
      <div className="middle">
        <a class="button" href="#popup1">
          <center>I FOUND</center>
        </a>
        <a class="button" href="#popup2">
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
            <div class="popup-body">
              <label for="fname">Location Found: </label>
              <select name="buildings" id="build">
                <option value="empty"></option>
                <option value="baker">Baker</option>
                <option value="barlett">Bartlett</option>
                <option value="berkshire">Berkshire</option>
                <option value="birch">Birch</option>
                <option value="bowditch">Bowditch</option>
                <option value="brett">Brett</option>
                <option value="brooks">Brooks</option>
                <option value="butterfield">Butterfield</option>
                <option value="Campus Center">Campus Center</option>
                <option value="Chadbourne">Chadbourne</option>
                <option value="Gorman">Gorman</option>
                <option value="Greenough">Greenough</option>
                <option value="Honors College">Honors College</option>
                <option value="CS Building">CS Building</option>
                <option value="Dickinson">Dickinson</option>
                <option value="Du Bois Library">Du Bois Library</option>
                <option value="Dwight">Dwight</option>
                <option value="Elm">Elm</option>
                <option value="Emerson">Emerson</option>
                <option value="Engineering Lab">Engineering Lab</option>
                <option value="Fine Arts Center">Fine Arts Center</option>
                <option value="Flint">Flint</option>
                <option value="Franklin">Franklin</option>
                <option value="Goessmann">Goessmann</option>
                <option value="Grinnell">Grinnell</option>
                <option value="Grayson">Grayson</option>
                <option value="Gunness">Gunness</option>
                <option value="Haigis">Haigis</option>
                <option value="Hampshire">Hampshiree</option>
                <option value="Hasbrouck">Hasbrouck</option>
                <option value="Dickinson">Dickinson</option>
                <option value="Herter">Herter</option>
                <option value="JQA">JQA</option>
                <option value="Johnson">Johnson</option>
                <option value="Kennedy">Kennedy</option>
                <option value="Knowles">Knowles</option>
                <option value="Lederle">Lederle</option>
                <option value="Life Sciences">Life Sciences</option>
                <option value="Lorden">Lorden</option>
                <option value="Mahar">Mahar</option>
                <option value="Lewis">Lewis</option>
                <option value="Marcus">Marcus</option>
                <option value="Marston">Marston</option>
                <option value="McNamara">McNamara</option>
                <option value="Memorial Hall">Memorial Hall</option>
                <option value="Moore">Moore</option>
                <option value="Morrill">Morrill</option>
                <option value="Mullins Center">Mullins Center</option>
                <option value="Oak">Oak</option>
                <option value="Paige">Paige</option>
                <option value="Patterson">Patterson</option>
                <option value="Physical Sciences">Physical Sciences</option>
                <option value="Robotics">Robotics</option>
                <option value="South College">South College</option>
                <option value="Student Union">Student Union</option>
                <option value="Studio Arts">Studio Arts</option>
                <option value="Sycamore">Sycamore</option>
                <option value="Tennis Courts">Tennis Courts</option>
                <option value="Thatcher">Thatcher</option>
                <option value="Thompson">Thompson</option>
                <option value="Thoreau">Thoreau</option>
                <option value="University Health Services">
                  University Health Services
                </option>
                <option value="Van Meter">Van Meter</option>
                <option value="Visitors Center">Visitors Center</option>
                <option value="Whitmore">Whitmore</option>
                <option value="Webster">Webster</option>
                <option value="Wheeler">Wheeler</option>
                <option value="Worcester">Worcester</option>
                <option value="Isenberg">Isenberg</option>
                <option value="Crotty">Crotty</option>
                <option value="Gordon">Gordon</option>
                <option value="Bromery">Bromery</option>
                <option value="Tobin">Tobin</option>
                <option value="Machmer">Machmer</option>
                <option value="Oliver">Oliver</option>
                <option value="Fernald">Fernald</option>
                <option value="ISB">ISB</option>
                <option value="ILC">ILC</option>
                <option value="LGRC">LGRC</option>
                <option value="Montague">Montague</option>
                <option value="Linden">Linden</option>
                <option value="Maple">Maple</option>
                <option value="Field">Field</option>
                <option value="Cance">Cance</option>
                <option value="Crampton">Crampton</option>
                <option value="James">James</option>
                <option value="John Adams">John Adams</option>
                <option value="MacKimmie">MacKimmie</option>
                <option value="Melville">Melville</option>
                <option value="Pierpont">Pierpont</option>
                <option value="Prince">Prince</option>
                <option value="Washington">Washington</option>
                <option value="Brown">Brown</option>
                <option value="Cashin">Cashin</option>
                <option value="Rec Center">Rec Center</option>
              </select>
              <br></br>
              <p></p>
            </div>
            <div class="popup-body">
              <label for="fname">Email: </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
              <br></br>
              <p></p>
            </div>
            <div class="popup-body">
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
              <button className="btn btn-primary">Submit</button>
            </div>
            <a class="close" href="#">
              &times;
            </a>
          </form>
        </div>
      </div>
      <div id="popup2" class="overlay">
        <div class="popup">
          <h2>
            <center>LOST</center>
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
              <label for="fname">Location Lost: </label>
              <select name="buildings" id="build">
                <option value="empty"></option>
                <option value="baker">Baker</option>
                <option value="barlett">Bartlett</option>
                <option value="berkshire">Berkshire</option>
                <option value="birch">Birch</option>
                <option value="bowditch">Bowditch</option>
                <option value="brett">Brett</option>
                <option value="brooks">Brooks</option>
                <option value="butterfield">Butterfield</option>
                <option value="Campus Center">Campus Center</option>
                <option value="Chadbourne">Chadbourne</option>
                <option value="Gorman">Gorman</option>
                <option value="Greenough">Greenough</option>
                <option value="Honors College">Honors College</option>
                <option value="CS Building">CS Building</option>
                <option value="Dickinson">Dickinson</option>
                <option value="Du Bois Library">Du Bois Library</option>
                <option value="Dwight">Dwight</option>
                <option value="Elm">Elm</option>
                <option value="Emerson">Emerson</option>
                <option value="Engineering Lab">Engineering Lab</option>
                <option value="Fine Arts Center">Fine Arts Center</option>
                <option value="Flint">Flint</option>
                <option value="Franklin">Franklin</option>
                <option value="Goessmann">Goessmann</option>
                <option value="Grinnell">Grinnell</option>
                <option value="Grayson">Grayson</option>
                <option value="Gunness">Gunness</option>
                <option value="Haigis">Haigis</option>
                <option value="Hampshire">Hampshiree</option>
                <option value="Hasbrouck">Hasbrouck</option>
                <option value="Dickinson">Dickinson</option>
                <option value="Herter">Herter</option>
                <option value="JQA">JQA</option>
                <option value="Johnson">Johnson</option>
                <option value="Kennedy">Kennedy</option>
                <option value="Knowles">Knowles</option>
                <option value="Lederle">Lederle</option>
                <option value="Life Sciences">Life Sciences</option>
                <option value="Lorden">Lorden</option>
                <option value="Mahar">Mahar</option>
                <option value="Lewis">Lewis</option>
                <option value="Marcus">Marcus</option>
                <option value="Marston">Marston</option>
                <option value="McNamara">McNamara</option>
                <option value="Memorial Hall">Memorial Hall</option>
                <option value="Moore">Moore</option>
                <option value="Morrill">Morrill</option>
                <option value="Mullins Center">Mullins Center</option>
                <option value="Oak">Oak</option>
                <option value="Paige">Paige</option>
                <option value="Patterson">Patterson</option>
                <option value="Physical Sciences">Physical Sciences</option>
                <option value="Robotics">Robotics</option>
                <option value="South College">South College</option>
                <option value="Student Union">Student Union</option>
                <option value="Studio Arts">Studio Arts</option>
                <option value="Sycamore">Sycamore</option>
                <option value="Tennis Courts">Tennis Courts</option>
                <option value="Thatcher">Thatcher</option>
                <option value="Thompson">Thompson</option>
                <option value="Thoreau">Thoreau</option>
                <option value="University Health Services">
                  University Health Services
                </option>
                <option value="Van Meter">Van Meter</option>
                <option value="Visitors Center">Visitors Center</option>
                <option value="Whitmore">Whitmore</option>
                <option value="Webster">Webster</option>
                <option value="Wheeler">Wheeler</option>
                <option value="Worcester">Worcester</option>
                <option value="Isenberg">Isenberg</option>
                <option value="Crotty">Crotty</option>
                <option value="Gordon">Gordon</option>
                <option value="Bromery">Bromery</option>
                <option value="Tobin">Tobin</option>
                <option value="Machmer">Machmer</option>
                <option value="Oliver">Oliver</option>
                <option value="Fernald">Fernald</option>
                <option value="ISB">ISB</option>
                <option value="ILC">ILC</option>
                <option value="LGRC">LGRC</option>
                <option value="Montague">Montague</option>
                <option value="Linden">Linden</option>
                <option value="Maple">Maple</option>
                <option value="Field">Field</option>
                <option value="Cance">Cance</option>
                <option value="Crampton">Crampton</option>
                <option value="James">James</option>
                <option value="John Adams">John Adams</option>
                <option value="MacKimmie">MacKimmie</option>
                <option value="Melville">Melville</option>
                <option value="Pierpont">Pierpont</option>
                <option value="Prince">Prince</option>
                <option value="Washington">Washington</option>
                <option value="Brown">Brown</option>
                <option value="Cashin">Cashin</option>
                <option value="Rec Center">Rec Center</option>
              </select>
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
              <button className="btn btn-primary">Submit</button>
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

export default Navbar;
