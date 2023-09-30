import { CourseTray } from "../../components/CourseTray/CourseTray";
import { Suggestion } from "../../components/commons/Suggestion/Suggestion";
import { Typography, Button } from "@mui/material";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Courses = () => {
  return (
    <div>
      <Suggestion>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 15px;
          `}
        >
          <Typography variant="h4">
            Poznaj swoją ścieżkę w branży IT!
          </Typography>
          <Typography>
            Witaj, przyszły specjalisto IT! Czy kiedykolwiek zastanawiałeś/aś
            się, jaka dziedzina technologii informatycznych najlepiej odpowiada
            Twoim zainteresowaniom? Teraz masz okazję odkryć swoją idealną
            ścieżkę w fascynującym świecie IT! Wypełnij naszą ankię, a otrzymasz
            spersonalizowane rekomendacje, które pomogą Ci wybrać technologiczną
            przygodę na miarę Twoich pasji i talentów.
          </Typography>
          <Button variant="contained">Wypełnij ankietę</Button>
        </div>
      </Suggestion>
      <CourseTray title={"Frontend"} courses={[1, 2, 3, 4]} />
      <CourseTray title={"Backend"} courses={[1, 2, 3, 4]} />
    </div>
  );
};
