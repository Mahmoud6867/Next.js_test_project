import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next.js test project",
  description: "This is a test project for my Next.js tutorial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-around m-5">
          <Link
            href="/"
            className="mx-2 bg-purple-700 flex   rounded-full w-full flex justify-center"
          >
            {" "}
            Home{" "}
          </Link>
          <Link
            href="/pages/photos"
            className="mx-2 bg-orange-500   rounded-full w-full flex justify-center"
          >
            {" "}
            Photos
          </Link>
          <Link
            href="/pages/posts"
            className="mx-2 bg-red-600  rounded-full w-full flex justify-center"
          >
            {" "}
            Posts
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
