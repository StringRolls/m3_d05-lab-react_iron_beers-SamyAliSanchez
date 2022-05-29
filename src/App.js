import "./App.css";
import HomePage from "./pages/HomePage";
import BeersDetailsPage from "./pages/BeersDetailsPage";
/* import NewBeerPage from "./pages/NewBeerPage";
import RandomBeersPage from "./pages/RandomBeersPage" */
import BeersPage from "./pages/BeersPage"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
{/*         <Route exact path="/new-beer" element={<NewBeerPage />} /> */}
{/*         <Route exact path="/random-beer" element={<RandomBeersPage />} /> */}
        <Route exact path="/beers" element={<BeersPage />} />
        <Route exact path="/beers/:id" element={<BeersDetailsPage />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
