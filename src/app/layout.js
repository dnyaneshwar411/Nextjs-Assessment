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
        <div className="fixed z-50 top-1/2 left-1/2 origin-center shadow-xl translate-x-[-50%] translate-y-[-50%] w-10 aspect-square bg-blue-500"></div>
        <MainContainer />
        <Menu />
      </body>
    </html>
  );
}
