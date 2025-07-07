import { NextResponse } from 'next/server';

export async function GET() {
  const lifestyle = [
    {
      image: 'https://photo.znews.vn/w1000/Uploaded/wqdyqdxwp/2025_07_04/IMG_5831.jpeg',
      title: 'Nhà vô địch pickleball Trịnh Linh Giang là ai?',
      desc: 'Nhà vô địch pickleball Trịnh Linh Giang là ai?',
      slug: 'nha-vo-dich-pickleball-trinh-linh-giang-la-ai',
    },
    {
      image: 'https://photo.znews.vn/w210/Uploaded/rotnba/2025_06_19/pickleball_znews_6.jpg',
      title: 'Pickleball: Bóng bàn nhẹ nhàng, nhưng không dễ',
      desc: 'Pickleball: Bóng bàn nhẹ nhàng, nhưng không dễ.',
      slug: 'pickleball-bong-ban-nhe-nhung-khong-de',
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
  return NextResponse.json(lifestyle);
}
