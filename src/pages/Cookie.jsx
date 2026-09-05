import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Cta } from './parts/Cta'
import { Footer } from '../components/Footer'
import pic from '../assets/svg/pages/services.svg'

const Cookie = () => {
  return (
     <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Cookie Policy"
          text="Last updated: February 14, 2026"
          pic={pic}
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">
            <section>
              <h3>1. Introduction</h3>
              <p>
                This Cookie Policy explains how Rogovsky Studio ("we", "us", or "our") uses cookies and similar technologies on our website https://rogovsky.net (the "Site").
              </p>
              <p>
                By continuing to use the Site, you consent to the use of cookies as described in this policy.
              </p>
            </section>
            <section>
              <h3>2. What are cookies?</h3>
              <p>
                Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to site owners.
              </p>
            </section>
            <section>
              <h3>3. Types of cookies we use</h3>
              <p>We use the following types of cookies:</p>
              <ul>
                <li><strong>Essential cookies:</strong> Necessary for the Site to function properly (e.g., session management, security).</li>
                <li><strong>Performance/Analytics cookies:</strong> Help us understand how visitors interact with the Site (e.g., Google Analytics).</li>
                <li><strong>Functionality cookies:</strong> Allow the Site to remember your choices (e.g., language preferences).</li>
                <li><strong>Targeting/Advertising cookies:</strong> Used to deliver relevant ads (if applicable, via third-party services).</li>
              </ul>
            </section>
            <section>
              <h3>4. How we use cookies</h3>
              <p>Cookies help us to:</p>
              <ul>
                <li>Provide core functionality and security.</li>
                <li>Analyze site performance and improve user experience.</li>
                <li>Personalize content.</li>
                <li>Support marketing efforts (with your consent where required).</li>
              </ul>
            </section>
            <section>
              <h3>5. Third-party cookies</h3>
              <p>
                Some cookies may be placed by third-party services (e.g., analytics providers like Google). These third parties may use cookies to collect data for their own purposes, in accordance with their privacy policies.
              </p>
            </section>
            <section>
              <h3>6. Managing cookies</h3>
              <p>
                You can manage or disable cookies in your browser settings. Note that blocking essential cookies may affect Site functionality.
              </p>
              <p>
                For more information on managing cookies, visit: https://www.aboutcookies.org or your browser's help section.
              </p>
            </section>
            <section>
              <h3>7. Consent</h3>
              <p>
                Where required by law, we will ask for your consent before placing non-essential cookies. You can withdraw consent at any time via the cookie banner or browser settings.
              </p>
            </section>
            <section>
              <h3>8. Changes to this policy</h3>
              <p>
                We may update this Cookie Policy from time to time. The latest version will always be available on this page.
              </p>
            </section>
            <section>
              <h3>9. Contact</h3>
              <p>
                If you have questions about this Cookie Policy, please contact us at: support@rogovsky.net.com
              </p>
            </section>
          </div>
        </div>
        <Cta />
      </main>
      <Footer />
    </>
  );
};

export { Cookie }
