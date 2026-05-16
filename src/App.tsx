import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import ThreeJobs from './components/ThreeJobs';
import Architecture from './components/Architecture';
import DemoVideo from './components/DemoVideo';
import DemoStrip from './components/DemoStrip';
import RealVsSim from './components/RealVsSim';
import Roadmap from './components/Roadmap';
import Pillars from './components/Pillars';
import Founder from './components/Founder';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <ThreeJobs />
        <Architecture />
        <DemoVideo />
        <DemoStrip />
        <RealVsSim />
        <Roadmap />
        <Pillars />
        <Founder />
      </main>
      <Footer />
    </>
  );
}
