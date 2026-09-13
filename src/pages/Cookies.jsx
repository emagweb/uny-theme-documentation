import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'

/**
 * Cookie policy for the documentation site.
 *
 * The short version, which is also the true version: this build sets no cookies. There
 * is no analytics, no tag manager and no embedded player, and the only outbound request
 * is the Google Fonts stylesheet, which does not set a cookie either. Keep this page
 * honest if anything is ever added.
 */
const Cookies = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Cookie Policy"
          text="This site sets no cookies. Here is what that means, why there is no consent banner, and how to control cookies in your browser anyway."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. What a cookie is</h3>
              <p>A cookie is a small file a site asks your browser to keep and send back on the next request. Sites use them to remember a session, a preference or, most often, to count and follow visitors.</p>
            </section>

            <section>
              <h3>2. What this site uses</h3>
              <p>Nothing. This documentation is a static build: no accounts, no sessions, no preferences to remember, no analytics, no tag manager, no advertising, no embedded player. It sets no cookies of its own and no third party sets one through it.</p>
              <p>You can check that yourself rather than take our word for it: open your browser's developer tools, go to the storage or application panel, and look at the cookie list for this domain. It is empty.</p>
            </section>

            <section>
              <h3>3. Why there is no cookie banner</h3>
              <p>Consent banners exist to ask permission for cookies that are not strictly necessary - analytics and advertising, in practice. This site sets none, so there is nothing to ask about, and a banner would be theatre. If cookies are ever introduced, the banner arrives with them and this page is rewritten first.</p>
            </section>

            <section>
              <h3>4. The one outbound request</h3>
              <p>The pages load their typeface from Google Fonts. That request does not set a cookie, but it does reach Google's servers, which means Google sees the IP address and the browser's user agent for it. That is described in section 2 of the <a href="/privacy">Privacy Policy</a>, and it is the only third party a normal visit contacts.</p>
            </section>

            <section>
              <h3>5. Local storage</h3>
              <p>Also nothing. The site does not write to localStorage or sessionStorage, and it does not use any other browser storage mechanism.</p>
            </section>

            <section>
              <h3>6. Controlling cookies in general</h3>
              <p>Even though this site gives your browser nothing to store, it is worth knowing where the controls are. Every major browser lets you see the cookies a site has set, delete them, block third-party cookies, or refuse cookies entirely: look for Privacy in the browser settings. Blocking everything will not affect this site, because it does not depend on cookies to work.</p>
            </section>

            <section>
              <h3>7. Links out</h3>
              <p>The demo sites, the marketplace listing and WordPress documentation are separate sites and set their own cookies. Their policies apply as soon as you follow the link.</p>
            </section>

            <section>
              <h3>8. Changes</h3>
              <p>If a cookie ever appears here, this page will name it: what it is called, what it is for, how long it lives and how to refuse it. Until then the list above stays empty.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Cookies }
