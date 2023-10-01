import { Box, Typography } from "@mui/material";
import { HackathonCard } from "../../components/HackathonCard/HackathonCard";

export const Hackatons = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ marginBottom: "24px", fontWeight: 500 }}>
        Hackatony
      </Typography>
      {[1, 2, 3, 4, 5, 6].map((el) => (
        <HackathonCard
          title="HackYeah 2023"
          endDate="01.10.2023 12:00"
          href={`/hackathons/${el}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vulputate nisi vitae finibus fermentum. Phasellus faucibus augue ut
          turpis rhoncus, at posuere turpis maximus. Sed accumsan fringilla
          fringilla. Maecenas ac augue tortor. Vivamus egestas nec massa eget
          consectetur. Quisque et scelerisque mauris, vitae consectetur enim.
          Donec quis mauris nec ex lacinia mattis. Aliquam et leo nec elit
          tristique dignissim at vitae nunc. Nulla ut neque ipsum. Praesent
          consequat velit eget vehicula semper.
        </HackathonCard>
      ))}
    </Box>
  );
};
