import { SectionContainer, Title, Paragraph } from "../syles/styles";
import styled from "styled-components";
import imageVr from "../assets/desktop/image-interactive.jpg";

const VrContainer = styled(SectionContainer)`
  padding-top: 130px;
  min-height: 100vh;
  img {
    width: 660px;
  }
  .container {
    width: 70%;
    height: 500px;
    display: flex;
    position: relative;
  }
  .text {
    padding: 70px 0 0px 70px;
    background: #fff;
    margin: 10em 32em;
    width: 600px;
    height: 400px;
    position: absolute;

    p {
      margin-top: 30px;
      max-width: 490px;
    }
  }
  @media (max-width: 1260px) {
    padding: 5%;
    img {
      width: 550px;
    }

    .text {
      padding: 25px;
      margin: 7em 27em;
      width: 500px;
      height: 300px;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0px;
    picture {
      width: 500px;
    }
    img {
      width: 500px;
    }
    .container {
      margin-top: 30px;
      width: 100%;
      flex-direction: column;
      align-items: center;
    }
    .text {
      margin-top: 10px;
      position: relative;
    }
  }
  @media (max-width: 700px) {
    margin-top: 120px;
    picture,
    img {
      margin: 0px;
      width: 400px;
    }
    .text {
      margin-top: 50px;
      width: 100%;
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      h1{
        text-align: center;
      }
      p {
        width: 390px;
        font-size: 1.2em;
        text-align: center;
      }
    }
  }
`;

export default function Vr() {
  return (
    <VrContainer>
      <div className="container">
        <picture>
          <img src={imageVr} alt="interactive vr" />
        </picture>
        <div className="text">
          <Title> The leader in interactive VR</Title>
          <Paragraph>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </Paragraph>
        </div>
      </div>
    </VrContainer>
  );
}
