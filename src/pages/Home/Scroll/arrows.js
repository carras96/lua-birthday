import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

const ArrImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-image: url(${props => props.srcHover});
    transition: all 0.3s ease-in-out;
  }
`

const Button = styled.button`
  cursor: pointer;
  display: flex;
  flexDirection: column;
  justifyContent: center;
  right: 1%;
  opacity: ${(props) => props.disabled ? "0.5" : "1"};
  userSelect: none;
  background: transparent;
  outline: none;
  border: none;
  margin: 0 12px;
`

function Arrow({
  children,
  disabled,
  onClick
}) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleItemsWithoutSeparators,
    initComplete
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <ArrImg src={`${process.env.PUBLIC_URL}/assets/images/left-btn.png`} srcHover={`${process.env.PUBLIC_URL}/assets/images/left-btn-hover.png`}/>
    </Arrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    visibleItemsWithoutSeparators
  } = React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <ArrImg src={`${process.env.PUBLIC_URL}/assets/images/right-btn.png`} srcHover={`${process.env.PUBLIC_URL}/assets/images/right-btn-hover.png`}/>
    </Arrow>
  );
}
