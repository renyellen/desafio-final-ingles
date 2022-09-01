import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 98%;
  height: 0vh;
  margin-left: 2vw;
`;
export const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  height: 10vh;
  margin-top: 28vh;
  margin-right: 10vw;
  z-index: 3;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  list-style: none;
  height: 8vh;
  width: 58%;
`;

export const Li = styled.li`
  font-family: "Rubik Dirt", cursive;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const Link = styled.a`
  color: #3b3535;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
