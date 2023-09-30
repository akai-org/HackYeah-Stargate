import { Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { useTheme } from "@mui/system";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Suggestion = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid black",
        padding: "10px 20px",
      }}
    >
      <div
        css={css`
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
        `}
      >
        <InfoIcon sx={{ color: theme.status.danger }} />
      </div>
      {children}
    </Box>
  );
};
