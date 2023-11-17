import { Inter } from "next/font/google";
import Reload from "./(reload)/Reload";

import "./globals.css";

import Navbar from "./(Navbar)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Reload />
        <Navbar links={[]} />
        {children}
      </body>
    </html>
  );
}
