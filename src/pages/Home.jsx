import { Header } from '../components/Header'
import { Hero } from '../pages/parts/Hero'
import { Reviews } from '../pages/parts/Reviews'
import { About } from '../pages/parts/About'
import { Steps } from '../pages/parts/Steps'
import { Team } from '../pages/parts/Team'
import { Cta } from '../pages/parts/Cta'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reviews />
        <About />
        <Steps />
        <Team />
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export { Home }
