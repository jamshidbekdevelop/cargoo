import React from "react";
import { navbar } from "../../untils";
import Sitebar from "../Sitebar";
import { Container, Left, Right, Title } from "./stled";

const Cargo = () => {
  return (
    <Container>
      {/* <Sitebar/> */}
      <Left>
        {
          navbar.map(({id,Element})=>(
            <div key={id} element={Element}/>         ))
        }
        gggjvgvh
        {/* <Title size={210}>CARGO</Title>
        <Title size={210}>PRIME</Title>
        <Title color={'#4F4F4F'}>WE’VE GOT THE TRANSPORTATION SOLUTIONS TO MEET YOUR NEEDS. OUR BUSINESS IS BUILT ON TRUSTWORTHY RELATIONSHIPS. THAT IS HOW WE DELIVER MAXIMUM VALUE AND EXCEPTIONAL SERVICE EVERY TIME!</Title> */}
      </Left>
      <Right>righnnjkbkjnkjt</Right>
    </Container>
  );
};

export default Cargo;
