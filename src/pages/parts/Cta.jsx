import { useState } from 'react'
import faq from "../../data/faq"

const Cta = () => {
  // One answer open at a time. Twelve questions printed open read as a wall of text,
  // and the section is the last thing on the page, where a visitor is scanning rather
  // than reading. Clicking the open question closes it again, so nothing is forced open.
  const [open, setOpen] = useState(null)
  const toggle = (id) => setOpen(prev => (prev === id ? null : id))
  return (
    <section id='faq' className="bg-medium p-y-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <p className="upp c-theme fw-500 fz-14 p-b-16">FAQ</p>
            <h2 className='title-intro fw-700 p-b-24'>Questions that come up most often</h2>
            <p className="fz-20 w-90 m-b-40 c-grey">If something here does not answer your case, write to us through your purchase account. Include the page URL and a screenshot - it usually turns a long exchange into a single reply.</p>
            <a href="/reference" className="button">Full reference</a>
          </div>
          <div className="col-lg-7 p-l-40">
            <div className="accordion">
              {faq.map((el) => (
                <div key={el.id} className={open === el.id ? 'accordion__item is-open' : 'accordion__item'}>
                  {/* The heading keeps its tag so the outline of the page is unchanged;
                      the button inside it carries the click and the aria state. */}
                  <h4 className="title-part fw-700">
                    <button
                      type="button"
                      className="accordion__head"
                      id={`faq-q-${el.id}`}
                      aria-expanded={open === el.id}
                      aria-controls={`faq-a-${el.id}`}
                      onClick={() => toggle(el.id)}
                    >
                      <span>{el.question}</span>
                      <span className="accordion__sign" aria-hidden="true"></span>
                    </button>
                  </h4>
                  <div
                    className="accordion__body"
                    id={`faq-a-${el.id}`}
                    role="region"
                    aria-labelledby={`faq-q-${el.id}`}
                    hidden={open !== el.id}
                  >
                    <p className="c-grey">{el.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export { Cta }
