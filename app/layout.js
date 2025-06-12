import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google"; // <-- Add this
import { Toaster } from "react-hot-toast";
import "./globals.css";
import PageTransitionLoading from "./components/PageTransitionLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: customize as needed
});

// For metadata
export const metadata = {
  title: {
    default: "Lagree Pulse",
    template: "%s | Lagree Pulse",
  },
  description:
    "Official website for Lagree Pulse — innovative fitness equipment and training solutions.",
  keywords: [
    "Lagree Pulse",
    "Fitness Equipment",
    "Lagree Method",
    "Strength Training",
    "Home Gym",
  ],
  authors: [{ name: "Lagree Pulse Team", url: "https://lagreepulse.com" }],
  openGraph: {
    title: "Lagree Pulse",
    description:
      "Experience next-level fitness with Lagree Pulse's cutting-edge equipment.",
    url: "https://lagreepulse.com",
    siteName: "Lagree Pulse",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <PageTransitionLoading />
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
