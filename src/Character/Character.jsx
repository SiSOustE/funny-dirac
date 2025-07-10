import "./styles.css";
import { getRandomHexColor } from "./utils";
const Character = () => {
  const randomColor = getRandomHexColor();
  return (
    <h2 className="Character" style={{ backgroundColor: randomColor }}>
      Character
    </h2>
  );
};

export default Character;
