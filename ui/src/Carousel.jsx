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

export default function Carousel({
  carouselTitle,
  isPlaying,
  interval,
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
      <h2>{carouselTitle}</h2>
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
                sx={{ margin: "10rem 30rem 10rem 5rem", maxWidth: "40%" }}
              >
                <CardHeader
                  title={item.title}
                />
                <CardContent>{item.content}</CardContent>
              </Card>
            </Slide>
          </>
        ))}
      </Slider>
      <DotGroup />
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}

Carousel.propTypes = {
  carouselTitle: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  interval: PropTypes.number.isRequired,
  slidesData: PropTypes.array.isRequired,
};
