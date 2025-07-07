  import { fontSizes } from "@/themes/theme.config";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";




const trends = [
  { label: "# FIFA Club World Cup 2025" },
  { label: "# Người nổi tiếng quảng cáo hàng giả" },
  { label: "# Sáp nhập tỉnh thành" },
];

export default function TrendingChips() {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1.5, py: 1 }}>
      <Avatar
        sx={{
          width: 24,
          height: 24,
          background: "linear-gradient(135deg, #ff512f 0%, #f09819 100%)",
        }}
      >
        <TrendingUpIcon sx={{ color: "#fff" }} />
      </Avatar>
      {trends.map((trend) => (
        <Chip
          key={trend.label}
          label={trend.label}
          sx={{
            background: "#f3f3f3",
            fontSize: fontSizes[1],
            fontWeight: 500,
            cursor: "pointer",
            px: 1.5,
            borderRadius: "20px",
            color: "#222",
            transition: "color 0.2s",
            backgroundSize: "400% 400%",
            "&:hover": {
              color: "#fff",
              background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
              backgroundSize: "400% 400%",
              animation: "bggradient 5s ease infinite",
            },
            "@keyframes bggradient": {
              "0%": { backgroundPosition: "0% 25%" },
              "25%": { backgroundPosition: "25% 50%" },
              "50%": { backgroundPosition: "50% 50%" },
              "75%": { backgroundPosition: "75% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
          variant="filled"
          clickable={false}
        />
      ))}
    </Box>
  );
}
