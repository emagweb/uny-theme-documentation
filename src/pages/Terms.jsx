import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Cta } from './parts/Cta'
import { Footer } from '../components/Footer'
import pic from '../assets/svg/pages/services.svg'

const Terms = () => {
  return (
     <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Terms of Use"
          text="Last updated: February 14, 2026"
          pic={pic}
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">
            <section>
              <h3>1. Introduction</h3>
              <p>
                These Terms of Use govern your access to and use of the website https://rogovsky.net (the "Site") and related services provided by Rogovsky Studio (hereinafter "we", "us", or "our").
              </p>
              <p>
                By accessing or using the Site, you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.
              </p>
            </section>
            <section>
              <h3>2. Use of the Site</h3>
              <p>You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the Site.</p>
              <ul>
                <li>You must be at least 18 years old to use certain features, such as registration.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>Prohibited activities include posting false information, harassing others, or uploading harmful content.</li>
              </ul>
            </section>
            <section>
              <h3>3. User Content</h3>
              <p>
                You retain ownership of content you submit (e.g., resumes, comments), but grant us a worldwide, royalty-free license to use, display, and distribute it in connection with the Site.
              </p>
              <p>
                We may remove any content that violates these Terms.
              </p>
            </section>
            <section>
              <h3>4. Intellectual Property</h3>
              <p>
                The Site and its content (text, graphics, logos) are owned by us or our licensors and protected by copyright and other laws.
              </p>
              <p>
                You may not copy, modify, or distribute our content without permission.
              </p>
            </section>
            <section>
              <h3>5. Disclaimer of Warranties</h3>
              <p>
                The Site is provided "as is" without warranties of any kind, express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or free of viruses.
              </p>
            </section>
            <section>
              <h3>6. Limitation of Liability</h3>
              <p>
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Site.
              </p>
            </section>
            <section>
              <h3>7. Changes to Terms</h3>
              <p>
                We may update these Terms at any time. The updated version will be posted here, and continued use constitutes acceptance.
              </p>
            </section>
            <section>
              <h3>8. Governing Law</h3>
              <p>
                These Terms are governed by the laws of [applicable jurisdiction, e.g., the United States or your country].
              </p>
            </section>
            <section>
              <h3>9. Contact</h3>
              <p>
                If you have questions about these Terms, please contact us at: support@rogovsky.net.com
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

export { Terms }
