import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import TobBar from "@/pages/home/TobBar";
import Header from "@/pages/home/Header";
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/pages/home/Footer";


const cairo = Cairo({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "اكادمية التحدي",
  description: `مؤسسة خدماتية
  الذكاء الإصطناعي - تعليم اللغات - دروس الدعم - السوروبان - القرءان الكريم - علم الفلك`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >      

        <TobBar />
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
