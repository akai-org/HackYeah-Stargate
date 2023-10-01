import { Typography, Card, Rating } from "@mui/material";
import placeholder from "./../../assets/images/course-placeholder.jpg";
import { useTheme } from "@mui/system";
import { TechIcon } from "../commons/TechIcon/TechIcon";
import { useNavigate } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const levelDict = {
  0: "Podstawowy",
  1: "Średnio zaawansowany",
  2: "Zaawansowany",
};

export const CourseTrayItem = ({
  title,
  image,
  author,
  rating,
  ratingAmount,
  tags,
  level,
  href,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Card
      variant="outlined"
      sx={{
        width: "200px",
        height: "282px",
        border: 0,
        boxShadow: "4px 4px 20px -4px rgba(66, 68, 90, 1)",
        cursor: "pointer",
      }}
      onClick={() => navigate(href)}
    >
      <img
        src={image || placeholder}
        css={css`
          width: 100%;
          height: 120px;
          object-fit: cover;
        `}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 6px;
        `}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography sx={{ fontSize: "0.85rem", color: theme.colors.grey }}>
          {author}
        </Typography>
        <div
          css={css`
            display: flex;
            gap: 12px;
          `}
        >
          <Rating
            name="read-only"
            value={rating}
            readOnly
            defaultValue={0}
            precision={0.5}
          />{" "}
          <Typography
            sx={{ color: theme.colors.grey }}
          >{`(${ratingAmount})`}</Typography>
        </div>
        <Typography
          sx={{ fontSize: "0.85rem", color: theme.colors.grey }}
        >{`Poziom: ${levelDict[level]}`}</Typography>
        <div>
          {tags.map((el) => (
            <TechIcon id={el} key={el} />
          ))}
        </div>
      </div>
    </Card>
  );
};
