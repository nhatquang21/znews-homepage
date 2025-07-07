import { NextResponse } from 'next/server';

export async function GET() {
  const popular = [
    {
      image: 'https://photo.znews.vn/w210/Uploaded/neg_esfjaex/2025_06_26/viem_gan_b_lay_qua_duong_nao_1_1.jpg',
      category: 'KINH DOANH',
      title: 'Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam',
      slug: 'tap-doan-thit-lon-nhat-the-gioi-muon-dat-trung-tam-san-xuat-o-viet-nam',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/neg_esfjaex/2025_06_26/viem_gan_b_lay_qua_duong_nao_1_1.jpg',
      category: 'THỂ THAO',
      title: 'Vardy bị chỉ trích tham tiền',
      slug: 'vardy-bi-chi-trich-tham-tien',
    },  
    {
      image: 'https://photo.znews.vn/w210/Uploaded/neg_esfjaex/2025_06_26/viem_gan_b_lay_qua_duong_nao_1_1.jpg',
      category: 'THẾ GIỚI',
      title: 'Chuỗi ngày chiến thắng liên tiếp của ông Trump',
      slug: 'chuoi-ngay-chien-thang-lien-tiep-cua-ong-trump',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/neg_esfjaex/2025_06_26/viem_gan_b_lay_qua_duong_nao_1_1.jpg',
      category: 'GIÁO DỤC',
      title: 'Nữ ca sĩ giải đúng 40/40 câu đề thi tốt nghiệp THPT 2025',
      slug: 'nu-ca-sy-giai-dung-4040-cau-de-thi-tot-nghiep-thpt-2025',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/neg_esfjaex/2025_06_26/viem_gan_b_lay_qua_duong_nao_1_1.jpg',
      category: 'SỨC KHỎE',
      title: 'Biểu hiện của viêm gan B giai đoạn đầu',
      slug: 'bieu-hien-cua-viem-gan-b-giai-doan-dau',
    },
  ];
  return NextResponse.json(popular);
} 