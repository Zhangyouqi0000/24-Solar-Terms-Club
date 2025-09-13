import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TeacherSection } from "@/components/teacher-section"
import { SolarTermsGrid } from "@/components/solar-terms-grid"
import { HomeworkGallery } from "@/components/homework-gallery"
import { ActivitiesSection } from "@/components/activities-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TeacherSection />
      <SolarTermsGrid />
      <HomeworkGallery />
      <ActivitiesSection />
      <Footer />
    </main>
  )
}
