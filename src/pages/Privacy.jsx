import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Cta } from './parts/Cta'
import { Footer } from '../components/Footer'
import pic from '../assets/svg/pages/services.svg'

const Privacy = () => {
  return (
     <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Privacy Policy"
          text="Last updated: February 14, 2026"
          pic={pic}
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">
            <section>
              <h3>1. Introduction</h3>
              <p>
                This Privacy Policy describes how Rogovsky Studio (hereinafter referred to as "we", "us", or "our") collects, uses, stores, and protects your personal information when you use our website https://rogovsky.net and related services.
              </p>
              <p>
                By using our website, you agree to the terms of this Privacy Policy.
              </p>
            </section>
            <section>
              <h3>2. What information we collect</h3>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>Personal data: name, surname, email address, phone number that you provide during registration or when filling out forms.</li>
                <li>Usage data: information about how you interact with the site (IP address, browser type, pages viewed, time of visit).</li>
                <li>Cookies: data stored in cookies to improve the user experience.</li>
                <li>Information from social networks if you log in through them.</li>
              </ul>
            </section>
            <section>
              <h3>3. How we use your information</h3>
              <ul>
                <li>To provide services, register for courses, and send information.</li>
                <li>To improve the site and personalize content.</li>
                <li>To communicate with you (news, updates, marketing materials – with your consent).</li>
                <li>For analytics and statistics.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>
            <section>
              <h3>4. Data protection</h3>
              <p>
                We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or disclosure.
              </p>
            </section>
            <section>
              <h3>5. Sharing information with third parties</h3>
              <p>
                We do not sell your personal information. We may share data with:
              </p>
              <ul>
                <li>Service providers (hosting, analytics, email newsletters).</li>
                <li>In cases required by law.</li>
              </ul>
            </section>
            <section>
              <h3>6. Your rights</h3>
              <p>
                You have the right to access, correct, delete your data, as well as to restrict or object to its processing. To exercise these rights, please contact us using the details below.
              </p>
            </section>
            <section>
              <h3>7. Cookies</h3>
              <p>
                We use cookies for the functionality of the site. You can manage them in your browser settings.
              </p>
            </section>
            <section>
              <h3>8. Changes to the policy</h3>
              <p>
                We may update this policy. The current version is always available on this page.
              </p>
            </section>
            <section>
              <h3>9. Contact</h3>
              <p>
                If you have any questions, please email: support@rogovsky.net
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

export { Privacy }
