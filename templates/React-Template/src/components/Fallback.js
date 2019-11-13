import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background.main};
  color: ${props => props.theme.background.contrastText};
`;

function Fallback() {
  return (
    <Overlay>
      <h1>Loading...</h1>
    </Overlay>
  );
}

export default Fallback;
