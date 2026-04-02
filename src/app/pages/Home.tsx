import { HeroSection } from '../components/HeroSection';
import { TCGCarousel } from '../components/TCGCarousel';
import { DatabaseSection } from '../components/DatabaseSection';
import { AppCTASection } from '../components/AppCTASection';
import { ScreenshotCarousel } from '../components/ScreenshotCarousel';

export function Home() {
  return (
    <>
      <HeroSection />
      <TCGCarousel />
      <DatabaseSection />
      <ScreenshotCarousel />
      <AppCTASection />
    </>
  );
}
