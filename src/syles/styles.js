import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        min-height: 100vh;
    }
`;

const HeaderContainer = styled.header`
  width: 100%;
  height: 14vh;
  padding: 70px 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 2;

  ul {
    width: 400px;
    z-index: 2;
  }
  .menu {
    color: #fff;
    font-size: 2em;
    display: none;
  }

  #close {
    display: none;
    width: 30px;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    padding: 30px;
  }

  @media (max-width: 650px) {
    ul {
      display: none;
    }
  
    #close.show{
      display: block;
    }
    ul.show_menu {
      margin: 100% 0% -11% -5%;
      padding-top: 250px;
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: #000;
      font-size: 1.3em;
      text-transform: uppercase;
      align-items: flex-start;
      justify-content: flex-start;
      li {
        padding: 20px;
        margin-bottom: 10px;
        margin-left: 20px;
      }
    }
    .menu {
      display: block;
      cursor: pointer;
    }
    .logo {
      width: 85%;
      display: flex;
      justify-content: space-between; 
      align-items: center;
      position: fixed;
      z-index: 4;
    }
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  li {
    list-style: none;
    font-family: "Josefin Sans", sans-serif;
    color: #fff;
    font-size: 400;
    font-size: 1.3em;
    margin-left: 15px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      color: pink;
      text-decoration: underline;
    }
  }
`;

const SectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0px 130px;
`;

const Title = styled.h1`
  font-size: 3em;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  color: hsl(0, 0%, 0%);
`;

const Paragraph = styled.p`
  color: hsl(0, 0%, 55%);
  font-size: 1em;
  font-weight: 400;
  font-family: "Alata", sans-serif;
`;

export {
  GlobalStyle,
  HeaderContainer,
  List,
  Title,
  Paragraph,
  SectionContainer,
};
