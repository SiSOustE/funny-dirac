import { useEffect, useState } from "react";
import "./styles.css";
import { getRandomHexColor, getRandomElementOfArray } from "./utils";
import { API_URL } from "./consts";
const Character = () => {
  const [character, setCharacter] = useState({ name: "Undefined" });
  const randomColor = getRandomHexColor();

  useEffect(() => {
    console.log("Component: Mount");
    return () => {
      console.log("Component: Unount");
    };
  }, []);

  useEffect(() => {
    console.log("Component: Render");
  });

  const getRandomCharacterHandler = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        const randomCharacter = getRandomElementOfArray(characters);
        setCharacter({ name: randomCharacter.name });
      });

    console.log("getRandomCharacterHandler");
  };
  return (
    <>
      <h2 className="Character" style={{ backgroundColor: randomColor }}>
        Character: {character.name}
      </h2>
      <button onClick={getRandomCharacterHandler}>Get Random Character</button>
    </>
  );
};

export default Character;
