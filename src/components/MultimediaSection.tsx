import MultimediaContent from "@/components/MultimediaContent";
import { ICommonNews } from "@/types/common";
import Box from "@mui/material/Box";

const TABS = ["VIDEO", "PODCAST", "LONGFORM", "STORY", "QUIZZ"];

export default async function MultimediaSection() {
  const res = await fetch("http://localhost:3000/api/multimedia", { cache: "no-store" });
  const data: ICommonNews[] = await res.json();

  
  const mainIdx = Math.floor(Math.random() * 5);
  const mainItem = data[mainIdx];

  const main: ICommonNews = {
    ...mainItem,
    desc: "Newsfeed Rate tuần này đánh giá cao váy cưới hiện đại của Diệp Lê, thiết kế trong suốt khoe vòng một của Tâm Tít và tạo hình cổ trang của Tuyết Mai.",
  };

  
  const side = data.filter((_, idx) => idx !== mainIdx).slice(0, 4);

  return (
    <Box sx={{ display: {
      xs: "none",
      sm: "block"
    } }}>
      <MultimediaContent
        main={main}
        side={side}
        tabs={TABS}
      />
    </Box>
  );
}