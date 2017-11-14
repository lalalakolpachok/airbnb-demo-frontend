import React from "react";
import {
  Section,
  SectionTitle,
  NextPage,
  CardsContainer,
  NextContainer
} from "../styled";
import { Link } from "react-router-dom";
import Card from "./Card";
import salentinaHigh from "./salentina@2x.png";
import seeHigh from "./see@2x.png";
import tropicalHigh from "./tropical@2x.png";
import SeeAll from "../SeeAll";

const Next = NextPage.extend`top: 80px;`;

export default () => {
  return (
    <Section>
      <div className="row between-xs middle-xs">
        <SectionTitle>Homes</SectionTitle>
        <Link to="homes" style={{ textDecoration: "none" }}>
          <SeeAll />
        </Link>
      </div>
      <NextContainer>
        <CardsContainer>
          <div className="row negative-indent-xs nowrap-xs wrap-lg">
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                href="#"
                imgHeight="@media screen and (min-width: 768px) { height: 204px; }"
                highRes={salentinaHigh}
                price="$82"
                name="La Salentina, see, nature & relax"
                description="Entire house · 9 beds"
                alt="La Salentina"
                stats="97 · Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                href="#"
                highRes={seeHigh}
                imgHeight="@media screen and (min-width: 768px) { height: 204px; }"
                price="$82"
                name="Your private 3 bedr. riad and exclusive sth"
                description="Entire house · 5 beds"
                alt="3 bedr."
                stats="161 · Superhost"
              />
            </div>
            <div className="col-xs-8 col-md-5 col-lg-4">
              <Card
                href="#"
                highRes={tropicalHigh}
                imgHeight="@media screen and (min-width: 768px) { height: 204px; }"
                price="$200"
                name="Dreamy Tropical Tree House"
                description="Entire treehouse · 1 beds"
                alt="Tropical Tree House"
                stats="364 · Superhost"
              />
            </div>
          </div>
        </CardsContainer>
        <Next />
      </NextContainer>
    </Section>
  );
};
