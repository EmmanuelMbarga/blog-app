import Headerapp from "@/components/Navbar";
import ViewService from "@/components/Accueil/section1";
import { Section2 } from "@/components/Accueil/section2";
import SliderApp from "@/components/slider";
import { Section3 } from "@/components/Accueil/section3";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="-mt-24">
      <Headerapp />
      <SliderApp />
      <ViewService />
      <Section3 />
      <Section2 />
      <Footer/>
    </div>
  );
}
