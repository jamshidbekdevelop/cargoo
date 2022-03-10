import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* display: flex; */
  /* flex-direction: column; */
  /* flex: 50%; */
`;
export const Right = styled.div`
  display: flex;
  flex: 50%;
`;
export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ size }) => `${size ? `${size}px` : "20px"}`};
  /* width: ${({ width }) => `${width ? `${width}px` : "212px"}`}; */

  line-height: 315px;
  color: ${({ color }) => `${color ? color : "#FF4242"}`};
`;
