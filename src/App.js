import Game from "./Game";
import "./App.css";

const choicesList = [
  {
    id: "ROCK",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fist.svg/1122px-Fist.svg.png",
  },
  {
    id: "SCISSORS",
    image: "https://www.rock-paper-scissors-game.com/i/scissors.png",
  },
  {
    id: "PAPER",
    image:
      "https://cdn.pixabay.com/photo/2014/04/02/16/16/hand-306763_1280.png",
  },
];

function App() {
  return <Game choicesList={choicesList} />;
}

export default App;
