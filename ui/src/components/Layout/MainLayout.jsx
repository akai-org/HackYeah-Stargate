import { CustomAppBar } from "../AppBar/AppBar.jsx";
import { Outlet } from "react-router-dom";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function MainLayout() {
  return (
    <>
      <CustomAppBar />
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 32px;
        `}
      >
        <div
          css={css`
            max-width: 1000px;
          `}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}
