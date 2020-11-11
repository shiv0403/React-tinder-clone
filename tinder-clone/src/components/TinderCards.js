import React, { useState, useEffect, useContext } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "../axios";
import { ThemeContext } from "./ThemeContext";

function TinderCards() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const [people, setpeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setpeople(req.data);
    }

    fetchData();
  }, []);

  //dir is direction of swipe
  const swiped = (direction, name) => {
    console.log(`Swiped ${name} in ${direction} direction`);
  };

  const outOffFrame = (name) => {
    console.log(`${name} left the screen`);
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOffFrame(person.name)}
            >
              {console.log(person)}

              <div
                style={{
                  backgroundImage: `url(${person.imgUrl})`,
                  boxShadow: theme.box_shadow,
                }}
                className="tinderCards_card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
