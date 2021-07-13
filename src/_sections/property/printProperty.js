import React, { useRef } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Map from "../../_components/map";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./print";
import { Button } from "../../_components/buttons";

const MainCont = styled.div`
  padding: 2rem 0 4rem;
`;

const Title = styled.h2`
  color: #002438;
  margin-bottom: 4rem;
`;

export default ({ state }) => {
  const componentRef = useRef();
  return (
    <MainCont>
      <ReactToPrint
        removeAfterPrint={true}
        trigger={() => <Button block>Imprimir ficha de propiedad</Button>}
        content={() => componentRef.current}
      />
      <div style={{ display: "none" }}>
        <ComponentToPrint state={state} ref={componentRef} />
      </div>
    </MainCont>
  );
};
