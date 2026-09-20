import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExecutiveProfileSection } from './components/ExecutiveProfileSection';
import { CareerJourneySection } from './components/CareerJourneySection';
import { LitigationPracticeSection } from './components/LitigationPracticeSection';
import { AcademicLeadershipSection } from './components/AcademicLeadershipSection';
import { EducationSection } from './components/EducationSection';
import { SelectedRepresentationSection } from './components/SelectedRepresentationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-slate-800 font-sans selection:bg-[#C5A059] selection:text-[#0B132B]">
      <Navbar />
      <main>
        <HeroSection />
        <ExecutiveProfileSection />
        <CareerJourneySection />
        <LitigationPracticeSection />
        <AcademicLeadershipSection />
        <EducationSection />
        <SelectedRepresentationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
