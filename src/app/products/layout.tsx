import ProductFooter from "@/components/shared/Products/ui/footer";
import ProductsNavbar from "@/components/shared/Products/ui/navbar";

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col bg-lightMode-surface dark:bg-darkMode-surface min-h-screen">
      <header className="fixed w-full z-50">
        <ProductsNavbar />
      </header>
      <main className="mt-36">{children}</main>
      <ProductFooter />
    </div>
  );
}
