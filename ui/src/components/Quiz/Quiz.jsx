import React, { useEffect, useState } from "react";
import styles from "./Quiz.module.css";
import {
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Box } from "@mui/system";
import { quizData } from "./QuizData";

function Quiz() {
  const [question, setQuestion] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (question >= quizData.questionData.length - 1)
      setTimeout(() => {
        setOpen(true);
      }, 3000);
  }, [question]);

const closeResult = () => {
  setOpen(false);
  setQuestion(0);
}

  return (
    <div className={styles.quiz}>
      <CarouselProvider
        totalSlides={quizData.questionData.length}
        visibleSlides={1}
        isIntrinsicHeight={true}
        dragEnabled={false}
        className={styles.carousel}
      >
        <Slider>
          {quizData.questionData.map((item, index) => (
            <Slide key={index}>
              <Box sx={{ padding: "5rem", backgroundColor: "#ddd" }}>
                {item.question}
              </Box>
            </Slide>
          ))}
        </Slider>
        <DotGroup />
        <ButtonNext
          onClick={() => setQuestion(question + 1)}
          style={{ margin: "2rem", padding: "1em" }}
        >
          Tak
        </ButtonNext>
        <ButtonNext
          onClick={() => setQuestion(question + 1)}
          style={{ margin: "2rem", padding: "1em" }}
        >
          Nie
        </ButtonNext>
      </CarouselProvider>

      <Dialog open={open} className={styles.dialog} onBackdropClick={closeResult}>
        <DialogTitle>
          <img
            src={`${quizData.dialogImage}.png`}
            alt={quizData.dialogImage}
            className={styles.image}
          />
          <br />
          {quizData.dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{quizData.dialogText}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Quiz;
