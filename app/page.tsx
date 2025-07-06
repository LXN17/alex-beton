import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import Rent from "@/components/Rent";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutUs />
      <Products />
      <Rent />
      <Footer />
    </main>
  );
}
