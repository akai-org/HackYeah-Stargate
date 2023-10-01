import Carousel from "../../components/Carousel/Carousel";
import { carouselData } from "../../components/Carousel/CarouselData";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function LandingPage() {
  return (
    <div
      css={css`
        position: absolute;
        top: 67px;
        left: 0;
        right: 0;
        z-index: -1;
        overflow-x: hidden;
        height: calc(100vh - 70px);
      `}
    >
      <Carousel {...carouselData} />
    </div>
  );
}
