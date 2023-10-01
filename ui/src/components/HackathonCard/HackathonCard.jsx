import { Card, Typography } from "@mui/material";
import placeholder from "./../../assets/images/course-placeholder.jpg";
import { useNavigate } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const HackathonCard = ({ image, title, endDate, children, href }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        padding: "4px",
        cursor: "pointer",
        margin: "24px 0",
      }}
      onClick={() => navigate(href)}
    >
      <img
        src={image || placeholder}
        css={css`
          max-width: 240px;
          margin-right: 24px;
        `}
      />
      <div>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: "0.85rem" }}>
          {`Koniec: ${endDate}`}
        </Typography>
        <Typography>{children}</Typography>
      </div>
    </Card>
  );
};
