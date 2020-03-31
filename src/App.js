import React from 'react'
import Header from './components/Header'
import TopSection from './components/TopSection'
import VideoSection from './components/VideoSection'
import AppsSection from './components/AppsSection'
import SocialSection from './components/SocialSection'
import AnonymousSection from './components/AnonymousSection'
import HowSection from './components/HowSection'
import WorkingWithSection from './components/WorkingWithSection'
import AboutSection from './components/AboutSection'
import ProtectSection from './components/ProtectSection'
import HelpSection from './components/HelpSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <main className="App">
      <Header />
      <TopSection />
      <VideoSection />
      <AppsSection />
      <SocialSection />
      <AnonymousSection />
      <HowSection />
      <WorkingWithSection />
      <AboutSection />
      <ProtectSection />
      <HelpSection />
      <ContactSection />
    </main>
  );
}

export default App;
