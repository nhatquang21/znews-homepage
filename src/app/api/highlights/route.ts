import { NextResponse } from 'next/server';

export async function GET() {
    const highlights = [
        {
          image: 'https://photo.znews.vn/w360/Uploaded/qfssu/2025_07_07/news_p.v1.20250707.jpg',
          title: 'Kwon Eun Bi bị nói ngày càng hở hang',
          desc: 'Kwon Eun Bi đang vướng tranh cãi vì phần trình diễn quá táo bạo ở Waterbomb. Không ít khán giả cho rằng nữ ca sĩ ngày càng hở hang.',
          slug: 'kwon-eun-bi-bi-no-ngay-cang-ho-hang',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/vrwqcqdjw/2025_07_07/cropped_DeWatermark.ai_1751887332700.jpeg',
          title: 'Lý Long Cơ khóc khi đón người yêu ra tù',
          desc: 'Diễn viên Lý Long Cơ cầm hoa, rơi nước mắt khi đến đón hôn thê Vương Thanh Hà ra tù.',
          slug: 'ly-long-co-khoc-khi-don-nguoi-yeu-ra-tu',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/zagtgt/2025_07_07/JennyHuynh.jpeg',
          title: 'Jenny Huỳnh gây tranh cãi',
          desc: 'Jenny Huỳnh tham khảo ý kiến cộng đồng mạng về việc nên hay không nên tham gia concert Anh trai "say hi" tại Mỹ gây tranh cãi, có người cho rằng cô cố tình khiêu khích.',
          slug: 'jenny-huynh-gay-tranh-cai',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/jopluat/2025_07_07/dung_22_8328_2059_1_.jpg',
          title: "Nhiều doanh nhân, bác sĩ, ca sĩ nằm trong 'ổ bạc' triệu USD ở Pullman",
          desc: "VKSND Tối cao ban hành cáo trạng truy tố 141 bị can trong vụ án 'Tổ chức đánh bạc và đánh bạc' xảy ra tại Câu lạc bộ Doanh nghiệp Việt kiều - chi nhánh Hà Nội (King Club) ở khách sạn Pullman.",
          slug: 'nhieu-doanh-nhan-bac-si-ca-sy-nam-trong-o-bac-trieu-usd-o-pullman',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/qfssu/2025_07_07/news_p.v1.20250707.jpg',
          title: 'Kwon Eun Bi bị nói ngày càng hở hang',
          desc: 'Kwon Eun Bi đang vướng tranh cãi vì phần trình diễn quá táo bạo ở Waterbomb. Không ít khán giả cho rằng nữ ca sĩ ngày càng hở hang.',
          slug: 'kwon-eun-bi-bi-no-ngay-cang-ho-hang-1',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/vrwqcqdjw/2025_07_07/cropped_DeWatermark.ai_1751887332700.jpeg',
          title: 'Lý Long Cơ khóc khi đón người yêu ra tù',
          desc: 'Diễn viên Lý Long Cơ cầm hoa, rơi nước mắt khi đến đón hôn thê Vương Thanh Hà ra tù.',
          slug: 'ly-long-co-khoc-khi-don-nguoi-yeu-ra-tu-1',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/zagtgt/2025_07_07/JennyHuynh.jpeg',
          title: 'Jenny Huỳnh gây tranh cãi',
          desc: 'Jenny Huỳnh tham khảo ý kiến cộng đồng mạng về việc nên hay không nên tham gia concert Anh trai "say hi" tại Mỹ gây tranh cãi, có người cho rằng cô cố tình khiêu khích.',
          slug: 'jenny-huynh-gay-tranh-cai-1',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/jopluat/2025_07_07/dung_22_8328_2059_1_.jpg',
          title: "Nhiều doanh nhân, bác sĩ, ca sĩ nằm trong 'ổ bạc' triệu USD ở Pullman",
          desc: "VKSND Tối cao ban hành cáo trạng truy tố 141 bị can trong vụ án 'Tổ chức đánh bạc và đánh bạc' xảy ra tại Câu lạc bộ Doanh nghiệp Việt kiều - chi nhánh Hà Nội (King Club) ở khách sạn Pullman.",
          slug: 'nhieu-doanh-nhan-bac-si-ca-sy-nam-trong-o-bac-trieu-usd-o-pullman-1',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/qfssu/2025_07_07/news_p.v1.20250707.jpg',
          title: 'Kwon Eun Bi bị nói ngày càng hở hang',
          desc: 'Kwon Eun Bi đang vướng tranh cãi vì phần trình diễn quá táo bạo ở Waterbomb. Không ít khán giả cho rằng nữ ca sĩ ngày càng hở hang.',
          slug: 'kwon-eun-bi-bi-no-ngay-cang-ho-hang-2',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/vrwqcqdjw/2025_07_07/cropped_DeWatermark.ai_1751887332700.jpeg',
          title: 'Lý Long Cơ khóc khi đón người yêu ra tù',
          desc: 'Diễn viên Lý Long Cơ cầm hoa, rơi nước mắt khi đến đón hôn thê Vương Thanh Hà ra tù.',
          slug: 'ly-long-co-khoc-khi-don-nguoi-yeu-ra-tu-2',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/zagtgt/2025_07_07/JennyHuynh.jpeg',
          title: 'Jenny Huỳnh gây tranh cãi',
          desc: 'Jenny Huỳnh tham khảo ý kiến cộng đồng mạng về việc nên hay không nên tham gia concert Anh trai "say hi" tại Mỹ gây tranh cãi, có người cho rằng cô cố tình khiêu khích.',
          slug: 'jenny-huynh-gay-tranh-cai-2',
        },
        {
          image: 'https://photo.znews.vn/w360/Uploaded/jopluat/2025_07_07/dung_22_8328_2059_1_.jpg',
          title: "Nhiều doanh nhân, bác sĩ, ca sĩ nằm trong 'ổ bạc' triệu USD ở Pullman",
          desc: "VKSND Tối cao ban hành cáo trạng truy tố 141 bị can trong vụ án 'Tổ chức đánh bạc và đánh bạc' xảy ra tại Câu lạc bộ Doanh nghiệp Việt kiều - chi nhánh Hà Nội (King Club) ở khách sạn Pullman.",
          slug: 'nhieu-doanh-nhan-bac-si-ca-sy-nam-trong-o-bac-trieu-usd-o-pullman-2',
        },
      ];

  return NextResponse.json(highlights);
} 