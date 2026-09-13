import { PiStackLight, PiSquaresFourLight, PiSlidersLight, PiStorefrontLight, PiPlugsConnectedLight, PiShieldCheckLight } from "react-icons/pi"
const accent = '#E91E8C'
import demoScreen from '../../assets/img/uny/demo-screen-desktop.png'
const About = () => {
  return (
    <section id='about' className="bg-medium p-y-120 m-y-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="upp c-theme fw-500 fz-14 p-b-16">The package</p>
            <h2 className='title-intro fw-700 p-b-24'>A theme and a builder<br />designed together</h2>
            <p className="fz-20 m-b-40 c-grey">Uny is a WordPress theme plus a section builder that share one palette, one type scale and one grid. You assemble a page from finished blocks and it looks designed, because the blocks were designed as a set. Assemble it by hand, or let the AI assistant draft it and edit what it gives you.</p>
          </div>
          <div className="col-lg-6 m-hide">
            <img src={demoScreen} alt="A demo page built with the Uny theme, shown on a laptop" style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        </div>
        <div className="row m-t-60">
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiStackLight size={56} color={accent} />
              <div className="p-l-16">
                <h3 className="title fw-700 p-y-0">214</h3>
                <p className="c-grey">Ready-made sections</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiSquaresFourLight size={56} color={accent} />
              <div className="p-l-16">
                <h3 className="title fw-700 p-y-0">15 Groups</h3>
                <p className="c-grey">Headers to footers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiSlidersLight size={56} color={accent} />
              <div className="p-l-16">
                <h3 className="title fw-700 p-y-0">Light &amp; Dark</h3>
                <p className="c-grey">One switch in the Customizer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiStorefrontLight size={56} color={accent} />
              <div className="p-l-16">
                <h3 className="title fw-700 p-y-0">WooCommerce</h3>
                <p className="c-grey">Shop, cart and checkout styled</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiPlugsConnectedLight size={56} color={accent} />
              <div className="p-l-16">
                <h3 className="title fw-700 p-y-0">Auto Content</h3>
                <p className="c-grey">Menus, posts and products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="flex aic">
              <PiShieldCheckLight size={56} color={accent} />
              <div className="p-l-16">
                <h3 className="title fw-700 p-y-0">WP 6.9+</h3>
                <p className="c-grey">PHP 8.1+, tested up to WP 7.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export { About }
