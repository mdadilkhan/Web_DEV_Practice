import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Metadata } from "next";

export const metadata:Metadata = {
  title:{
      default:'CodeCafe24',
      template:"%s | CodeCafe24",

  },
  description: "I am a Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}


