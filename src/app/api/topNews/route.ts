import { NextResponse } from "next/server";

export async function GET() {
  // Dữ liệu mẫu
  const data = {
    main: {
      title: "'Điều ước cuối cùng' - phim Việt 'giải ngấy' cơn bão kinh dị",
      desc: '"Điều ước cuối cùng" là một trải nghiệm giải trí nhẹ nhàng với những cảnh hài hước duyên dáng. Song, phim còn hạn chế ở cách tiếp cận những chủ đề sâu sắc hơn đằng sau tiếng cười.',
      image: "https://photo.znews.vn/w1000/Uploaded/rohunaa/2025_07_06/DUCC_03_A1754.jpg",
      slug: "dieu-uoc-cuoi-cung-phim-viet-giai-ngay-con-bao-kinh-di",
      bullet: [
       {
        title: "Thất bại của Trần Hữu Tấn và bài học cho phim kinh dị Việt",
        slug: "that-bai-cua-tran-huu-tan-va-bai-hoc-cho-phim-kinh-di-viet"
       }
      ]
    },
    left: [
      {
        title: "Rủi ro nghề trọng tài pickleball từ vụ tấn công ở TP Hải Phòng",
        image: "https://photo.znews.vn/w210/Uploaded/rotnba/2025_06_19/pickleball_znews_6.jpg",
        slug: "rui-ro-nghe-trong-tai-pickleball"
      },
      {
        title: "Anh Tây 'ăn sập' hẻm nhỏ, dân TP.HCM 30 năm còn phải xin địa chỉ",
        image: "https://photo.znews.vn/Uploaded/zagtgt/2025_07_06/Chris_Wzg_2.gif",
        slug: "anh-tay-an-sap-ham-nho-dan-tp-hcm-30-nam-con-phai-xin-dia-chi"
      },
      {
        title: "Vi 'ngộ' - từ kẻ có bệnh án tâm thần đến ông trùm thế giới ngầm",
        image: "https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_04/Viiiii.JPG",
        slug: "vi-ngo-tu-ke-co-benh-an-tam-than-den-ong-trum-the-gioi-ngam"
      },
      {
        title: "Người dân TP.HCM ở các khu vực này xây nhà không cần xin giấy phép",
        image: "https://photo.znews.vn/w210/Uploaded/spluwao/2025_07_06/vanphuccity_Znews.jpg",
        slug: "nguoi-dan-tp-hcm-o-cac-khu-vuc-nay-xay-nha-khong-can-xin-giay-phep"
      },
      {
        title: "Donnarumma gây chia rẽ",
        image: "https://photo.znews.vn/w210/Uploaded/bpivpawv/2025_07_06/Donnarumma1.JPG",
        slug: "donnarumma-gay-chia-re"
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://photo.znews.vn/w210/Uploaded/rotnba/2025_06_19/pickleball_znews_6.jpg",
        slug: "lorem-ipsum-dolor-sit-amet"
      },
      {
        title: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://photo.znews.vn/Uploaded/zagtgt/2025_07_06/Chris_Wzg_2.gif",
        slug: "sed-do-eiusmod-tempor-incididunt"
      },
      {
        title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        image: "https://photo.znews.vn/w210/Uploaded/sgtnrn/2025_07_04/Viiiii.JPG",
        slug: "ut-enim-ad-minim-veniam"
      },
      {
        title: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
        image: "https://photo.znews.vn/w210/Uploaded/spluwao/2025_07_06/vanphuccity_Znews.jpg",
        slug: "duis-aute-irure-dolor"
      },
      {
        title: "Excepteur sint occaecat cupidatat non proident.",
        image: "https://photo.znews.vn/w210/Uploaded/bpivpawv/2025_07_06/Donnarumma1.JPG",
        slug: "excepteur-sint-occaecat-cupidatat"
      },
    ],
    right: [
      {
        title: "Real Madrid đổi đời cùng Xabi Alonso",
        image: `https://photo.znews.vn/w480/Uploaded/bpivpawv/2025_07_06/2025_07_05T221440Z_346161925_UP1EL751KKMFL_RTRMADP_3_SOCCER_CLUB_RMA_BVB_REPORT.JPG`,
        slug: "real-madrid-doi-doi-cung-xabi-alonso"
      },
      {
        title: "Bộ GD&ĐT công bố đáp án 18 môn thi tốt nghiệp THPT 2025",
        image: `https://photo.znews.vn/w480/Uploaded/hointt/2025_06_30/devan_7_znews.jpg`,
        slug: "bo-gddt-cong-bo-dap-an-18-mon-thi-tot-nghiep-thpt-2025"
      },
    ]
  };
  return NextResponse.json(data);
}
