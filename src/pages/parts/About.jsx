import { PiUsersLight, PiGlobeHemisphereEastLight, PiHandshakeLight, PiCurrencyDollarLight, PiSmileyLight, PiMedalLight } from "react-icons/pi"

const blue = '#21A6FF'

const About = () => {
  return (
    <section id='about' className="bg-about p-y-160 m-t-24 m-b-100">
      <div className="container c-white">
        <h2 className='title-intro p-b-24'>Your Trusted Partner<br />in Fintech Compliance & Security</h2>
        <h3 className="title w-60 m-y-60">150+ fintech companies across 18 countries trust Rogovsky Studio with their regulatory compliance journey. From DORA to SOC2, we deliver tailored solutions that keep you compliant and secure.</h3>
        <h4 className="title-grd fz-22 m-t-48 m-b-32">Here's why leading fintechs choose Rogovsky Studio:</h4>
        <div className="row">
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiUsersLight size={56} color={blue} />
              <div className="p-l-16">
                <h3 className="title p-y-0">150+</h3>
                <p>Fintech Clients Served</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiGlobeHemisphereEastLight size={56} color={blue} />
              <div className="p-l-16">
                <h3 className="title p-y-0">18+ Countries</h3>
                <p>Regulatory Coverage</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiHandshakeLight size={56} color={blue} />
              <div className="p-l-16">
                <h3 className="title p-y-0">Full Compliance</h3>
                <p>DORA, GDPR, SOC2 Certified</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiCurrencyDollarLight size={56} color={blue} />
              <div className="p-l-16">
                <h3 className="title p-y-0">Flexible Models</h3>
                <p>Time & Material, Dedicated Team</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiSmileyLight size={56} color={blue} />
              <div className="p-l-16">
                <h3 className="title p-y-0">Ongoing Support</h3>
                <p>Continuous Compliance Journey</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiMedalLight size={56} color={blue} />
              <div className="p-l-16">
                <h3 className="title p-y-0">25+ Years</h3>
                <p>Cybersecurity & Compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { About }
