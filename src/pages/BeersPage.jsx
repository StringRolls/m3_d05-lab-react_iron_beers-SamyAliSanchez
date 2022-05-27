import Header from "../components/Header";
import axios from "axios";
import ListItem from "../components/ListItem";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data))
      /* console.log("response.data", response.data) */
      .catch((error) => console.log(error));
  }, []);

  return beers.length !== 0 ? (
    <div>
      <Header />
      {beers.map((beer) => (
        <Link to={`/beers/${beers._id}`} className="listLink">
          <ListItem beer={beer} />
        </Link>
      ))}
    </div>
  ) : (
    <div>
      <Header />
      <h1>Please wait, beers are coming...</h1>
    </div>
  );
}
