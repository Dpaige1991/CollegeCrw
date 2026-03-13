import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "College Crw",
  description: "College travel platform for group trips, spring break escapes, and unforgettable student experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fcfcf8] text-[var(--brand-navy)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}