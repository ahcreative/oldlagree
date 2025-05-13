import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google"; // <-- Add this
import { Toaster } from "react-hot-toast";
import "./globals.css";

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
  title: "Lagree EliteForm",
  description:
    "Official website for Lagree EliteForm — innovative fitness equipment and training solutions.",
  keywords: [
    "Lagree",
    "EliteForm",
    "Fitness Equipment",
    "Lagree Method",
    "Strength Training",
    "Home Gym",
  ],
  authors: [
    { name: "Lagree EliteForm Team", url: "https://lagreeeliteform.com" },
  ],
  openGraph: {
    title: "Lagree EliteForm",
    description:
      "Experience next-level fitness with Lagree EliteForm's cutting-edge equipment.",
    url: "https://lagreeeliteform.com",
    siteName: "Lagree EliteForm",
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
      <body className={`} antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
