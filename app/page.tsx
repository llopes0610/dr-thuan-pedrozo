import HeroInstitutional from "@/components/hero/HeroInstitutional";
import DifferentialsSection from "@/components/sections/Differentials";
import PracticeAreas from "@/components/sections/PracticeAreas";
import AboutHome from "@/components/sections/AboutHome";



export default function Home() {
  return (
    <>
      <HeroInstitutional />
      <AboutHome />
      <DifferentialsSection />
      <PracticeAreas />
    </>
  );
}
