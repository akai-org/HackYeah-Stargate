import { TechIconConfig } from "./TechIcon.config";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sizeDict = {
  small: "16px",
  medium: "24px",
  big: "32px",
};

const marginDict = {
  small: "4px",
  medium: "6px",
  big: "8px",
};

export const TechIcon = ({ id, size = "small" }) => {
  const iconObj = TechIconConfig.find((el) => el.key === id);

  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }

  return (
    <img
      src={getImgUrl(`./../../../assets/tech-icons/${iconObj.src}`)}
      css={css`
        width: ${sizeDict[size]};
        height: ${sizeDict[size]};
        margin: ${marginDict[size]};
      `}
      title={iconObj.title}
    />
  );
};
