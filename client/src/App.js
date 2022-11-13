import LostTable from "./LostTable.js";
import HomePage from "./HomePage.js";
import {
  Routes,
  Route
} from "react-router-dom";
import NavbarMap from "./NavBarMap.js";
import "./App.css";

const App = () => {
  return (
    <>
      <NavbarMap />
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/table' element={<LostTable />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
