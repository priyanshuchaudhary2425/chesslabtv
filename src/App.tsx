import Header from "./components/Header";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Programs from "./components/Programs";
import Trial from "./components/Trial";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCta from "./components/StickyCta";
import Marquee from "./components/Marquee";

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <Method />
        <Marquee />
        <Programs />
        <Trial />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
