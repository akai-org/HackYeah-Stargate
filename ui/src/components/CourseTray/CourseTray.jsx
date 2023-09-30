import { Box, Typography, Link } from "@mui/material";
import { CourseTrayItem } from "./CourseTrayItem";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CourseTray = ({ title, courses }) => {
  const limitedCourses = courses.slice(0, 4);

  return (
    <Box
      sx={{
        marginBottom: "32px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          display: "inline-block",
          marginBottom: "24px",
          "&::after": {
            display: "block",
            content: '""',
            width: "calc(100% + 50px)",
            height: "2px",
            backgroundColor: "white",
          },
        }}
      >
        {title}
      </Typography>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        {limitedCourses.map((el) => (
          <CourseTrayItem
            title="Django dla początkujących"
            image=""
            author="John Doe"
            rating={4.5}
            ratingAmount={2500}
            tags={["python", "js", "canva"]}
            level={0}
          />
        ))}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Link href="#" sx={{ marginTop: "20px" }}>
          Zobacz więcej
        </Link>
      </div>
    </Box>
  );
};
