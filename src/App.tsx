import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header, Footer, FloatingActions } from "@/components/site-chrome";
import { Preloader } from "@/components/preloader";
import Home from "@/routes/index";
import About from "@/routes/about";
import Contact from "@/routes/contact";
import Gallery from "@/routes/gallery";
import ServiceArea from "@/routes/service-area";
import ServicesIndex from "@/routes/services.index";
import ServiceDetail from "@/routes/services.$slug";
import NotFound from "@/routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/services" element={<ServicesIndex />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
