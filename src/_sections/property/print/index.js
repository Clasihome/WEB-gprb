import React from "react";
import styled from "styled-components";

import { Container, Row, Col, Hidden } from "react-grid-system";

import Property from "../property-user/property";
import User from "../property-user/user";
import Hero from "./hero";
const MainCont = styled.div``;

export class ComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = props;
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const { state } = this.state;
    console.log(state);
    return (
      <MainCont>
        <Container>
          <Hero state={state} />
        </Container>
      </MainCont>
    );
  }
}
