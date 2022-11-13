import React, { useEffect } from "react";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library";

import { useTheme } from "@table-library/react-table-library/theme";
import { FormControlLabel, FormGroup, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./LostTable.css";
import axios from "axios";

const THEME = {
  Table: `
    padding: 100px;
    border-collapse: collapse;
    margin: auto;
    `,
  HeaderRow: `
    padding: 50px;
    font-size: 14px;
    background-color: #a92d42;
    text-align: center;
    border: 1px solid black;
    `,
  Row: `
    font:size: 14px;
    `,
  BaseCell: `
    font-size: 16px;
    text-align: center;
    border: 1px solid black;
    `,
};

/*
const list = [
  {
    itemName: "Airpods",
    name: "Steven",
    where: "ILC",
    contact: "steven@gmail.com",
  },
  {
    itemName: "ID",
    name: "Jason",
    where: "Hasbrouck",
    contact: "jason@gmail.com",
  },
  {
    itemName: 'Card',
    name: 'Jasmine',
    where: 'Engineering Lab',
    contact: 'jasmine@gmail.com',
  },
];
*/

const LostTable = () => {
  const [list, setList] = React.useState([]);
  
  const foundUrl = `http://localhost:8080/found/all`;
  const lostUrl = 'http://localhost:8080/lost/all';

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.all([
      axios.get(foundUrl),
      axios.get(lostUrl)
    ])
      .then(axios.spread(function (found, lost) {
        const totalItems = found.data.concat(lost.data);
        setList(totalItems);
      }))
      .catch(error => console.error((`Error: ${error}`)))
  }

  

  const theme = useTheme(THEME);
  const [filters, setFilters] = React.useState([
    'Baker', 'Bartlett', 'Berkshire', 'Birch',
    'Bowditch', 'Boyden', 'Brett', 'Brooks', 'Butterfield',
    'Campus Center', 'Crabtree', 'Chadbourne', 'Gorman', 'Greenough',
    'Champions Center', 'Clark', 'Honors College',
    'CS Building', 'Coolidge', 'Dickinson', 'Du Bois Library',
    'Dwight', 'Elm', 'Emerson', 'Engineering Lab',
    'Fine Arts Center', 'Flint', 'Franklin', 'Goessman',
    'Grinnell', 'Grayson', 'Gunness', 'Haigis',
    'Hampshire', 'Hasbrouck', 'Herter', 'Hamlin',
    'JQA', 'Johnson', 'Kennedy', 'Knowles', 'Knowlton',
    'lederle', 'Life Sciences', 'Lorden', 'Mahar', 'Lewis',
    'Marcus', 'Marston', 'McNamara', 'Memorial Hall',
    'Moore', 'Morrill', 'Mullins Center', 'Mary Lyon',
    'Oak', 'Paige', 'Patterson', 'Physical Sciences', 'Robotics',
    'South College', 'Student Union', 'Studio Arts', 'Leach',
    'Sycamore', 'Tennis Courts', 'Thatcher', 'Thompson',
    'Thoreau', 'University Health Services', 'Van Meter',
    'Visitors Center', 'Whitmore', 'Webster', 'Wheeler',
    'Worcester', 'Isenberg', 'Crotty', 'Gordon', 'Bromery', 'Curry Hicks',
    'Tobin', 'Machmer', 'Du Bois', 'Oliver', 'Fernald', 'Wilder', 'Skinner',
    'ISB', 'ILC', 'LGRC', 'Astronomy', 'Furcolo', 'Montague', 'Totman', 'Stockbridge',
    'Linden', 'Maple', 'Field', 'Cance', 'Crampton', 'James',
    'John Adams', 'MacKimmie', 'Melville', 'Pierpont', 'Prince',
    'Washington', 'Brown', 'Cashin', 'Rec Center']);

  const [search, setSearch] = React.useState("");
  const [openAcademic, setOpenAcademic] = React.useState(false);
  const [openDiningHalls, setOpenDiningHalls] = React.useState(false);
  const [openCentral, setOpenCentral] = React.useState(false);
  const [openHonors, setOpenHonors] = React.useState(false);
  const [openNortheast, setOpenNortheast] = React.useState(false);
  const [openOrchardHill, setOpenOrchardHill] = React.useState(false);
  const [openSouthwest, setOpenSouthwest] = React.useState(false);
  const [openSylvan, setOpenSylvan] = React.useState(false);
  const [openOthers, setOpenOthers] = React.useState(false);

  const handleOpenAcademic = () => {
    setOpenAcademic(!openAcademic);
    filter();
  };

  const handleOpenDiningHalls = () => {
    setOpenDiningHalls(!openDiningHalls);
  };

  const handleOpenCentral = () => {
    setOpenCentral(!openCentral);
  };

  const handleOpenHonors = () => {
    setOpenHonors(!openHonors);
  };

  const handleOpenNortheast = () => {
    setOpenNortheast(!openNortheast);
  };

  const handleOpenOrchardHill = () => {
    setOpenOrchardHill(!openOrchardHill);
  };

  const handleOpenSouthwest = () => {
    setOpenSouthwest(!openSouthwest);
  };

  const handleOpenSylvan = () => {
    setOpenSylvan(!openSylvan);
  };

  const handleOpenOthers = () => {
    setOpenOthers(!openOthers);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleFilter = (filter) => {
    filters.includes(filter)
      ? setFilters(filters.filter((value) => value !== filter))
      : setFilters(filters.concat(filter));
  };

  const data = {
    nodes: list.filter(
      (item) =>
        ((filters.includes("Worcester") && item.location === "Worcester") ||
          (filters.includes("Hampshire") && item.location === "Hampshire") ||
          (filters.includes("Franklin") && item.location === "Franklin") ||
          (filters.includes("Berkshire") && item.location === "Berkshire") ||
          (filters.includes("Baker") && item.location === "Baker") ||
          (filters.includes("Brett") && item.location === "Brett") ||
          (filters.includes("Brooks") && item.location === "Brooks") ||
          (filters.includes("Butterfield") && item.location === "Butterfield") ||
          (filters.includes("Chadbourne") && item.location === "Chadbourne") ||
          (filters.includes("Gorman") && item.location === "Gorman") ||
          (filters.includes("Greenough") && item.location === "Greenough") ||
          (filters.includes("Van Meter") && item.location === "Van Meter") ||
          (filters.includes("Wheeler") && item.location === "Wheeler") ||
          (filters.includes("Birch") && item.location === "Birch") ||
          (filters.includes("Elm") && item.location === "Elm") ||
          (filters.includes("Linden") && item.location === "Linden") ||
          (filters.includes("Maple") && item.location === "Maple") ||
          (filters.includes("Oak") && item.location === "Oak") ||
          (filters.includes("Sycamore") && item.location === "Sycamore") ||
          (filters.includes("Crabtree") && item.location === "Crabtree") ||
          (filters.includes("Dwight") && item.location === "Dwight") ||
          (filters.includes("Hamlin") && item.location === "Hamlin") ||
          (filters.includes("Johnson") && item.location === "Johnson") ||
          (filters.includes("Knowlton") && item.location === "Knowlton") ||
          (filters.includes("Leach") && item.location === "Leach") ||
          (filters.includes("Lewis") && item.location === "Lewis") ||
          (filters.includes("Mary Lyon") && item.location === "Mary Lyon") ||
          (filters.includes("Thatcher") && item.location === "Thatcher") ||
          (filters.includes("Field") && item.location === "Field") ||
          (filters.includes("Grayson") && item.location === "Grayson") ||
          (filters.includes("Webster") && item.location === "Webster") ||
          (filters.includes("Cance") && item.location === "Cance") ||
          (filters.includes("Coolidge") && item.location === "Coolidge") ||
          (filters.includes("Crampton") && item.location === "Crampton") ||
          (filters.includes("Emerson") && item.location === "Emerson") ||
          (filters.includes("James") && item.location === "James") ||
          (filters.includes("John Adams") && item.location === "John Adams") ||
          (filters.includes("JQA") && item.location === "JQA") ||
          (filters.includes("Kennedy") && item.location === "Kennedy") ||
          (filters.includes("MacKimmie") && item.location === "MacKimmie") ||
          (filters.includes("Melville") && item.location === "Melville") ||
          (filters.includes("Moore") && item.location === "Moore") ||
          (filters.includes("Patterson") && item.location === "Patterson") ||
          (filters.includes("Pierpont") && item.location === "Pierpont") ||
          (filters.includes("Prince") && item.location === "Prince") ||
          (filters.includes("Thoreau") && item.location === "Thoreau") ||
          (filters.includes("Washington") && item.location === "Washington") ||
          (filters.includes("Brown") && item.location === "Brown") ||
          (filters.includes("Cashin") && item.location === "Cashin") ||
          (filters.includes("McNamara") && item.location === "McNamara") ||
          (filters.includes("Fine Arts Center") && item.location === "Fine Arts Center") ||
          (filters.includes("Rec Center") && item.location === "Rec Center") ||
          (filters.includes("Mullins Center") && item.location === "Mullins Center") ||
          (filters.includes("University Health Services") && item.location === "University Health Services") ||
          (filters.includes("Champions Center") && item.location === "Champions Center") ||
          (filters.includes("Visitors Center") && item.location === "Visitors Center") ||
          (filters.includes("ILC") && item.location === "ILC") ||
          (filters.includes("Hasbrouck") && item.location === "Hasbrouck") ||
          (filters.includes("Gordon") && item.location === "Gordon") ||
          (filters.includes("Crotty") && item.location === "Crotty") ||
          (filters.includes("Mahar") && item.location === "Mahar") ||
          (filters.includes("Isenberg") && item.location === "Isenberg") ||
          (filters.includes("Bromery") && item.location === "Bromery") ||
          (filters.includes("Herter") && item.location === "Herter") ||
          (filters.includes("Johnson") && item.location === "Johnson") ||
          (filters.includes("Curry Hicks") && item.location === "Curry Hicks") ||
          (filters.includes("Bartlett") && item.location === "Bartlett") ||
          (filters.includes("Tobin") && item.location === "Tobin") ||
          (filters.includes("Dickinson") && item.location === "Dickinson") ||
          (filters.includes("South College") && item.location === "South College") ||
          (filters.includes("Thompson") && item.location === "Thompson") ||
          (filters.includes("Machmer") && item.location === "Machmer") ||
          (filters.includes("Du Bois") && item.location === "Du Bois") ||
          (filters.includes("Studio Arts") && item.location === "Studio Arts") ||
          (filters.includes("Oliver") && item.location === "Oliver") ||
          (filters.includes("Fernald") && item.location === "Fernald") ||
          (filters.includes("Morrill") && item.location === "Morrill") ||
          (filters.includes("Clark") && item.location === "Clark") ||
          (filters.includes("Wilder") && item.location === "Wilder") ||
          (filters.includes("Skinner") && item.location === "Skinner") ||
          (filters.includes("Life Sciences") && item.location === "Life Sciences") ||
          (filters.includes("ISC") && item.location === "ISC") ||
          (filters.includes("Goessman") && item.location === "Goessman") ||
          (filters.includes("Physical Sciences") && item.location === "Physical Sciences") ||
          (filters.includes("LGRC") && item.location === "LGRC") ||
          (filters.includes("Marcus") && item.location === "Marcus") ||
          (filters.includes("Marston") && item.location === "Marston") ||
          (filters.includes("Knowles") && item.location === "Knowles") ||
          (filters.includes("Gunness") && item.location === "Gunness") ||
          (filters.includes("Astronomy") && item.location === "Astronomy") ||
          (filters.includes("CS Building") && item.location === "CS Building") ||
          (filters.includes("Engineering Lab") && item.location === "Engineering Lab") ||
          (filters.includes("Furcolo") && item.location === "Furcolo") ||
          (filters.includes("Montague") && item.location === "Montague") ||
          (filters.includes("Totman") && item.location === "Totman") ||
          (filters.includes("Stockbridge") && item.location === "Stockbridge") ||
          (filters.includes("Lederle") && item.location === "Lederle") ||
          (filters.includes("Flint") && item.location === "Flint")) &&
          item.item.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const filter = () => {};
  return (
    <>
      <div class="box">
        <div className="filter">
          <Button onClick={handleOpenAcademic}>Academic Buildings</Button>
          {openAcademic ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("ILC")}
                    onChange={() => handleFilter("ILC")}
                  />
                }
                label="ILC"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Hasbrouck")}
                    onChange={() => handleFilter("Hasbrouck")}
                  />
                }
                label="Hasbrouck"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Gordon")}
                    onChange={() => handleFilter("Gordon")}
                  />
                }
                label="Gordon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Crotty")}
                    onChange={() => handleFilter("Crotty")}
                  />
                }
                label="Crotty"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Mahar")}
                    onChange={() => handleFilter("Mahar")}
                  />
                }
                label="Mahar"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Isenberg")}
                    onChange={() => handleFilter("Isenberg")}
                  />
                }
                label="Isenberg"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Bromery")}
                    onChange={() => handleFilter("Bromery")}
                  />
                }
                label="Bromery"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Herter")}
                    onChange={() => handleFilter("Herter")}
                  />
                }
                label="Herter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Hasbrouck")}
                    onChange={() => handleFilter("Hasbrouck")}
                  />
                }
                label="Hasbrouck"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Curry Hicks")}
                    onChange={() => handleFilter("Curry Hicks")}
                  />
                }
                label="Curry Hicks"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Bartlett")}
                    onChange={() => handleFilter("Bartlett")}
                  />
                }
                label="Bartlett"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Tobin")}
                    onChange={() => handleFilter("Tobin")}
                  />
                }
                label="Tobin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Dickinson")}
                    onChange={() => handleFilter("Dickinson")}
                  />
                }
                label="Dickinson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("South College")}
                    onChange={() => handleFilter("South College")}
                  />
                }
                label="South College"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Thompson")}
                    onChange={() => handleFilter("Thompson")}
                  />
                }
                label="Thompson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Machmer")}
                    onChange={() => handleFilter("Machmer")}
                  />
                }
                label="Machmer"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Du Bois")}
                    onChange={() => handleFilter("Du Bois")}
                  />
                }
                label="Du Bois"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Studio Arts")}
                    onChange={() => handleFilter("Studio Arts")}
                  />
                }
                label="Studio Arts"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Oliver")}
                    onChange={() => handleFilter("Oliver")}
                  />
                }
                label="Oliver"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Fernald")}
                    onChange={() => handleFilter("Fernald")}
                  />
                }
                label="Fernald"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Morriil")}
                    onChange={() => handleFilter("Morrill")}
                  />
                }
                label="Morrill"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Clark")}
                    onChange={() => handleFilter("Clark")}
                  />
                }
                label="Clark"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Wilder")}
                    onChange={() => handleFilter("Wilder")}
                  />
                }
                label="Wilder"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Skinner")}
                    onChange={() => handleFilter("Skinner")}
                  />
                }
                label="Skinner"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Life Sciences")}
                    onChange={() => handleFilter("Life Sciences")}
                  />
                }
                label="Life Sciences"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("ISC")}
                    onChange={() => handleFilter("ISC")}
                  />
                }
                label="ISC"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Goessman")}
                    onChange={() => handleFilter("Goessman")}
                  />
                }
                label="Goessman"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Physical Sciences")}
                    onChange={() => handleFilter("Physical Sciences")}
                  />
                }
                label="Physical Sciences"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("LGRC")}
                    onChange={() => handleFilter("LGRC")}
                  />
                }
                label="LGRC"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Marcus")}
                    onChange={() => handleFilter("Marcus")}
                  />
                }
                label="Marcus"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Marston")}
                    onChange={() => handleFilter("Marston")}
                  />
                }
                label="Marston"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Knowles")}
                    onChange={() => handleFilter("Knowles")}
                  />
                }
                label="Knowles"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Gunness")}
                    onChange={() => handleFilter("Gunness")}
                  />
                }
                label="Gunness"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Astronomy")}
                    onChange={() => handleFilter("Astronomy")}
                  />
                }
                label="Astronomy"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("CS Building")}
                    onChange={() => handleFilter("CS Building")}
                  />
                }
                label="CS Building"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Engineering Lab")}
                    onChange={() => handleFilter("Engineering Lab")}
                  />
                }
                label="Engineering Lab"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Furcolo")}
                    onChange={() => handleFilter("Furcolo")}
                  />
                }
                label="Furcolo"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Montagaue")}
                    onChange={() => handleFilter("Montague")}
                  />
                }
                label="Montague"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Totman")}
                    onChange={() => handleFilter("Totman")}
                  />
                }
                label="Totman"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Stockbridge")}
                    onChange={() => handleFilter("Stockbridge")}
                  />
                }
                label="Stockbridge"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Flint")}
                    onChange={() => handleFilter("Flint")}
                  />
                }
                label="Flint"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenDiningHalls}>Dining Halls</Button>
          {openDiningHalls ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Worcester")}
                    onChange={() => handleFilter("Worcester")}
                  />
                }
                label="Worcester"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Berkshire")}
                    onChange={() => handleFilter("Berkshire")}
                  />
                }
                label="Berkshire"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Franklin")}
                    onChange={() => handleFilter("Franklin")}
                  />
                }
                label="Franklin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Hampshire")}
                    onChange={() => handleFilter("Hampshire")}
                  />
                }
                label="Hampshire"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenCentral}>Central</Button>
          {openCentral ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Baker")}
                    onChange={() => handleFilter("Baker")}
                  />
                }
                label="Baker"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Brett")}
                    onChange={() => handleFilter("Brett")}
                  />
                }
                label="Brett"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Brooks")}
                    onChange={() => handleFilter("Brooks")}
                  />
                }
                label="Brooks"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Butterfield")}
                    onChange={() => handleFilter("Butterfield")}
                  />
                }
                label="Butterfield"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Chadbourne")}
                    onChange={() => handleFilter("Chadbourne")}
                  />
                }
                label="Chadbourne"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Gorman")}
                    onChange={() => handleFilter("Gorman")}
                  />
                }
                label="Gorman"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Greenough")}
                    onChange={() => handleFilter("Greenough")}
                  />
                }
                label="Greenough"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Van Meter")}
                    onChange={() => handleFilter("Van Meter")}
                  />
                }
                label="Van Meter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Wheeler")}
                    onChange={() => handleFilter("Wheeler")}
                  />
                }
                label="Wheeler"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenHonors}>Honors</Button>
          {openHonors ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Birch")}
                    onChange={() => handleFilter("Birch")}
                  />
                }
                label="Birch"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Elm")}
                    onChange={() => handleFilter("Elm")}
                  />
                }
                label="Elm"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Linden")}
                    onChange={() => handleFilter("Linden")}
                  />
                }
                label="Linden"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Maple")}
                    onChange={() => handleFilter("Maple")}
                  />
                }
                label="Maple"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Oak")}
                    onChange={() => handleFilter("Oak")}
                  />
                }
                label="Oak"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Sycamore")}
                    onChange={() => handleFilter("Sycamore")}
                  />
                }
                label="Sycamore"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenNortheast}>Northeast</Button>
          {openNortheast ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Crabtree")}
                    onChange={() => handleFilter("Crabtree")}
                  />
                }
                label="Crabtree"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Dwight")}
                    onChange={() => handleFilter("Dwight")}
                  />
                }
                label="Dwight"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Hamlin")}
                    onChange={() => handleFilter("Hamlin")}
                  />
                }
                label="Hamlin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Johnson")}
                    onChange={() => handleFilter("Johnson")}
                  />
                }
                label="Johnson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Knowlton")}
                    onChange={() => handleFilter("Knowlton")}
                  />
                }
                label="Knowlton"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Leach")}
                    onChange={() => handleFilter("Leach")}
                  />
                }
                label="Leach"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Lewis")}
                    onChange={() => handleFilter("Lewis")}
                  />
                }
                label="Lewis"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Mary Lyon")}
                    onChange={() => handleFilter("Mary Lyon")}
                  />
                }
                label="Mary Lyon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Thatcher")}
                    onChange={() => handleFilter("Thatcher")}
                  />
                }
                label="Thatcher"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenOrchardHill}>Orchard Hill</Button>
          {openOrchardHill ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Dickinson")}
                    onChange={() => handleFilter("Dickinson")}
                  />
                }
                label="Dickinson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Field")}
                    onChange={() => handleFilter("Field")}
                  />
                }
                label="Field"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Grayson")}
                    onChange={() => handleFilter("Grayson")}
                  />
                }
                label="Grayson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Webster")}
                    onChange={() => handleFilter("Webster")}
                  />
                }
                label="Webster"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenSouthwest}>Southwest</Button>
          {openSouthwest ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Cance")}
                    onChange={() => handleFilter("Cance")}
                  />
                }
                label="Cance"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Coolidge")}
                    onChange={() => handleFilter("Coolidge")}
                  />
                }
                label="Coolidge"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Crampton")}
                    onChange={() => handleFilter("Crampton")}
                  />
                }
                label="Crampton"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Emerson")}
                    onChange={() => handleFilter("Emerson")}
                  />
                }
                label="Emerson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("James")}
                    onChange={() => handleFilter("James")}
                  />
                }
                label="James"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("John Adams")}
                    onChange={() => handleFilter("John Adams")}
                  />
                }
                label="John Adams"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("JQA")}
                    onChange={() => handleFilter("JQA")}
                  />
                }
                label="JQA"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Kennedy")}
                    onChange={() => handleFilter("Kennedy")}
                  />
                }
                label="Kennedy"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("MacKimmie")}
                    onChange={() => handleFilter("MacKimmie")}
                  />
                }
                label="MacKimmie"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Melville")}
                    onChange={() => handleFilter("Melville")}
                  />
                }
                label="Melville"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Moore")}
                    onChange={() => handleFilter("Moore")}
                  />
                }
                label="Moore"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Patterson")}
                    onChange={() => handleFilter("Patterson")}
                  />
                }
                label="Patterson"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Pierpont")}
                    onChange={() => handleFilter("Pierpont")}
                  />
                }
                label="Pierpont"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Prince")}
                    onChange={() => handleFilter("Prince")}
                  />
                }
                label="Prince"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Thoreau")}
                    onChange={() => handleFilter("Thoreau")}
                  />
                }
                label="Thoreau"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Washington")}
                    onChange={() => handleFilter("Washington")}
                  />
                }
                label="Washington"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenSylvan}>Sylvan</Button>
          {openSylvan ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Brown")}
                    onChange={() => handleFilter("Brown")}
                  />
                }
                label="Brown"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Cashin")}
                    onChange={() => handleFilter("Cashin")}
                  />
                }
                label="Cashin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("McNamara")}
                    onChange={() => handleFilter("McNamara")}
                  />
                }
                label="McNamara"
              />
            </FormGroup>
          ) : null}
          <Button onClick={handleOpenOthers}>Other Buildings</Button>
          {openOthers ? (
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Mullins Center")}
                    onChange={() => handleFilter("Mullins Center")}
                  />
                }
                label="Mullins Center"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Visitors Center")}
                    onChange={() => handleFilter("Visitors Center")}
                  />
                }
                label="Visitors Center"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Fine Arts Center")}
                    onChange={() => handleFilter("Fine Arts Center")}
                  />
                }
                label="Fine Arts Center"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("University Health Services")}
                    onChange={() => handleFilter("University Health Services")}
                  />
                }
                label="University Health Services"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Rec Center")}
                    onChange={() => handleFilter("Rec Center")}
                  />
                }
                label="Rec Center"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    checked={filters.includes("Champions Center")}
                    onChange={() => handleFilter("Champions Center")}
                  />
                }
                label="Champions Center"
              />
            </FormGroup>
          ) : null}
        </div>
      </div>
      <div className="search">
        <TextField
          id="filled-basic"
          fullWidth
          label="Search by item name"
          onChange={handleSearch}
        />
      </div>
      <div className="table">
        <Table data={data} theme={theme}>
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  <HeaderCell>Item Name</HeaderCell>
                  <HeaderCell>Personal Name</HeaderCell>
                  <HeaderCell>Where</HeaderCell>
                  <HeaderCell>Contact</HeaderCell>
                  <HeaderCell>Status</HeaderCell>
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((item) => (
                  <Row key={item.id} item={item}>
                    <Cell>{item.item}</Cell>
                    <Cell>{item.name}</Cell>
                    <Cell>{item.location}</Cell>
                    <Cell>{item.email}</Cell>
                    <Cell>{item.status}</Cell>
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </div>
    </>
  );
};

export default LostTable;
