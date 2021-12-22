import { useState, useEffect } from "react";
import React from "react";
import Axios from "axios";

function Jokes() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="loader">Loading...</div>;
  } else {
    return (
      <>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Jokes;
