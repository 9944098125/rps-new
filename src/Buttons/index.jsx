import React from "react";
import {
  ButtonListContainer,
  ButtonImage,
  ImageItem,
} from "./styledComponents";

export default function Buttons(props) {
  const { buttonDetails, onGetId } = props;
  const { id, image } = buttonDetails;
  const lowerCaseId = id.toLowerCase();

  const onClickButton = () => {
    onGetId(id, image);
  };

  return (
    <React.Fragment>
      <ButtonListContainer>
        <ButtonImage
          type="button"
          data-testid={`${lowerCaseId}-button`}
          onClick={onClickButton}
        >
          <ImageItem src={image} alt={id} />
        </ButtonImage>
      </ButtonListContainer>
    </React.Fragment>
  );
}
