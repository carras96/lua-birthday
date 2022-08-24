import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";
import TimeNode from "../../../components/TimeNode";

const BoxTimeNode = styled.div`
    width: 200px;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    display: inline-flex;
    position: relative;
    user-select:none;
    transition: all 0.3s ease-in-out;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, rgba(255, 241, 119, 0.1), rgb(255, 241, 119));
        top: 46px;
        left: -110px;
        opacity: ${(props) => props.isActive ? '1' : '0'}; 
        transition: all 0.3s ease-in-out;
    }
`

const NodeTime = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 22px;
    text-align: center;
    color: ${(props) => props.isActive ? '#FFF177' : 'rgba(255, 255, 255, 0.37)'};
`

const NodeText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 21px;
    text-align: center;
    color: rgba(255, 255, 255, 0.37);
`

export function Card({
  itemId,
  selected,
  onClick,
  node
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  console.log(selected, itemId)

  return (
      <BoxTimeNode onClick={() => onClick()} isActive={selected}>
          <NodeTime isActive={selected}>{node.time}</NodeTime>
          <TimeNode isActive={selected} />
          <NodeText>{node.note}</NodeText>
      </BoxTimeNode>
  )
}
