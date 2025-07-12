import { useEffect, useState } from "react";
import "./styles.css";
import { getRandomHexColor, getRandomElementOfArray } from "./utils";
import { API_URL } from "./consts";
const Character = () => {
  const [character, setCharacter] = useState({ name: "Undefined" });
  const randomColor = getRandomHexColor();

  useEffect(() => {
    console.log("Component: Mount");
    getRandomCharacter();

    setInterval(() => {
      console.log("setInterval");
      getRandomCharacter();
    }, 3000);

    return () => {
      console.log("Component: Unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Component: Render");
  });

  const getRandomCharacter = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results;
        const randomCharacter = getRandomElementOfArray(characters);
        setCharacter({ name: randomCharacter.name });
      });
  };
  const getRandomCharacterHandler = () => {
    getRandomCharacter();
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
