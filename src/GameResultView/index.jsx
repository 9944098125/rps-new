import {
	ShowResultContainer,
	ResultImagesContainer,
	ResultTextImgContainer,
	ResultText,
	ResultImageItem,
	ResultButtonContainer,
	PlayAgainButton,
} from "./styledComponents";

const GameResultView = (props) => {
	const { myChoice, opponentChoice, resultMessage, playAgain } = props;
	const { image, id } = opponentChoice;

	const onClickPlayAgainButton = () => {
		playAgain();
	};

	return (
		<ShowResultContainer>
			<ResultImagesContainer>
				<ResultTextImgContainer>
					<ResultText>YOU</ResultText>
					<ResultImageItem src={myChoice[1]} alt="your choice" />
				</ResultTextImgContainer>
				<ResultTextImgContainer>
					<ResultText>OPPONENT</ResultText>
					<ResultImageItem src={image} alt={id} />
				</ResultTextImgContainer>
			</ResultImagesContainer>
			<ResultText>{resultMessage}</ResultText>
			<ResultButtonContainer>
				<PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
					Play Again
				</PlayAgainButton>
			</ResultButtonContainer>
		</ShowResultContainer>
	);
};

export default GameResultView;
