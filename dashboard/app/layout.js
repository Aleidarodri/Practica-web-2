import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Body Compositon",
  description: "Dashboard Web 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
