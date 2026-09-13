import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'

/**
 * Privacy policy for the documentation site.
 *
 * Written from what this site actually does, not from a template: it is a static React
 * build with no accounts, no forms, no payments, no analytics and no cookies of its
 * own. The only third party a normal visit contacts is Google Fonts, which serves the
 * typeface. If any of that ever changes, this page and /cookies change with it.
 */
const Privacy = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Privacy Policy"
          text="What this documentation site does and does not collect, who else sees a request when you open a page, and why there is nothing here to ask about."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. Who is responsible</h3>
              <p>This site is the documentation for Uny AI, a WordPress theme and section builder published by emagweb. It is a static set of pages with no accounts, no forms, no analytics and no cookies, so there is no personal data of yours for anyone here to hold.</p>
              <p>The policy covers this documentation site only. The demo sites and the marketplace listing are separate places with their own terms, and following a link takes you out of the scope of this page.</p>
            </section>

            <section>
              <h3>2. What we collect from you</h3>
              <p>Nothing that you type. There is no sign-up, no login, no contact form, no comment box, no newsletter field and no payment on this site. It is a set of pages that are read.</p>
              <p>Two things happen anyway, and they are worth naming plainly.</p>
              <ul>
                <li><strong>Server logs.</strong> Like every web server, the machine serving these pages records the request: the IP address, the time, the page asked for, the browser's user agent. Those entries exist so the site can be operated and abuse investigated. They are not used to build a profile of you and they are not combined with anything else.</li>
                <li><strong>The typeface.</strong> The pages ask Google Fonts for the font they are set in, so Google receives your IP address and user agent at that moment. It is the only third party a normal visit contacts.</li>
              </ul>
            </section>

            <section>
              <h3>3. No analytics and no tracking</h3>
              <p>There is no analytics on this site. No Google Analytics, no tag manager, no pixel, no heatmap, no A/B testing script, nothing that counts visitors or follows them between pages. We do not know which pages you read or how long you stayed, and we have no way of finding out.</p>
              <p>Nor is there any advertising, any profiling and any automated decision-making. Nothing here is sold, rented or handed to third parties, for the simple reason that there is nothing to hand over.</p>
            </section>

            <section>
              <h3>4. Cookies</h3>
              <p>This site sets no cookies at all. That is why you are not asked to accept any: there is nothing to consent to. The detail, and how to control cookies in your browser in general, is on the <a href="/cookies">Cookie Policy</a> page.</p>
            </section>

            <section>
              <h3>5. Third parties and links out</h3>
              <ul>
                <li><strong>Google Fonts</strong> serves the typeface and therefore sees the IP address of that request.</li>
                <li><strong>The hosting provider</strong> keeps the server logs described in section 2.</li>
                <li><strong>Links out</strong> to the demo sites, to the marketplace listing and to WordPress documentation are ordinary links. Once you follow one, the privacy policy of that site applies, not this one.</li>
              </ul>
            </section>

            <section>
              <h3>6. Your rights and how long anything is kept</h3>
              <p>Server logs are kept for the hosting provider's normal retention window, measured in weeks, and then rotated out. Nothing else is collected, so nothing else has a retention period.</p>
              <p>Where the GDPR or a comparable law applies to you, you have the right to ask what data relates to you, to have it corrected or erased, to object to its processing, and to complain to your data protection authority. For this site those rights have nothing to act on: no account, no form entry, no cookie, no analytics record. The one trace of a visit is a line in the hosting provider's server log, which nobody here reads to identify you and which the provider rotates out on its own schedule.</p>
            </section>

            <section>
              <h3>7. Children</h3>
              <p>This is technical documentation for a WordPress product. It is not aimed at children and collects nothing from anyone, of any age.</p>
            </section>

            <section>
              <h3>8. Changes</h3>
              <p>If the site ever starts doing something new - an embedded video, a form, a statistics counter - this page changes first and says what and why.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Privacy }
