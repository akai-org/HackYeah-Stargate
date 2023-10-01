import { Box, Typography, Button } from "@mui/material";
import placeholder from "./../../assets/images/course-placeholder.jpg";
import { useTheme } from "@mui/system";
import { TechIcon } from "../../components/commons/TechIcon/TechIcon";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const HackathonDetails = () => {
  const theme = useTheme();

  return (
    <Box>
      <div
        css={css`
          display: flex;
          gap: 24px;
        `}
      >
        <img
          src={placeholder}
          alt=""
          css={css`
            width: 350px;
            object-fit: cover;
          `}
        />
        <div>
          <Typography
            variant="h3"
            sx={{ fontWeight: 500, marginBottom: "12px" }}
          >
            HackYeah
          </Typography>
          <Typography sx={{ color: theme.colors.grey }}>
            Koniec: 01.10.2023 12:00
          </Typography>
          <Typography>Poziom: Śrenio zaawansowany</Typography>
          <div>
            <Typography>Proponowane technologie: </Typography>
            <div
              css={css`
                margin-left: -8px;
              `}
            >
              {["js", "python", "angular", "aws", "canva", "java", "react"].map(
                (el) => (
                  <TechIcon id={el} key={el} size="big" />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, margin: "32px 0 24px" }}
        >
          Opis
        </Typography>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed esse
          quaerat accusantium. Consectetur repudiandae minus nulla ab provident
          suscipit molestiae voluptate deleniti culpa tempore, exercitationem
          iste. Dignissimos esse recusandae odit!
        </Typography>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, margin: "32px 0 24px" }}
        >
          Zadanie
        </Typography>
        <ol>
          {[
            "Wpadnij na pomysł stworzenia aplikacji, która umożliwiałaby tworzenie eventów programistycznych",
            "Zbierz drużynę",
            "Programuj!",
            "Wyślij rozwiązanie do 01.10.2023",
          ].map((el) => (
            <li>{el}</li>
          ))}
        </ol>
      </div>
      <div>
        <Typography
          variant="h4"
          sx={{ fontWeight: 500, margin: "32px 0 24px" }}
        >
          Regulamin
        </Typography>
        <Button variant="text">Regulamin hackatonu</Button>
      </div>
    </Box>
  );
};
