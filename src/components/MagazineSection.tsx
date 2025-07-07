import { ICommonNews } from "@/types/common";
import MagazineSlider from "./MagazineSlider";

export default async function MagazineSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/magazine`, {
    cache: "no-store",
  });
  const data: ICommonNews[] = await res.json();
 

  return (
    <MagazineSlider data={data} />
  );
}
