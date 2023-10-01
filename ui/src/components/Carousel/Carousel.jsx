import { Card, CardContent, CardHeader } from "@mui/material";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import PropTypes from "prop-types";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Carousel({
  showTitle,
  carouselTitle,
  isPlaying,
  interval,
  dots,
  buttons,
  slidesData,
}) {
  return (
    <CarouselProvider
      totalSlides={slidesData.length}
      visibleSlides={1}
      isIntrinsicHeight={true}
      interval={interval}
      isPlaying={isPlaying}
      infinite={true}
    >
      {showTitle && <h2>{carouselTitle}</h2>}
      <Slider>
        {slidesData.map((item, index) => (
          <>
            <Slide
              index={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}
            >
              <Card
                variant="outlined"
                sx={{ margin: "17rem 30rem 17rem 5rem", maxWidth: "40%" }}
              >
                <CardHeader title={item.title} />
                <CardContent>{item.content}</CardContent>
              </Card>
            </Slide>
          </>
        ))}
      </Slider>
      {dots && <DotGroup />}
      {buttons && <ButtonBack>{"<"}</ButtonBack> && (
        <ButtonNext>{">"}</ButtonNext>
      )}
    </CarouselProvider>
  );
}

Carousel.propTypes = {
  showTitle: PropTypes.bool.isRequired,
  carouselTitle: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  interval: PropTypes.number.isRequired,
  dots: PropTypes.bool.isRequired,
  buttons: PropTypes.bool.isRequired,
  slidesData: PropTypes.array.isRequired,
};
