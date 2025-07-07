import { NextResponse } from 'next/server';

export async function GET() {
  const business = [
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_07/pexels_rdne_8279515.jpg',
      title: 'Người trẻ Singapore không muốn làm một chỗ quá 3 năm',
      desc: 'Nhiều người trẻ ở đảo quốc sư tử rời bỏ công việc đầu tiên chỉ sau vài năm, khiến phụ huynh thất vọng và gây áp lực lên doanh nghiệp về chi phí đào tạo lẫn thích nghi nhân sự mới.',
      slug: 'nhiem-vung-singapore-khong-muon-lam-mot-cho-qua-3-nam',
    },
    {
      image: 'https://photo.znews.vn/w360/Uploaded/rotnba/2025_07_07/snapins_ai_3663424048126325347_1_.jpg',
      title: 'Louis Vuitton làm gì với HIEUTHUHAI, Soobin Hoàng Sơn?',
      desc: 'Louis Vuitton đã có những hành động để đối phó với các vụ việc này.',
      slug: 'louis-vuitton-lam-gi-voi-hieuthuhoai-soobin-hoang-son',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/wqdyqdxwp/2025_07_01/dreamstime_m_24323330_45.jpg',
      title: 'Nha sĩ ở Anh bất ngờ giải mã bí ẩn 500 năm của Da Vinci',
      desc: 'Nha sĩ ở Anh bất ngờ giải mã bí ẩn 500 năm của Da Vinci.',
      slug: 'nha-si-o-anh-bat-ngo-giai-ma-bi-an-500-nam-cua-da-vinci',
    },
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_07/pexels_rdne_8279515.jpg',
      title: 'Sân bay Côn Đảo thực hành chằng néo máy bay ứng phó mưa bão',
      desc: 'Sân bay Côn Đảo tổ chức diễn tập chằng néo máy bay để ứng phó với mưa bão lớn.',
      slug: 'san-bay-con-dao-thuc-hanh-chang-neo-may-bay',
    },
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_07/pexels_rdne_8279515.jpg',
      title: 'Lợi thế đặc biệt của sầu riêng Việt Nam',
      desc: 'Sầu riêng Việt Nam có nhiều lợi thế cạnh tranh trên thị trường quốc tế.',
      slug: 'loi-the-dac-biet-cua-sau-rieng-viet-nam',
    },
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_07/pexels_rdne_8279515.jpg',
      title: 'Dòng chảy hàng hóa Trung Quốc đổi hướng',
      desc: 'Hàng hóa Trung Quốc đang có xu hướng chuyển hướng sang các thị trường mới.',
      slug: 'dong-chay-hang-hoa-trung-quoc-doi-huong',
    },
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_07/pexels_rdne_8279515.jpg',
      title: 'Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam',
      desc: 'Tập đoàn thịt lớn nhất thế giới đang lên kế hoạch xây dựng trung tâm sản xuất tại Việt Nam.',
      slug: 'tap-doan-thit-lon-nhat-the-gioi-muon-dat-trung-tam-san-xuat-o-viet-nam',
    },
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_07/pexels_rdne_8279515.jpg',
      title: 'Tập đoàn thịt lớn nhất thế giới muốn đặt trung tâm sản xuất ở Việt Nam',
      desc: 'Tập đoàn thịt lớn nhất thế giới đang lên kế hoạch xây dựng trung tâm sản xuất tại Việt Nam.',
      slug: 'tap-doan-thit1-lon-nhat-the-gioi-muon-dat-trung-tam-san-xuat-o-viet-nam',
    },
  
  ];
  return NextResponse.json(business);
}
