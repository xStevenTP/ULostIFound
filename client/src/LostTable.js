import React from "react";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./LostTable.css";
import { textAlign } from "@mui/system";

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
    itemName: "Card",
    name: "Jasmine",
    where: "Engineering Lab",
    contact: "jasmine@gmail.com",
  },
];

const LostTable = () => {
  const theme = useTheme(THEME);
  const [filters, setFilters] = React.useState([
    "Baker",
    "Bartlett",
    "Berkshire",
    "Birch",
    "Bowditch",
    "Boyden",
    "Brett",
    "Brooks",
    "Butterfield",
    "Campus Center",
    "Chadbourne",
    "Gorman",
    "Greenough",
    "Central",
    "Champions Center",
    "Clark",
    "Honors College",
    "CS Building",
    "Coolidge",
    "Dickinson",
    "Du Bois Library",
    "Dwight",
    "Elm",
    "Emerson",
    "Engineering Lab",
    "Fine Arts Center",
    "Flint",
    "Franklin",
    "Goessmann",
    "Grinnell",
    "Grayson",
    "Gunness",
    "Haigis",
    "Hampshire",
    "Hasbrouck",
    "Herter",
    "JQA",
    "Johnson",
    "Kennedy",
    "Knowles",
    "Lederle",
    "Life Sciences",
    "Lorden",
    "Mahar",
    "Lewis",
    "Marcus",
    "Marston",
    "McNamara",
    "Memorial Hall",
    "Moore",
    "Morrill",
    "Mullins Center",
    "Oak",
    "Paige",
    "Patterson",
    "Physical Sciences",
    "Robotics",
    "South College",
    "Student Union",
    "Studio Arts",
    "Sycamore",
    "Tennis Courts",
    "Thatcher",
    "Thompson",
    "Thoreau",
    "University Health Services",
    "Van Meter",
    "Visitors Center",
    "Whitmore",
    "Webster",
    "Wheeler",
    "Worcester",
    "Isenberg",
    "Crotty",
    "Gordon",
    "Bromery",
    "Curry Hicks",
    "Tobin",
    "Machmer",
    "Du Bois",
    "Oliver",
    "Fernald",
    "Wilder",
    "Skinner",
    "ISC",
    "ILC",
    "LGRC",
    "Astronomy",
    "Furcolo",
    "Montague",
    "Totman",
    "Stockbridge",
    "Linden",
    "Maple",
    "Field",
    "Cance",
    "Crampton",
    "James",
    "John Adams",
    "MacKimmie",
    "Melville",
    "Pierpont",
    "Prince",
    "Washington",
    "Brown",
    "Cashin",
    "Rec Center",
  ]);

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
        ((filters.includes("Worcester") && item.where === "Worcester") ||
          (filters.includes("Hampshire") && item.where === "Hampshire") ||
          (filters.includes("Franklin") && item.where === "Franklin") ||
          (filters.includes("Berkshire") && item.where === "Berkshire") ||
          (filters.includes("Baker") && item.where === "Baker") ||
          (filters.includes("Brett") && item.where === "Brett") ||
          (filters.includes("Brooks") && item.where === "Brooks") ||
          (filters.includes("Butterfield") && item.where === "Butterfield") ||
          (filters.includes("Chadbourne") && item.where === "Chadbourne") ||
          (filters.includes("Gorman") && item.where === "Gorman") ||
          (filters.includes("Greenough") && item.where === "Greenough") ||
          (filters.includes("Van Meter") && item.where === "Van Meter") ||
          (filters.includes("Wheeler") && item.where === "Wheeler") ||
          (filters.includes("Birch") && item.where === "Birch") ||
          (filters.includes("Elm") && item.where === "Elm") ||
          (filters.includes("Linden") && item.where === "Linden") ||
          (filters.includes("Maple") && item.where === "Maple") ||
          (filters.includes("Oak") && item.where === "Oak") ||
          (filters.includes("Sycamore") && item.where === "Sycamore") ||
          (filters.includes("Crabtree") && item.where === "Crabtree") ||
          (filters.includes("Dwight") && item.where === "Dwight") ||
          (filters.includes("Hamlin") && item.where === "Hamlin") ||
          (filters.includes("Johnson") && item.where === "Johnson") ||
          (filters.includes("Knowlton") && item.where === "Knowlton") ||
          (filters.includes("Leach") && item.where === "Leach") ||
          (filters.includes("Lewis") && item.where === "Lewis") ||
          (filters.includes("Mary Lyon") && item.where === "Mary Lyon") ||
          (filters.includes("Thatcher") && item.where === "Thatcher") ||
          (filters.includes("Field") && item.where === "Field") ||
          (filters.includes("Grayson") && item.where === "Grayson") ||
          (filters.includes("Webster") && item.where === "Webster") ||
          (filters.includes("Cance") && item.where === "Cance") ||
          (filters.includes("Coolidge") && item.where === "Coolidge") ||
          (filters.includes("Crampton") && item.where === "Crampton") ||
          (filters.includes("Emerson") && item.where === "Emerson") ||
          (filters.includes("James") && item.where === "James") ||
          (filters.includes("John Adams") && item.where === "John Adams") ||
          (filters.includes("JQA") && item.where === "JQA") ||
          (filters.includes("Kennedy") && item.where === "Kennedy") ||
          (filters.includes("MacKimmie") && item.where === "MacKimmie") ||
          (filters.includes("Melville") && item.where === "Melville") ||
          (filters.includes("Moore") && item.where === "Moore") ||
          (filters.includes("Patterson") && item.where === "Patterson") ||
          (filters.includes("Pierpont") && item.where === "Pierpont") ||
          (filters.includes("Prince") && item.where === "Prince") ||
          (filters.includes("Thoreau") && item.where === "Thoreau") ||
          (filters.includes("Washington") && item.where === "Washington") ||
          (filters.includes("Brown") && item.where === "Brown") ||
          (filters.includes("Cashin") && item.where === "Cashin") ||
          (filters.includes("McNamara") && item.where === "McNamara") ||
          (filters.includes("Fine Arts Center") &&
            item.where === "Fine Arts Center") ||
          (filters.includes("Rec Center") && item.where === "Rec Center") ||
          (filters.includes("Mullins Center") &&
            item.where === "Mullins Center") ||
          (filters.includes("University Health Services") &&
            item.where === "University Health Services") ||
          (filters.includes("Champions Center") &&
            item.where === "Champions Center") ||
          (filters.includes("Visitors Center") &&
            item.where === "Visitors Center") ||
          (filters.includes("ILC") && item.where === "ILC") ||
          (filters.includes("Hasbrouck") && item.where === "Hasbrouck") ||
          (filters.includes("Gordon") && item.where === "Gordon") ||
          (filters.includes("Crotty") && item.where === "Crotty") ||
          (filters.includes("Mahar") && item.where === "Mahar") ||
          (filters.includes("Isenberg") && item.where === "Isenberg") ||
          (filters.includes("Bromery") && item.where === "Bromery") ||
          (filters.includes("Herter") && item.where === "Herter") ||
          (filters.includes("Hasbrouck") && item.where === "Hasbrouck") ||
          (filters.includes("Curry Hicks") && item.where === "Curry Hicks") ||
          (filters.includes("Bartlett") && item.where === "Bartlett") ||
          (filters.includes("Tobin") && item.where === "Tobin") ||
          (filters.includes("Dickinson") && item.where === "Dickinson") ||
          (filters.includes("South College") &&
            item.where === "South College") ||
          (filters.includes("Thompson") && item.where === "Thompson") ||
          (filters.includes("Machmer") && item.where === "Machmer") ||
          (filters.includes("Du Bois") && item.where === "Du Bois") ||
          (filters.includes("Studio Arts") && item.where === "Studio Arts") ||
          (filters.includes("Oliver") && item.where === "Oliver") ||
          (filters.includes("Fernald") && item.where === "Fernald") ||
          (filters.includes("Morrill") && item.where === "Morrill") ||
          (filters.includes("Clark") && item.where === "Clark") ||
          (filters.includes("Wilder") && item.where === "Wilder") ||
          (filters.includes("Skinner") && item.where === "Skinner") ||
          (filters.includes("Life Sciences") &&
            item.where === "Life Sciences") ||
          (filters.includes("ISC") && item.where === "ISC") ||
          (filters.includes("Goessman") && item.where === "Goessman") ||
          (filters.includes("Physical Sciences") &&
            item.where === "Physical Sciences") ||
          (filters.includes("LGRC") && item.where === "LGRC") ||
          (filters.includes("Marcus") && item.where === "Marcus") ||
          (filters.includes("Marston") && item.where === "Marston") ||
          (filters.includes("Knowles") && item.where === "Knowles") ||
          (filters.includes("Gunness") && item.where === "Gunness") ||
          (filters.includes("Astronomy") && item.where === "Astronomy") ||
          (filters.includes("CS Building") && item.where === "CS Building") ||
          (filters.includes("Engineering Lab") &&
            item.where === "Engineering Lab") ||
          (filters.includes("Furcolo") && item.where === "Furcolo") ||
          (filters.includes("Montague") && item.where === "Montague") ||
          (filters.includes("Totman") && item.where === "Totman") ||
          (filters.includes("Stockbridge") && item.where === "Stockbridge") ||
          (filters.includes("Flint") && item.where === "Flint")) &&
        item.itemName.toLowerCase().includes(search.toLowerCase())
    ),
  };
  return (
    <>
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
      <div className="search">
        <TextField
          id="filled-basic"
          fullWidth
          label="Search by item name"
          onChange={handleSearch}
        />
      </div>
      <Table data={data} theme={theme}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>Item Name</HeaderCell>
                <HeaderCell>Personal Name</HeaderCell>
                <HeaderCell>Where</HeaderCell>
                <HeaderCell>Contact</HeaderCell>
              </HeaderRow>
            </Header>
            <Body>
              {tableList.map((item) => (
                <Row key={item.id} item={item}>
                  <Cell>{item.itemName}</Cell>
                  <Cell>{item.name}</Cell>
                  <Cell>{item.where}</Cell>
                  <Cell>{item.contact}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    </>
  );
};

export default LostTable;
