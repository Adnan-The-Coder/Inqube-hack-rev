import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/components/Header";

// Importing the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights based on your requirements
  variable: "--font-poppins", // Define a custom CSS variable for the font
});

export const metadata: Metadata = {
  title: "Inqube | Bridging Startups & Investors",
  description: "Inqube is an innovative platform designed to empower startups by connecting them with the right investors. We bridge the gap between visionary entrepreneurs and strategic investors, fostering meaningful collaborations that drive business growth. Whether you’re a startup looking for funding or an investor seeking promising ventures, Inqube streamlines the process with smart matchmaking, data-driven insights, and seamless networking.",
  icons: "https://img.icons8.com/?size=100&id=ezDTR0SCQIf2&format=png&color=000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
