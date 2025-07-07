import { NextResponse } from 'next/server';

export async function GET() {
  const promotions = [
    {
      image: 'https://photo.znews.vn/w360/Uploaded/wyhktpu/2025_06_27/bia900x600.jpg',
      title: "Trung Nguyên Legend liên tục sáng tạo chinh phục toàn cầu'",
      slug: 'trung-nguyen-legend-lien-tuc-sang-tao-chinh-phuc-toan-cau',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/wyhktpu/2025_06_09/Hinh_1_Hinh_chu_1.jpg',
      title: "Trung Nguyên E-Coffee tiếp tục phát triển mạnh mẽ tại Mỹ'",
      slug: 'trung-nguyen-e-coffee-tiep-tuc-phat-trien-manh-me-tai-my',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/wyhktpu/2025_05_23/Hinh_1_Hinh_chu_1.jpg',
      title: "Trung Nguyên E-Coffee đạt giải thưởng 'Thương hiệu Mạnh ASEAN'",
      slug: 'trung-nguyen-e-coffee-dat-giai-thuong-thuong-hieu-manh-asean',
    },
   
  ];
  return NextResponse.json(promotions);
} 