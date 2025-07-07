import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      image: "https://photo.znews.vn/w1920/Uploaded/wpdhnwhnw/2025_06_13/img_0141_4953_8808.jpeg.jpg",
      label: "TL;DR",
      title: "Chuyện chưa từng xảy ra với hoa hậu ở Việt Nam",
      iconType: "screen",
      slug: "chuyen-chua-tuong-xay-ra-voi-hoa-hau-o-viet-nam",
    },
    {
      image: "https://photo.znews.vn/w1920/Uploaded/rotntb/2025_06_10/Cover_nangtienca_znews.jpg",
      label: "STORY",
      title: "Đoàn xiếc 'môtô bay' cuối cùng ở Việt Nam",
      iconType: "screen",
      slug: "doan-xiem-mot-o-cuoi-cung-o-viet-nam",
    },
    {
      image: "https://photo.znews.vn/w1920/Uploaded/wpdhnwhnw/2025_06_13/img_0141_4953_8808.jpeg.jpg",
      label: "MINI MAGAZINE",
      title: "Brad Pitt đã đúng",
      iconType: "screen",
      slug: "mini-magazine-brad-pitt-da-dung",
    },
    {
      image: "https://photo.znews.vn/w1200/Uploaded/bpivpawv/2025_06_15/2025_06_15T020903Z_487121303_UP1EL6F05Z1NT_RTRMADP_3_SOCCER_CLUB_ALY_MIA.JPG",
      label: "STORY",
      title: "Một ngày như 'xuyên không' đến Huế của TikToker",
      iconType: "camera",
      slug: "mot-ngay-nhu-xuyen-khong-den-hue-cua-tiktoker",
    },
    {
        image: "https://photo.znews.vn/w1920/Uploaded/wpdhnwhnw/2025_06_13/img_0141_4953_8808.jpeg.jpg",
        label: "TL;DR",
        title: "Chuyện chưa từng xảy ra với hoa hậu ở Việt Nam",
        iconType: "screen",
        slug: "chuyen-chua-tuong-xay-ra-voi-hoa-hau-o-viet-nam-2",
      },
      {
        image: "https://photo.znews.vn/w1920/Uploaded/rotntb/2025_06_10/Cover_nangtienca_znews.jpg",
        label: "STORY",
        title: "Đoàn xiếc 'môtô bay' cuối cùng ở Việt Nam",
        iconType: "screen",
        slug: "doan-xiem-mot-o-cuoi-cung-o-viet-nam-2",
      },
      {
        image: "https://photo.znews.vn/w1920/Uploaded/wpdhnwhnw/2025_06_13/img_0141_4953_8808.jpeg.jpg",
        label: "MINI MAGAZINE",
        title: "Brad Pitt đã đúng",
        iconType: "screen",
        slug: "mini-magazine-brad-pitt-da-dung-2",
      },
      {
        image: "https://photo.znews.vn/w1920/Uploaded/wpdhnwhnw/2025_06_10/505698694_1134926265325774_5822998036492917354_n.jpg",
        label: "STORY",
        title: "Một ngày như 'xuyên không' đến Huế của TikToker",
        iconType: "camera",
        slug: "mot-ngay-nhu-xuyen-khong-den-hue-cua-tiktoker-2",
      },
  ]);
} 