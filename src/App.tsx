import { useState } from 'react';
import { Header } from './components/layout/Header';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { VideoLightbox } from './components/ui';
import {
  Hero, Clients, About, Services, Stats, Projects,
  Careers, Awards, Team, Journey, Process, Testimonials, Blog, Contact,
} from './components/sections';
import { site } from './data/site';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} onOpenMenu={() => setMenuOpen(true)} />
      <MobileDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="top">
        <Hero />
        <Clients />
        <About onPlay={() => setVideoOpen(true)} />
        <Services />
        <Stats />
        <Projects />
        <Careers onPlay={() => setVideoOpen(true)} />
        <Awards />
        <Team />
        <Journey />
        <Process />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      <VideoLightbox
        open={videoOpen}
        src={site.showreel}
        poster={site.showreelPoster}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
