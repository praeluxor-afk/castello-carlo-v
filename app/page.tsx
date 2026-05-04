import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Storia from '@/components/Storia';
import Timeline from '@/components/Timeline';
import Castello from '@/components/Castello';
import Gallery from '@/components/Gallery';
import Video from '@/components/Video';
import Eventi from '@/components/Eventi';
import Tour from '@/components/Tour';
import Orari from '@/components/Orari';
import Partner from '@/components/Partner';
import Contatti from '@/components/Contatti';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Intro />
        <Storia />
        <Timeline />
        <Castello />
        <Gallery />
        <Video />
        <Eventi />
        <Tour />
        <Orari />
        <Partner />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
