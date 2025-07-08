import NewsWithSeeMore from "@/components/common/NewsWithSeeMore";

export default async function BusinessMobile() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/business`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <NewsWithSeeMore
      data={data}
      title="Kinh doanh"
      color="#1657af"
      categories={["Bất động sản"]}
    />
  );
}
