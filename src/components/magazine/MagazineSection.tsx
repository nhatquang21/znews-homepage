import { ICommonNews } from "@/types/common";
import MagazineSlider from "./MagazineSlider";
import { Box } from "@mui/material";

export default async function MagazineSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/magazine`, {
    cache: "no-store",
  });
  const data: ICommonNews[] = await res.json();

  return (
    <Box display={{
        xs: 'none',
        md: 'block'
    }}>
    <div
      className="max-w-full mx-auto p-4 my-6 sm:px-0"
      style={{
        background: "#eee",
       
      }}
    >
      <MagazineSlider data={data} />
    </div>
    </Box>
  );
}
