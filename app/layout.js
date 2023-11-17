import { Inter } from "next/font/google";
import Reload from "./(reload)/Reload";

import "./globals.css";

import PreNavbar from "./(Navbar)/PreNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Reload />
        <PreNavbar links={[]} />
        {children}
      </body>
    </html>
  );
}
