import React from "react";
import { navbar } from "../../untils";
import { Border, Container, Image, Link } from "./styled";
import { useLocation } from "react-router-dom";
const Sitebar = () => {
  const location = useLocation();

  return (
    <Container>
      {navbar.map(({ id, Title, pathname }) => (
        <Link key={id} active={location.pathname === pathname} to={pathname}>
          <Image className="icon">
            <Title width={"37px"} height={"67px"} />
            <Border className="border" />
          </Image>
        </Link>
      ))}
    </Container>
  );
};

export default Sitebar;
