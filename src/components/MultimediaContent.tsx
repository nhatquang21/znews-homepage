import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";
import MultimediaMainCard from "./MultimediaMainCard";
import MultimediaSideCard from "./MultimediaSideCard";
import { ICommonNews, ICommonNewsWithDesc } from "@/types/common";
import { fontSizes } from "@/themes/theme.config";

interface Props {
  main: ICommonNewsWithDesc;
  side: ICommonNews[];
  tabs: string[];
}

export default function MultimediaContent({ main, side, tabs }: Props) {
  return (
    <Box
      sx={{
        bgcolor: "rgb(255, 218, 112)",
        px: 6,
        py: 4,
        maxWidth: 1200,
        mx: "auto",
        my: 4
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: fontSizes[5],
           
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box
            component="span"
            sx={{
              display: { xs: "none", sm: "inline-block" },
              width: 4,
              height: fontSizes[4],
              backgroundColor: "#dd3333",
              transform: "skew(-20deg)",
              verticalAlign: "middle",
              marginRight: 1.5,
            }}
          />
          MULTIMEDIA
        </Typography>
        <Tabs
       value={false}
          sx={{
            minHeight: 0,
            ".MuiTab-root": { minHeight: 0, fontWeight: 600, color: "#222" },
          }}
        >
          {tabs.map((tab) => (
          <Tab
              key={tab}
              value={tab}
              label={tab}
              sx={{
                px: 2,
                transition: "color 0.2s",
                "&:hover": {
                  color: "#dd3333",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      {/* Grid layout */}
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <MultimediaMainCard item={main} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={2}>
            {side.slice(0, 4).map((item) => (
              <Grid size={{ xs: 6 }} key={item.slug} sx={{ mb: 4 }}>
                <MultimediaSideCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
