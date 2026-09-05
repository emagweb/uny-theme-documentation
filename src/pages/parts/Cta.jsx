import { ContactForm } from "../../components/ContactForm"

const Cta = () => {
  return (
    <section id='cta' className="p-b-80">
      <div className="container bg-cta p-x-100 p-y-100 r-15 c-white">
        <div className="row">
          <div className="col-lg-6">
            <h2 className='title-intro'>Build Compliant,</h2>
            <h3 className='title-grd fz-40 p-b-24'>Not Just Reactive</h3>
            <h4 className="title fw-300 w-86 m-y-60">Compared to traditional compliance consultants, clients of Rogovsky Studio achieve lasting regulatory confidence. Instead of one-time audits or quick fixes, we build enduring partnerships that evolve with changing regulations.<br />Our clients stay compliant year after year, with ongoing support that adapts to any regulatory framework your business requires.</h4>
          </div>
          <div className="col-lg-6 p-x-40">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta }