import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "Người đàn ông khiến nước Đức viết 7.000 bài nghiên cứu chuyên sâu",
      image: "https://photo.znews.vn/w210/Uploaded/dqmblcvo/2025_07_04/Ai_nghien_cuu_hoc_thuat.jpg",
      slug: "nguoi-dan-ong-duc",
      desc: 'Diễn viên Lý Long Cơ cầm hoa, rơi nước mắt khi đến đón hôn thê Vương Thanh Hà ra tù.',
    },
    {
      title: "Khám phá 10 nghề cỏ vang danh Việt Nam tại góc đọc cuối tuần",
      image: "https://photo.znews.vn/w210/Uploaded/ofh_cgkztmzt/2024_09_03/Bat_nat_hoc_duong.jpeg",
      slug: "nghe-co-vang-danh",
    },
    {
      title: "Làm thế nào để tìm được ước mơ của bản thân?",
      image: "https://photo.znews.vn/w210/Uploaded/bpcgpivp/2025_07_06/Thiet_ke_chua_co_ten_50_.png",
      slug: "tim-uoc-mo-ban-than",
      desc: 'Diễn viên Lý Long Cơ cầm hoa, rơi nước mắt khi đến đón hôn thê Vương Thanh Hà ra tù.',
    },
    {
      title: "Điều cần làm trước khi quý nhân xuất hiện",
      image: "https://photo.znews.vn/w210/Uploaded/ofh_cgkztmzt/2024_09_03/Bat_nat_hoc_duong.jpeg",
      slug: "dieu-can-lam-truoc-quy-nhan",
    },
    {
      title: "Khi nào bạn nên làm ngược so với số đông?",
      image: "https://photo.znews.vn/w210/Uploaded/zgsgtn/2025_07_04/nguyen_phan_que_mai_the_mountains_sing_dust_child_xuat_khau_van_hoc_viet_ra_the_gioi.png",
      slug: "lam-nguoc-so-dong",
    },
    {
      title: "lorem ipsum dolor sit amet",
      image: "https://photo.znews.vn/w210/Uploaded/ofh_cgkztmzt/2024_09_03/Bat_nat_hoc_duong.jpeg",
      slug: "lorem-ipsum-dolor-sit-amet",
    },
    {
        title: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        image: "https://photo.znews.vn/w210/Uploaded/cqjrzdhwq/2025_07_05/Znews_Duong_vao_Thien_3_.jpg",
        slug: "lorem-ipsum-dolor-sit-amet-consectetur-adipisicing-elit-quisquam-quos",
    },
    {
        title: "lorem ipsum dolor sit amet consectetur 456 elit. Quisquam, quos.",
        image: "https://photo.znews.vn/w210/Uploaded/ofh_cgkztmzt/2024_09_03/Bat_nat_hoc_duong.jpeg",
        slug: "lorem-ipsum-dolor-sit-amet-consectetur-456-elit-quisquam-quos",
    },
    {
        title: "lorem ipsum dolor sit amet consectetur 123 elit. Quisquam, quos.",
        image: "https://photo.znews.vn/w210/Uploaded/qoswae/2025_07_06/02eab535fa024100a194c28994f8d5ee.jpg",
        slug: "lorem-ipsum-dolor-sit-amet-consectetur-123-elit-quisquam-quos",
    }
  ]);
}
