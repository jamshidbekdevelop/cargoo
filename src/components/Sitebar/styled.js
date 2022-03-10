import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 107px;
  margin-left: 70px;
  width: 70px;
  height: 400px;
  background-color: yellow;
`;
export const Link = styled(NavLink)`
  font-family: Inter;
  display: flex;
  flex-wrap: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  .icon {
    path {
      fill: ${({ active }) => active && "red"};
    }
    .border {
      background-color: ${({ active }) => active && "red"};
    }
  }
  text-decoration: none;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Border = styled.div`
  width: 9.3px;
  height: 57.3px;
  border-radius: 10px;
  margin-left: auto;
  border-style: none;
  background-color: #47abd8;
`;
