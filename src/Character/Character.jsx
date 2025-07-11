import { useState } from "react";
import "./styles.css";
import { getRandomHexColor } from "./utils";
import { API_URL } from "./consts";
const Character = () => {
  const [character, setCharacter] = useState({ name: "Undefined" });
  const randomColor = getRandomHexColor();
  const getRandomCharacterHandler = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        // data processing
      });

    console.log("getRandomCharacterHandler");
  };
  return (
    <div>
      <h2 className="Character" style={{ backgroundColor: randomColor }}>
        Character: {character.name}
      </h2>
      <button onclick={getRandomCharacterHandler}>Get Random Character</button>
    </div>
  );
};

export default Character;
