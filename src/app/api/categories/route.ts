import { NextResponse } from 'next/server';

export async function GET() {
  const categories = [
    {
      name: 'Công nghệ',
      news: [
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Bước ngoặt mới cho tài sản mã hóa tại Việt Nam',
          slug: 'buoc-ngoat-moi-cho-tai-san-ma-hoa',
          isVideo: true,
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/gtnvzv/2025_07_07/cam_khe.jpg',
          title: 'Doanh thu tăng mạnh, đối tác Apple vẫn "bất an"',
          slug: 'doanh-thu-tang-manh-doi-tac-apple-bat-an',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/lce_jwqqc/2025_07_04/jiahuuiiiva2_nguoi_khac_640w.jpg',
          title: 'Công ty Việt Nam phát triển giải pháp bảo mật với AI',
          slug: 'cong-ty-viet-nam-giai-phap-bao-mat-ai',
        },
      ],
    },
    {
      name: 'Sức khỏe',
      news: [
        {
          image: 'https://photo.znews.vn/w210/Uploaded/rohunaa/2025_07_07/anh_4_17184594422221556912718_1.jpg',
          title: 'Bé gái 8 tuổi nhập viện lúc nửa đêm vì ban nhiễm khuẩn',
          slug: 'be-gai-8-tuoi-nhap-vien-vi-ban-nhiem-khuan',
        },
        {
          image: 'https://photo.znews.vn/w210/Uploaded/spuoouo/2025_07_07/HangChiHuy35.jpg',
          title: 'Dinh dưỡng tăng đề kháng cho trẻ 6 tháng đến 3 tuổi',
          slug: 'dinh-duong-tang-de-khang-cho-tre',
          isVideo: true,
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Tự trị bệnh tại nhà, người đàn ông nhập viện vì nhiễm trùng nặng',
          slug: 'tu-tri-benh-tai-nha-nhiem-trung-nang',
        },
      ],
    },
    {
      name: 'Đời sống',
      news: [
        {
          image: 'https://photo.znews.vn/w210/Uploaded/vpibtwvo/2025_07_05/Thiet_ke_chua_co_ten_4_.jpg',
          title: 'Mất bạn vì pickleball',
          slug: 'mat-ban-vi-pickleball',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Chủ quán Thái Lan mặc gợi cảm để hút khách',
          slug: 'chu-quan-thai-lan-mac-goi-cam',
        },
        {
          image: 'https://photo.znews.vn/w210/Uploaded/spuoouo/2025_07_07/HangChiHuy35.jpg',
          title: 'Jenny Huỳnh gây tranh cãi',
          slug: 'jenny-huynh-gay-tranh-cai',
        },
      ],
    },
    {
      name: 'Du lịch',
      news: [
        {
          image: 'https://photo.znews.vn/w210/Uploaded/spuoouo/2025_07_07/HangChiHuy35.jpg',
          title: 'Rùa bạch tạng quý hiếm chào đời ở Côn Đảo',
          slug: 'rua-bach-tang-quy-hiem-con-dao',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Thử sống trong hang, nghe bom đội giữa rừng già Quảng Trị',
          slug: 'thu-song-trong-hang-quang-tri',
        },
        {
          image: 'https://photo.znews.vn/w210/Uploaded/vpibtwvo/2025_07_05/Thiet_ke_chua_co_ten_4_.jpg',
          title: 'Khách Nga đến Việt Nam 6 tháng đầu năm bằng cả năm 2024',
          slug: 'khach-nga-den-viet-nam-2024',
          isVideo: true,
        },
      ],
    },
    {
      name: 'Giải trí',
      news: [
            {
            image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
            title: 'Thành bại của Ngô Thanh Vân',
            slug: 'thanh-bai-cua-ngo-thanh-van',
            },
            {
            image: 'https://photo.znews.vn/w360/Uploaded/jopluat/2025_07_07/screen_shot_2025_07_05_at_115048_2638_7395.png.jpg',
            title: 'Sao Việt khoe nhà sang, xe xịn',
            slug: 'sao-viet-khoe-nha-sang-xe-xin',
            },
            {
            image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
            title: 'Show truyền hình thực tế hút khách',
            slug: 'show-truyen-hinh-thuc-te',
            },
      ],
    },
    {
      name: 'Thể thao',
      news: [
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Brescia - di sản sụp đổ, hy vọng hồi sinh',
          slug: 'brescia-di-san-sup-do',
        },
        {
          image: 'https://photo.znews.vn/w210/Uploaded/vpibtwvo/2025_07_05/Thiet_ke_chua_co_ten_4_.jpg',
          title: 'Trịnh Linh Giang vô địch đơn nam PPA Tour châu Á',
          slug: 'trinh-linh-giang-ppa-tour',
          isVideo: true,
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Rủi ro nghề trọng tài pickleball từ vụ tấn công ở TP Hải Phòng',
          slug: 'rui-ro-nghe-trong-tai-pickleball',
        },
      ],
    },
    {
      name: 'Xã hội',
      news: [
        {
          image: 'https://photo.znews.vn/w210/Uploaded/vpibtwvo/2025_07_05/Thiet_ke_chua_co_ten_4_.jpg',
          title: 'Công an TP.HCM thông tin về vụ cháy cư xá Độc Lập làm 8 người tử vong',
          slug: 'cong-an-tphcm-thong-tin-chay-cu-xa-doc-lap',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Vụ án nổi bật trong tuần',
          slug: 'vu-an-noi-bat-trong-tuan',
          isVideo: true,
        },
        {
          image: 'https://photo.znews.vn/w210/Uploaded/rohunaa/2025_07_07/anh_4_17184594422221556912718_1.jpg',
          title: 'Chính sách mới về bảo hiểm xã hội',
          slug: 'chinh-sach-moi-bao-hiem-xa-hoi',
        },
      ],
    },
    {
      name: 'Pháp luật',
      news: [
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Từ đường dây đánh bạc ở Pullman, xác minh vụ chiếm đoạt 5,5 triệu USD',
          slug: 'duong-day-danh-bac-pullman',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/yqdlcqrwq/2025_07_04/03704072025.jpg',
          title: 'Vụ án kinh tế lớn tại Hà Nội',
          slug: 'vu-an-kinh-te-ha-noi',
        },
        {
          image: 'https://photo.znews.vn/w210/Uploaded/rohunaa/2025_07_07/anh_4_17184594422221556912718_1.jpg',
          title: 'Phán quyết mới về tranh chấp đất đai',
          slug: 'phan-quyet-moi-tranh-chap-dat-dai',
          isVideo: true,
        },
      ],
    },
  ];
  return NextResponse.json(categories);
} 