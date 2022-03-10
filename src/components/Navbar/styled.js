import styled from "styled-components";
import { ReactComponent as cargo } from "../../asserts/icons/cargo.svg";
import { ReactComponent as phone } from "../../asserts/icons/phone.svg";
import { ReactComponent as search } from "../../asserts/icons/search.svg";
import { ReactComponent as manu } from "../../asserts/icons/menu.svg";
export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.2);
  padding: 0px 67px 0px 127px;
`;
export const Cargo = styled(cargo)`
  width: 100%;
  height: 100%;
`;
export const Button = styled.button`
  display: flex;
  cursor: pointer;
  width: 265px;
  height: 45px;
  border-style: none;
  background-color: white;
`;
export const ButtonBasic = styled.button`
  width: ${({ width }) => `${width ? `${width}px` : "212px"}`};
  height: ${({ height }) => `${height ? "height" : "41px"}`};
  background-color: ${({ background }) =>
    `${background ? background : "#0071BC"}`};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 30px;
  color: #ffffff;
  border-style: none;
  border-radius: 25px;
  margin-right: 45px;
`;
export const Phone = styled(phone)`
  width: 15px;
  height: 28px;
`;
export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #47abd8;
`;
export const Caller = styled.button`
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  height: 40px;
  border: none;
  background-color: white;
  margin-right: 36px;
`;
export const Search = styled(search)`
  margin-top: 6px;
  width: 27px;
  height: 28px;
  cursor: pointer;
`;
export const ManuButton = styled.button`
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90px;
  height: 40px;
  border: none;
  background-color: white;
  margin-left: 44px;
`;
export const Manu = styled(manu)`
  width: 27px;
  height: 28px;
`;
export const Div = styled.div`
  display: flex;
`;
