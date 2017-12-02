import React from "react";
import styled from "styled-components";
import unchecked from "./unchecked.svg";
import checked from "./checked.svg";
import Dropdown from "../SmallDropdown";

const Container = styled.div`
  position: relative;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "CircularAir-Book", "Arial", sans-serif;
  line-height: 21px;
  font-size: 18px;
  color: #383838;
`;

const Description = styled.p`
  margin: 0;
  margin-top: 7px;
  margin-bottom: 45px;
  font-family: "CircularAir-Light", "Arial Bold", sans-serif;
  line-height: 18px;
  font-size: 14px;
  color: #383838;
  max-width: 200px;
`;

const Button = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 15px;
  right: 0;
  padding: 0;
  cursor: pointer;
`;

const getLabel = state => {
  if (state.checked) {
    return `Instant book \u2713`;
  }
};

export default class InstantBook extends React.Component {
  state = {
    checked: this.props.instant.checked
  };

  onApplyClick = () => {
    this.props.apply("instant", this.state);
  };

  onCancelClick = closeFilter => {
    this.setState(
      {
        checked: this.props.instant.checked
      },
      closeFilter
    );
  };

  componentWillReceiveProps = nextProps => {
    this.setState({
      checked: nextProps.instant.checked
    });
  };

  onButtonClick = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <Dropdown
        apply={this.onApplyClick}
        cancel={this.onCancelClick}
        onToggle={this.props.toggle}
        reset={this.props.reset}
        id="instant"
        label={getLabel(this.state) || "Instant book"}
      >
        <Container>
          <Title>Instant Book</Title>
          <Description>
            Listings you can book without waiting for host approval.
          </Description>

          <Button onClick={this.onButtonClick}>
            <img src={this.state.checked ? checked : unchecked} alt="button" />
          </Button>
        </Container>
      </Dropdown>
    );
  }
}
