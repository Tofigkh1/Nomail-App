'use client';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./Styles/globals.css";
import Header from "@/components/shared/client/Header/header";
import { SidebarContext } from "@/components/shared/client/SideBarMenu/sideBarMenu";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expanded, setExpanded] = useState(false); // Sidebar state
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
             <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <Header />
        {children}
        </SidebarContext.Provider>

      </body>
    </html>
  );
}
