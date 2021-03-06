import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const Range = styled.p`
  margin: 0;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 19px;
  font-size: 16px;
  color: #383838;
`;

const Average = styled.p`
  margin: 0;
  margin-top: 7px;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 14px;
  font-size: 12px;
  color: #383838;
`;

export default class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };
  }

  onToggle = isSelected => {
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <Dropdown label="Price" onToggle={this.onToggle}>
        <Range>$10 — $1000+</Range>
        <Average>The average nightly price is $75.</Average>
      </Dropdown>
    );
  }
}
