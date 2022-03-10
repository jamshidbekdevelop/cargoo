import React from "react";
import { Outlet } from "react-router-dom";
import Sitebar from "../Sitebar";
import {
  Basic,
  Button,
  ButtonBasic,
  Caller,
  Cargo,
  Container,
  Div,
  Manu,
  ManuButton,
  Phone,
  Search,
  Title,
} from "./styled";
// import { useLocation } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation();

  return (
    <React.Fragment>

    {/* // <Basic > */}
      <Container>
        <Button>
          <Cargo />
        </Button>
        <Div>
          <ButtonBasic>DRIVER APPLICATION</ButtonBasic>
          <ButtonBasic background={"#FF4242"} width={158}>
            GET A QUOTE
          </ButtonBasic>
          <Caller>
            <Phone />
            <Title>Call</Title>
          </Caller>
          <Search />
          <ManuButton>
            <Manu />
            <Title>Menu</Title>
          </ManuButton>
        </Div>
      </Container>
      <Outlet/>
    {/* // </Basic> */}
    </React.Fragment>
  );
};

export default Navbar;
