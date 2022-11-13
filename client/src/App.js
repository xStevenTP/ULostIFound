import LostTable from "./LostTable.js";
import HomePage from "./HomePage.js";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/table' element={<LostTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
