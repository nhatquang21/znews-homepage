import { Box, Typography, Grid } from "@mui/material";
import { fontSizes } from "@/themes/theme.config";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f7f7f7",
        py: { xs: 4 },
        px: {
          xs: 4,
          md: 0,
        },
        mt: 0,
        mb: 4,
        border: "none",
      }}
    >
      <Box className="max-w-[1100px] mx-auto px-4 sm:px-0">
        <Grid
          container
          spacing={{
            xs: 0,
            md: 2,
          }}
          alignItems="flex-start"
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              sx={{
                fontSize: fontSizes[1],
                color: {
                  xs: "#555",
                  md: "#888",
                },
                lineHeight: 1.6,
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              Tạp chí điện tử Tri Thức
              <br />
              Cơ quan chủ quản: Hội Xuất bản Việt Nam
              <br />
              Giấy phép báo chí: số 75/GP-BTTTT và số 442/GP-BTTTT do Bộ Thông
              tin và Truyền thông cấp ngày 26/02/2020 và ngày 29/11/2023
              <br />
              Phó tổng biên tập phụ trách: Lâm Quang Hiếu
            </Typography>
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
                fontSize: fontSizes[1],
                color: "#888",
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              © Toàn bộ bản quyền thuộc Tri Thức
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              pt: { xs: 0, md: 4 },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: fontSizes[1],
                color: {
                  xs: "#555",
                  md: "#888",
                },
                lineHeight: 1.6,
              }}
            >
              Tòa soạn: Tầng 10, D29 Phạm Văn Bạch, phường Yên Hòa, Hà Nội
              <br />
              Hotline: 0931.222.666
              <br />
              Liên hệ: toasoan@znews.vn
            </Typography>
          </Grid>
        </Grid>
        <Typography
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: fontSizes[1],
            color: "#555",
            lineHeight: 1.6,
            textAlign: "center",
            mt: 2,
          }}
        >
          © Toàn bộ bản quyền thuộc Tri Thức
        </Typography>
      </Box>
    </Box>
  );
}
