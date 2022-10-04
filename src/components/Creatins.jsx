import { SectionContainer, List, Title } from "../syles/styles";

import earth from "../assets/desktop/image-deep-earth.jpg";
import earth_mobile from "../assets/mobile/image-deep-earth.jpg";
import arcade from "../assets/desktop/image-night-arcade.jpg";
import arcade_mobile from "../assets/mobile/image-night-arcade.jpg";
import soccer from "../assets/desktop/image-soccer-team.jpg";
import soccer_mobile from "../assets/mobile/image-soccer-team.jpg";
import grid from "../assets/desktop/image-grid.jpg";
import grid_mobile from "../assets/mobile/image-grid.jpg";
import above from "../assets/desktop/image-from-above.jpg";
import above_mobile from "../assets/mobile/image-from-above.jpg";
import borealis from "../assets/desktop/image-pocket-borealis.jpg";
import borealis_mobile from "../assets/mobile/image-pocket-borealis.jpg";
import curiosity from "../assets/desktop/image-curiosity.jpg";
import curiosity_mobile from "../assets/mobile/image-curiosity.jpg";
import fisheye from "../assets/desktop/image-fisheye.jpg";
import fisheye_mobile from "../assets/mobile/image-fisheye.jpg";
import styled from "styled-components";

const CreationSection = styled(SectionContainer)`
  margin-top: 100px;
  margin-bottom: 200px;

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;

    button {
      width: 160px;
      height: 40px;
      background: none;
      border: 2px solid hsl(0, 0%, 55%);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-family: "Alata", sans-serif;
      font-size: 1.02em;
      color: hsl(0, 0%, 0%);
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background-color: hsl(0, 0%, 55%);
        color: hsl(0, 0%, 240%);
      }
      @media (max-width: 800px) {
        display: none;
      }
    }
  }

  @media (max-width: 1090px) {
    padding: 30px;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .top {
      margin-top: -90px;
      justify-content: center;
    }
  }
`;

const ListImage = styled(List)`
  justify-content: flex-start;
  li {
    position: relative;
    width: 22.5%;
    margin: 0px 20px 20px 0px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    filter: brightness(0.8);
  }
  span {
    width: 160px;
    position: absolute;
    margin: 140% -90%;
    z-index: 1;
    color: hsl(0, 0%, 90%);
    font-size: 2em;
    text-transform: uppercase;
  }
  #above {
    width: 240px;
  }

  @media (max-width: 1000px) {
    span {
      margin: 140% -99%;
      font-size: 1.3em;
      width: 15%;
    }
  }
  #above {
    width: 150px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    li {
      padding: 0px;
      width: 90%;
    }
    span {
      margin: 20% -93%;
    }
    h1 {
      text-align: center;
    }
  }
`;

export default function Creations() {
  return (
    <CreationSection>
      <div className="top">
        <Title>Our creations</Title>
        <button>See All</button>
      </div>
      <ListImage>
        <li>
          <picture>
            <source srcSet={earth} media="(min-width:800px)" alt="earth" />
            <img src={earth_mobile} alt="earth" />
          </picture>
          <span>Deep earth</span>
        </li>
        <li>
          <picture>
            <source srcSet={arcade} media="(min-width:800px)" />
            <img src={arcade_mobile} alt="night arcade" />
          </picture>
          <span>Night arcade</span>
        </li>
        <li>
          <picture>
            <source srcSet={soccer} media="(min-width:800px)" alt="soccer" />
            <img src={soccer_mobile} alt="soccer" />
          </picture>
          <span>Soccer team VR</span>
        </li>
        <li>
          <picture>
            <source srcSet={grid} media="(min-width:800px)" alt="grid" />
            <img src={grid_mobile} alt="grid car" />
          </picture>
          <span>The grid</span>
        </li>
      </ListImage>
      <ListImage className="list2">
        <li>
          <picture>
            <source srcSet={above} media="(min-width:800px)" alt="above" />
            <img src={above_mobile} alt="above" />
          </picture>
          <span id="above">From up above VR</span>
        </li>
        <li>
          <picture>
            <source
              srcSet={borealis}
              media="(min-width:800px)"
              alt="borealis"
            />
            <img src={borealis_mobile} alt="borealis" />
          </picture>
          <span>Pocket borealis</span>
        </li>
        <li>
          <picture>
            <source
              srcSet={curiosity}
              media="(min-width:800px)"
              alt="curiosity"
            />
            <img src={curiosity_mobile} alt="curiosity" />
          </picture>
          <span>The curiosity</span>
        </li>
        <li>
          <picture>
            <source srcSet={fisheye} media="(min-width:800px)" alt="fisheye" />
            <img src={fisheye_mobile} alt="fisheye" />
          </picture>
          <span>Make it fisheye</span>
        </li>
      </ListImage>
    </CreationSection>
  );
}
