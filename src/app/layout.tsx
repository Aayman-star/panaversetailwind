import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export const metadata = {
  title: "Panaverse Dao",
  description: "Certified Web Developer 3.0 program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
