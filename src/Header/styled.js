import styled from "styled-components";
import arrow from "./arrow.svg";

export const PageHeader = styled.header`
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
`;

export const Logo = styled.img`
  height: 31.98px;
  width: 29.77px;
`;

export const Link = styled.a`
  display: inline-block;
  margin: 0;
  margin-right: 4.98px;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin-right: 6.98px;
  }

  @media screen and (min-width: 986px) {
    margin-right: 51.2px;
  }
`;

export const MenuBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  width: 11px;
  height: 6px;
  background: url(${arrow}) no-repeat 0 0;
  background-size: cover;
  margin-right: 7.22px;

  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 17.22px;
  }

  @media screen and (min-width: 986px) {
    display: none;
  }
`;