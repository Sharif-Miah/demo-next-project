import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const menuItem = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/service">Service</Link>
      </li>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </>
  );

  return (
    <html lang="en" className="max-w-7xl mx-auto bg-[#112]">
      <body className={inter.className}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-white rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-xl text-white">
              Sharif Miah
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{menuItem}</ul>
          </div>
          <div className="navbar-end">
            <Link href="/contact">
              <button className=" px-8 py-2 font-bold border rounded-3xl text-white bg-[#F3B90B] hover:bg-[#112] hover:border-[#F3B90B]hover:tranparent shadow-lg shadow-[#F3B90B]">
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
