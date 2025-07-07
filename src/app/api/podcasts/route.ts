import { NextResponse } from 'next/server';

export async function GET() {
  const podcasts = [
    {
      image: 'https://photo.znews.vn/w480/Uploaded/xpivvpib/2025_06_26/Vodcast_thumbnail.jpg',
      title: "Tân Hoa hậu Phương Linh: 'Các sếp cho treo hình tôi khắp công ty'",
      slug: 'tan-hoa-hau-phuong-linh-cac-sep-cho-treo-hinh-toi-khap-cong-ty',
    },
    {
      image: 'https://photo.znews.vn/w480/Uploaded/yqdxwpujv/2025_01_27/thumb_znews.jpg',
      title: "Thu Trang: 'Tôi tham vọng có phim máy trăm tỷ đồng'",
      slug: 'thu-trang-toi-tham-vong-co-phim-may-tram-ty-dong',
    },
    {
      image: 'https://photo.znews.vn/w480/Uploaded/wyhktpu/2025_01_06/thumb_znews_1_.jpg',
      title: "BAT Việt Nam: Phát triển bền vững không phải đánh đổi lợi ích kinh tế",
      slug: 'bat-viet-nam-phat-trien-ben-vung-khong-phai-danh-doi-loi-ich-kinh-te',
    },
    {
      image: 'https://photo.znews.vn/w480/Uploaded/yqdxwpujv/2024_12_27/thumb_znews.jpg',
      title: "Lãnh đạo Shopee: 'Cạnh tranh là cần thiết'",
      slug: 'lanh-dao-shopee-canh-tranh-la-can-thiet',
    },
  ];
  return NextResponse.json(podcasts);
} 