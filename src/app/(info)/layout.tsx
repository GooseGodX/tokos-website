import Footer from "@/components/shared/Landing/Footer";
import Navbar from "@/components/shared/Navbar";

export default function InfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex-1 mt-16">{children}</div>
      <Footer />
    </div>
  );
}
