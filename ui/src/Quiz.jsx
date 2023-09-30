import React, { useEffect, useState } from "react";
import styles from "./Quiz.module.css";
import {
  ButtonNext,
  CarouselProvider,
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

function Quiz() {
  const [question, setQuestion] = useState(0);
  const [open, setOpen] = useState(false);

  const questionData = [
    {
      question:
        "Czy preferujesz tworzenie interfejsów użytkownika, które są dynamiczne i reagują na interakcję użytkownika?",
    },
    {
      question:
        "Czy chcesz korzystać z gotowych komponentów i bibliotek do tworzenia interfejsu użytkownika?",
    },
    {
      question:
        "Czy zależy ci na dużej społeczności i dostępie do dużej ilości materiałów edukacyjnych?",
    },
    { question: "Czy interesujesz się tworzeniem aplikacji mobilnych?" },
    { question: "Czy interesujesz się analizą danych?" },
  ];

  useEffect(() => {
    if (question === questionData.length - 1)
      setTimeout(() => {
        setOpen(true);
      }, 3000);
  }, [question]);

  return (
    <div className={styles.quiz}>
      <CarouselProvider
        totalSlides={questionData.length}
        visibleSlides={1}
        isIntrinsicHeight={true}
        className={styles.carousel}
      >
        <Slider>
          {questionData.map((item, index) => (
            <Slide key={index}>
              <Box sx={{ padding: "5rem", backgroundColor: "#ddd" }}>
                {item.question}
              </Box>
            </Slide>
          ))}
        </Slider>
        <ButtonNext
          onClick={() => setQuestion(question + 1)}
          style={{ margin: "2rem", padding: "1em" }}
        >
          Yes
        </ButtonNext>
        <ButtonNext
          onClick={() => setQuestion(question + 1)}
          style={{ margin: "2rem", padding: "1em" }}
        >
          No
        </ButtonNext>
      </CarouselProvider>

      <Dialog open={open} className={styles.dialog}>
        <DialogTitle>
          <img src="react.png" alt="react" className={styles.image} />
          <br />
          React
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Powinieneś spróbować React'a. Dzięki niemu będziesz mógł tworzyć
            frontend dla strony oparty o komponentach. Posiada on dużą
            społeczność, dzięki czemu łatwo znaleźć potrzebne informacje oraz
            biblioteki z gotowymi komponentami. React jest również
            wykorzystywany przez wiele firm, co może pomóc w znalezieniu pracy.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Quiz;
