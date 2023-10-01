import { Typography, Box, Rating } from "@mui/material";
import placeholder from "./../../assets/images/course-placeholder.jpg";
import { useParams } from "react-router";
import { ContentTable } from "../../components/ContentTable/ContentTable";
import { useTheme } from "@mui/system";
import { TechIcon } from "../../components/commons/TechIcon/TechIcon";
import TimerIcon from "@mui/icons-material/Timer";
import { CourseTray } from "../../components/CourseTray/CourseTray";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CourseDetails = () => {
  const params = useParams();
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h2" sx={{ fontWeight: 500 }}>
        {`Django dla początkujących`}{" "}
      </Typography>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-content: center;
        `}
      >
        <img
          src={placeholder}
          css={css`
            width: 75%;
            object-fit: cover;
          `}
        />
        <div>
          <Typography
            sx={{ color: theme.colors.grey }}
          >{`Autor: John Doe`}</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vulputate nisi vitae finibus fermentum. Phasellus faucibus augue ut
            turpis rhoncus, at posuere turpis maximus. Sed accumsan fringilla
            fringilla. Maecenas ac augue tortor. Vivamus egestas nec massa eget
            consectetur. Quisque et scelerisque mauris, vitae consectetur enim.
            Donec quis mauris nec ex lacinia mattis. Aliquam et leo nec elit
            tristique dignissim at vitae nunc. Nulla ut neque ipsum. Praesent
            consequat velit eget vehicula semper. Maecenas sollicitudin, neque
            eu suscipit semper, dui ante ultrices elit, ac tristique risus metus
            nec orci. Integer suscipit neque vitae enim varius fringilla. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Proin varius urna nec
            nibh blandit viverra. Donec justo velit, auctor semper est eget,
            sollicitudin convallis arcu. Nulla euismod porta rutrum. Sed in
            vestibulum ligula, quis blandit ipsum. Nam ac orci id odio ultrices
            venenatis.
          </Typography>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 10px;
          `}
        >
          <div
            css={css`
              display: flex;
            `}
          >
            <Rating
              name="read-only"
              value={4.5}
              readOnly
              defaultValue={0}
              precision={0.5}
            />
            <Typography
              sx={{ color: theme.colors.grey, marginLeft: "8px" }}
            >{`(2500)`}</Typography>
          </div>
          <div
            css={css`
              display: flex;
              flex-direction: row;
            `}
          >
            <TimerIcon sx={{ marginRight: "8px" }} />
            <Typography>20 godzin</Typography>
          </div>
          <Typography>Poziom trudności: Początkujący</Typography>
          <div>
            <Typography>Technologie:</Typography>
            {["python", "aws", "js"].map((el) => (
              <TechIcon id={el} key={el} size="big" />
            ))}
          </div>
          <div>
            <Typography>Wymagania:</Typography>
            <ol>
              {[
                "Podstawy algorytmiki",
                "Środowisko Python",
                "Podstawy programowania w Pythonie",
                "Stałe łącze internetowe",
              ].map((el) => (
                <li>{el}</li>
              ))}
            </ol>
          </div>
        </div>
        <ContentTable
          content={[
            "Co to REST API?",
            "POST, GET, DELETE",
            "HTTP i jego tajniki",
            "Uvicorn, czym jest i co można z nim zrobić?",
          ]}
        />
      </div>
      <div>
        <div>
          <CourseTray
            title="Podobne kursy:"
            courses={[1, 2, 3, 4]}
            withButton={false}
          />
        </div>
      </div>
    </Box>
  );
};
