import type { Metadata } from "next";
import "@/styles/global.css";
import Header from "@/components/common/Header";
import ThemeRegistry from "@/components/common/ThemeRegistry";
import Footer from "@/components/common/Footer";
import BottomMenu from "@/components/common/BottomMenu";
import PopupProvider from "@/contexts/PopupContext";

export const metadata: Metadata = {
  title: "Znews - Thông tin uy tín hình ảnh ấn tượng",
  description: "Znews - Thông tin uy tín hình ảnh ấn tượng",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PopupProvider>
          <ThemeRegistry>
            <Header />
            {children}
            <Footer />
            <BottomMenu />
          </ThemeRegistry>
        </PopupProvider>
      </body>
    </html>
  );
}
