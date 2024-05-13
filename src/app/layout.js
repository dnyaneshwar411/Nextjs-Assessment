import MainContainer from "@/components/MainContainer";
import "./globals.css";
import Menu from "@/components/Menu";

export const metadata = {
  title: "App Store",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <MainContainer />
        <Menu />
      </body>
    </html>
  );
}
