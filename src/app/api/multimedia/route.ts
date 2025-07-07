import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      title: "Tâm Tít táo bạo với váy ren xuyên thấu",
      image: "https://photo.znews.vn/w1000/Uploaded/rotnba/2025_07_06/IMG_5886.jpeg",
      slug: "tam-tit-tao-bao-voi-vay-ren-xuyen-thau",
    },
    {
      title: "Lisa gây sốt với tạo hình ‘búp bê sống’",
      image: "https://photo.znews.vn/w360/Uploaded/vrwqcqdjw/2025_07_06/z6778487012631_50ee91dafbd6521aeeb92caff2c9c21d.jpg",
      slug: "lisa-gay-so-voi-tao-hinh-bu-be-song",
    },
    {
      title: "Nhà vô địch pickleball Trịnh Linh Giang là ai?",
      image: "https://photo.znews.vn/w360/Uploaded/wqdyqdxwp/2025_07_04/IMG_5831.jpeg",
      slug: "nha-vo-dich-pickleball-trinh-linh-giang-la-ai",
    },
    {
      title: "Cận cảnh cháy cư xá Độc Lập ở TP.HCM",
      image: "https://photo.znews.vn/w360/Uploaded/sgtnrn/2025_07_07/1111.JPG",
      slug: "can-canh-chay-cu-xa-doc-lap-o-tp-hcm",
    },
    {
      title: "Hiện trạng gần 15.000 nhà ven kênh ở TP.HCM chuẩn bị được di dời",
      image: "https://photo.znews.vn/w360/Uploaded/kbfoplb/2025_07_04/an_phu_thong_xe_znews_151.jpg",
      slug: "hien-trang-gan-15000-nha-ven-kenh-o-tp-hcm-chuan-bi-duoc-di-doi",
    },
    
  ]);
}
