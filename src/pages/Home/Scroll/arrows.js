import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

const ArrImg = styled.img``

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
      <ArrImg src='/assets/images/left-btn.png'/>
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
      <ArrImg src='/assets/images/right-btn.png'/>
    </Arrow>
  );
}
