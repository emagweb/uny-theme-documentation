import { HeaderPage } from '../components/HeaderPage'
import { Hero } from '../components/page/Hero'
import { CtaPage } from '../components/page/CtaPage'
import { Cards } from '../components/page/Cards'
import { Cta } from './parts/Cta'
import { Footer } from '../components/Footer'
import { PiAtomLight, PiChartPolarLight, PiArrowsOutLight } from "react-icons/pi"
import services from '../data/services'
import pic from '../assets/svg/pages/services.svg'

const Services = () => {
  return (
    <>
      <HeaderPage />
      <main>
        <Hero
          title="Navigate Regulatory Compliance with Confidence"
          text="Strengthen your fintech operations and meet regulatory requirements with Rogovsky Studio's expert compliance and cybersecurity solutions. Our comprehensive services help you achieve and maintain compliance while accelerating your business growth."
          buttonText="Get your free audit"
          buttonLink="https://calendly.com/i-andrey/studio"
          pic={pic}
        />
        <section className='sv p-b-120 bg-white'>
          <div className="container">
            <div className="p-x-24 m-b-50">
              <h3 className="title-grd">Compliance & Security Services<br />are best suited for</h3>
            </div>
            <div className="h-p-1 m-y-40 bg-light" />
            <div className="row">
              <div className="col-lg-4 p-x-40">
                <div className="flex aic">
                  <PiAtomLight size={48} className='bg-grd p-x-8 p-y-8 c-white r-8 w-p-48' />
                  <h3 className="title-part m-y-24 m-l-16">Fintech companies facing regulatory pressure</h3>
                </div>
                <p className='title-mini'>Are you struggling to keep up with evolving compliance requirements? Our team of compliance experts can help you navigate complex regulatory frameworks at any stage of your business. We provide specialized expertise in financial regulations, data protection, and cybersecurity standards to ensure your operations meet all requirements.</p>
              </div>
              <div className="col-lg-4 p-x-40">
                <div className="flex aic">
                  <PiChartPolarLight size={48} className='bg-grd p-x-8 p-y-8 c-white r-8 w-p-48' />
                  <h3 className="title-part m-y-24 m-l-16">Businesses preparing for audits</h3>
                </div>
                <p className='title-mini'>Facing upcoming compliance audits or certifications? Our rapid response team can conduct comprehensive assessments and implement necessary controls within weeks. Our thorough audit preparation and remediation processes ensure you're ready for any regulatory review with confidence.</p>
              </div>
              <div className="col-lg-4 p-x-40">
                <div className="flex aic">
                  <PiArrowsOutLight size={48} className='bg-grd p-x-8 p-y-8 c-white r-8 w-p-48' />
                  <h3 className="title-part m-y-24 m-l-16">Startups building compliant infrastructure</h3>
                </div>
                <p className='title-mini'>Are you a fintech startup needing to build compliance from the ground up? Our cost-effective services help you establish robust security and compliance frameworks from day one. With our support, you can achieve regulatory readiness faster and avoid costly violations. Don't let compliance complexity slow your growth - contact us today to learn more.</p>
              </div>
            </div>
          </div>
        </section>
        <CtaPage
          titleOne="Regulatory compliance"
          titleTwo="made simple"
          buttonText="Get a free consultation"
          buttonLink="https://calendly.com/i-andrey/studio">
          <p className='p-b-16'>Build a compliant and secure fintech operation with us:</p>
          <p className='c-blue'>- compliance framework ready in 3-4 weeks</p>
          <p className='c-blue'>- audit preparation time reduced by 50%</p>
          <p className='c-blue'>- seamless regulatory integration</p>
          <p className='c-blue'>- audit cost deducted from implementation</p>
          <p className='p-t-16'>Rather than navigating complex regulations alone, you'll have the compliance experts you need when you need them, with transparent pricing and ongoing support for lasting regulatory confidence.</p>
        </CtaPage>
        <Cards
          number={4}
          data={services}
          title="Benefits of our compliance partnership model"
        />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export { Services }
