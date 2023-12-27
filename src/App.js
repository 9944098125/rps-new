import Game from "./Game";
import "./App.css";
import rock from "./rock.png";
import scissors from "./scissors.webp";
import paper from "./paper.png";

const choicesList = [
	{
		id: "ROCK",
		image: rock,
	},
	{
		id: "SCISSORS",
		image: scissors,
	},
	{
		id: "PAPER",
		image: paper,
	},
];

function App() {
	return <Game choicesList={choicesList} />;
}

export default App;
