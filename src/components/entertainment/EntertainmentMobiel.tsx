import NewsWithSeeMore from "@/components/common/NewsWithSeeMore";

export default async function EntertainmentMobile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <NewsWithSeeMore
      data={data}
      title="Giải trí"
      color="#ff6900"
      categories={["Âm nhạc", "Phim ảnh", "Thời trang"]}
    />
  );
}
