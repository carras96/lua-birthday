import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./card";

import useDrag from "./useDrag";

// NOTE: embrace power of CSS flexbox!
// import "./hideScrollbar.css";
// import "./firstItemMargin.css";

const StyledScroolMenu = styled(ScrollMenu)`
    > .react-horizontal-scrolling-menu--scroll-container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none;
          }
    }
      
`

const Arrows = () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ marginLeft: "10px", display: "flex" }}>
        <LeftArrow /> <RightArrow />
      </div>
    </div>
  );


function Scroll({items}) {

  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag = ({ scrollContainer }) => (ev) =>
    dragMove(ev, (posDiff) => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollLeft += posDiff;
      }
    });

  const [selected, setSelected] = useState(0);
  const handleItemClick = (itemId) => () => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : 0);
  };

  return (
    <>
      <div>
        <div onMouseLeave={dragStop}>
          <StyledScroolMenu
            Footer={Arrows}
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={() => dragStop}
            onMouseMove={handleDrag}
          >
            {items?.map((node, index) => (
              <Card
                node={node}
                itemId={index} // NOTE: itemId is required for track items
                key={index}
                onClick={handleItemClick(index)}
                selected={index <= selected}
              />
            ))}
          </StyledScroolMenu>
        </div>
      </div>
    </>
  );
}
export default Scroll;

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
