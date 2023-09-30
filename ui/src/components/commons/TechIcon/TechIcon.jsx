import { TechIconConfig } from "./TechIcon.config";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const TechIcon = ({ id }) => {
  const iconObj = TechIconConfig.find((el) => el.key === id);

  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }

  return (
    <img
      src={getImgUrl(`./../../../assets/tech-icons/${iconObj.src}`)}
      css={css`
        width: 16px;
        height: 16px;
        padding: 4px;
      `}
      title={iconObj.title}
    />
  );
};
