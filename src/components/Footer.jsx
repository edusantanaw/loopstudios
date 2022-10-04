import styled from "styled-components";
import logo from "../assets/logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import { List, Paragraph } from "../syles/styles";

const FooterContainer = styled.footer`
  height: 23vh;
  padding: 35px 130px;
  background-color: hsl(0, 0%, 0%);
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    width: 25%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    ul {
      display: flex;
      li {
        list-style: none;
        color: white;
        font-size: 1.1em;
        margin-left: 14px;
      }
    }
  }
  .list2 {
    margin-top: 20px;
    ul li {
      margin-left: 0px;
      margin-right: 15px;
      font-size: 0.9em;
    }
    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: 850px) {
    padding: 30px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 500px;

    div {
      margin-bottom: 30px;
      img {
        margin-bottom: 30px;
      }
      ul {
        margin-bottom: 30px;
      }
      .list2 {
        height: 200px;
        flex-direction: column;
        margin-bottom: 20px;
      }
      p{
        width: 300px;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="">
        <img src={logo} alt="logo" />
        <List className="list2">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </List>
      </div>
      <div>
        <List>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaPinterest />
          </li>
          <li>
            <FaInstagram />
          </li>
        </List>
        <Paragraph> © 2021 Loopstudios. All rights reserved.</Paragraph>
      </div>
    </FooterContainer>
  );
}
