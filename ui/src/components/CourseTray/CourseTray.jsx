import { Box, Typography, Button } from "@mui/material";
import { CourseTrayItem } from "./CourseTrayItem";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CourseTray = ({ title, courses, withButton = true }) => {
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
          marginTop: "24px",
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
            href={`/courses/${el}`}
          />
        ))}
      </div>
      {withButton && (
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <Button variant="text" sx={{ marginTop: "20px" }}>
            Zobacz więcej
          </Button>
        </div>
      )}
    </Box>
  );
};
