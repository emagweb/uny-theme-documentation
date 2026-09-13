import { Header } from '../components/Header'
import { Hero } from '../pages/parts/Hero'
import { Highlights } from '../pages/parts/Highlights'
import { Reviews } from '../pages/parts/Reviews'
import { About } from '../pages/parts/About'
import { Steps } from '../pages/parts/Steps'
import { Ways } from '../pages/parts/Ways'
import { Posts } from '../pages/parts/Posts'
import { Team } from '../pages/parts/Team'
import { Cta } from '../pages/parts/Cta'
import { Cards } from '../components/page/Cards'
import { Footer } from '../components/Footer'
import features from '../data/features'
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Reviews />
        <About />
        <Steps />
        <Ways />
        <Posts />
        <Cards
          number={4}
          bg="bg-medium"
          data={features}
          label="Why Uny"
          title="What the theme and the builder give you"
          text="Twelve things that decide how fast you get from an empty page to a finished site."
        />
        <Team />
        <Cta />
      </main>
      <Footer />
    </>
  );
};
export { Home }
