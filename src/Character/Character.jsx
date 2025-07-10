import { useState } from "react";
import "./styles.css";
import { getRandomHexColor } from "./utils";
const Character = () => {
  const [character, setCharacter] = useState({ name: "Undefined" });
  const randomColor = getRandomHexColor();
  return (
    <h2 className="Character" style={{ backgroundColor: randomColor }}>
      Character: {character.name}
    </h2>
  );
};

export default Character;
