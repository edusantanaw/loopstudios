import { SectionContainer } from "../syles/styles";
import styled from "styled-components";
import Hero from "../assets/desktop/image-hero.jpg";
import HeroMobile from '../assets/mobile/image-hero.jpg'

const IntroSection = styled(SectionContainer)`
  height: 100vh;
  background-color: #33333327;
  padding: 0px;
  position: relative;
  display: flex;
  align-items: center;
  &::before {
    content: " ";
    background-image: url(${Hero});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    filter: opacity(1) contrast(0.9) brightness(0.6);
    width: 100%;
    height: 100%;
  }

  .immersive {
    margin-top: 100px;
    margin-left: 130px;

    border: 2px solid #fff;
    width: 47%;
    height: 280px;
    position: relative;

    h1 {
      margin: 40px 0px 0px 40px;
      color: #fff;
      font-size: 4em;
      font-family: "Josefin Sans", sans-serif;
      font-weight: 300;
      text-transform: uppercase;
      line-height: 1.1;
      letter-spacing: 2px;
    }
    @media (max-width: 1140px) {
      h1 {
        font-size: 3em;
      }
    }
    @media (max-width: 900px) {
      margin: 80px 50px 0px 40px;
      width: 500px;
    }

}
@media (max-width: 600px){
    &::before{
        background-image: url(${HeroMobile});
        background-size: cover;
        background-position: center center;
    }
}
`;

export default function Intro() {
  return (
    <IntroSection>
      <div className="immersive">
        <h1>Immersive experiences that deliver</h1>
      </div>
    </IntroSection>
  );
}
