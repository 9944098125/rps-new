import React from "react";
import Popup from "reactjs-popup";
import { RiCloseLine } from "react-icons/ri";
import Buttons from "../Buttons";
import GameResultView from "../GameResultView";
import "reactjs-popup/dist/index.css";
import {
	MainContainer,
	ScoreContainer,
	ItemsContainer,
	Heading,
	ScoreCardContainer,
	ParagraphScore,
	ScoreSpan,
	ItemsImagesContainer,
	PopUpContainer,
	PopUpButton,
	RulesImageContainer,
	RulesImage,
	CloseLineContainer,
	CloseLineButton,
} from "./styledComponents";

export default function Game(props) {
	const { choicesList } = props;
	const [values, setValues] = React.useState({
		showResult: false,
		myChoice: [],
		opponentChoice: [],
		resultMessage: "",
	});

	const [score, setScore] = React.useState(0);

	const onClickPlayAgain = () => {
		setValues({
			showResult: false,
			myChoice: [],
			opponentChoice: [],
			resultMessage: "",
		});
	};

	function onGetButtonId(id, image) {
		const number = Math.floor(Math.random() * choicesList.length);
		if (choicesList[number].id === "ROCK" && id === "SCISSORS") {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "YOU LOSE",
			});
			setScore((prevState) => prevState - 1);
			console.log(values.score);
		} else if (choicesList[number].id === "ROCK" && id === "PAPER") {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "YOU WON",
			});
			setScore((prevState) => prevState + 1);
		} else if (choicesList[number].id === "SCISSORS" && id === "ROCK") {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "YOU WON",
			});
			setScore((prevState) => prevState + 1);
		} else if (choicesList[number].id === "SCISSORS" && id === "PAPER") {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "YOU LOSE",
			});
			setScore((prevState) => prevState - 1);
		} else if (choicesList[number].id === "PAPER" && id === "ROCK") {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "YOU LOSE",
			});
			setScore((prevState) => prevState - 1);
		} else if (choicesList[number].id === "PAPER" && id === "SCISSORS") {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "YOU WON",
			});
			setScore((prevState) => prevState + 1);
		} else {
			setValues({
				showResult: true,
				myChoice: [id, image],
				opponentChoice: choicesList[number],
				resultMessage: "IT IS DRAW",
			});
			setScore((prevState) => prevState + 0);
		}
	}

	return (
		<React.Fragment>
			<MainContainer>
				<ScoreContainer>
					<ItemsContainer>
						<Heading>
							ROCK
							<br />
							PAPER
							<br />
							SCISSORS
						</Heading>
					</ItemsContainer>
					<ScoreCardContainer>
						<ParagraphScore>Score</ParagraphScore>
						<ScoreSpan>{score}</ScoreSpan>
					</ScoreCardContainer>
				</ScoreContainer>
				{values.showResult ? (
					<GameResultView
						myChoice={values.myChoice}
						opponentChoice={values.opponentChoice}
						resultMessage={values.resultMessage}
						playAgain={onClickPlayAgain}
					/>
				) : (
					<ItemsImagesContainer>
						{choicesList.map((each, idx) => (
							<Buttons key={idx} buttonDetails={each} onGetId={onGetButtonId} />
						))}
					</ItemsImagesContainer>
				)}
				<PopUpContainer>
					<Popup modal trigger={<PopUpButton type="button">Rules</PopUpButton>}>
						{(close) => (
							<RulesImageContainer>
								<CloseLineContainer>
									<CloseLineButton type="button" onClick={() => close()}>
										<RiCloseLine />
									</CloseLineButton>
								</CloseLineContainer>
								<RulesImage
									src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
									alt="rules"
								/>
							</RulesImageContainer>
						)}
					</Popup>
				</PopUpContainer>
			</MainContainer>
		</React.Fragment>
	);
}
