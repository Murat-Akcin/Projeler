import React, { useRef } from 'react';
import './App.css';
import PageContainer from './components/PageContainer';
import Navbar from './components/navbar/Navbar';
import AboutP from './Pages/AboutP';
import ContactP from './Pages/ContactP';
import FaqP from './Pages/FaqP';
import GameP from './Pages/GameP';
import HomePageP from './Pages/HomePageP';
import HowToBuyP from './Pages/HowToBuyP';
import RoadMapP from './Pages/RoadMapP';
import TokenomicsP from './Pages/TokenomicsP';
import renk from './App.css';
import { Link } from 'react-scroll';

function App() {
  return (
    <div className="renk">
      <PageContainer>
        <Navbar />
        <section id="id-1">
          <HomePageP />
        </section>
        <section id="id-2">
          <HowToBuyP />
          <Link href="google.com"></Link>
        </section>
        <section>
          <AboutP />
        </section>
        <section id="id-3">
          <RoadMapP />
        </section>
        <section id="id-4">
          <TokenomicsP />
        </section>
        <section id="id-5">
          <GameP />
        </section>
        <section id="id-6">
          <FaqP />
        </section>
        <section id="di-7">
          <ContactP />
        </section>
      </PageContainer>
    </div>
  );
}

export default App;
