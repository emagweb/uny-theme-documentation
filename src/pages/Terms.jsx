import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'

/**
 * Terms of use for the documentation site.
 *
 * Scope is deliberately narrow: this page governs the reading of these pages and the
 * reuse of the snippets printed on them. It does not licence the theme itself - the
 * licence that comes with the purchase does that, and nothing written here replaces or
 * extends it.
 */
const Terms = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Terms of Use"
          text="What these pages are, what you may do with the text and the code on them, and where the licence for the theme itself comes from."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. Scope</h3>
              <p>These terms apply to this documentation site: the pages you are reading and the code snippets printed on them. By using the site you accept them. If you do not, close the tab; there is nothing to sign up for and nothing to cancel.</p>
              <p>The demo sites, the marketplace listing and the WordPress documentation are separate places. Following a link takes you out of the scope of this page and under the terms of wherever you landed.</p>
            </section>

            <section>
              <h3>2. This page does not licence the theme</h3>
              <p>Uny AI and its section builder are sold on a marketplace, and the licence granted with the purchase is the only thing that says what you may do with the theme: on how many sites, in which kind of project, for how long. That licence governs. Nothing written in this documentation grants, widens or narrows it, and nothing here should be read as permission to use the product in a way the licence does not allow.</p>
              <p>Everything to do with buying, licensing, updates and support belongs to the marketplace where the item is listed, not to this site.</p>
            </section>

            <section>
              <h3>3. What you may do with the documentation</h3>
              <p>Read it, print it, keep a copy for your own reference, and quote from it when you credit the source. That covers the normal reasons anyone opens documentation.</p>
              <p>The code snippets are here to be used. Copy them into your own child theme, template or plugin and adapt them as you like, in commercial work included. They carry no separate fee and no attribution requirement.</p>
            </section>

            <section>
              <h3>4. What you may not do</h3>
              <ul>
                <li>Republish these pages, in whole or in substantial part, as your own documentation, or mirror them as a competing site.</li>
                <li>Present yourself as the author, the publisher or an authorised representative of the product.</li>
                <li>Harvest the site automatically at a rate that interferes with serving it to everybody else.</li>
                <li>Remove or alter the copyright notice on material you are permitted to copy.</li>
              </ul>
            </section>

            <section>
              <h3>5. Accuracy and availability</h3>
              <p>The documentation describes a particular version of the theme and the builder, and both keep moving. Screenshots age, field names occasionally change, and a page may describe behaviour that the newest release has already improved. The pages are corrected as that comes to light, but they are not guaranteed to be complete or current at any given moment.</p>
              <p>The site is served as it is, with no promise of uptime. It can be offline for maintenance, moved, or changed without notice.</p>
            </section>

            <section>
              <h3>6. Code snippets are examples, not guarantees</h3>
              <p>The snippets are illustrations, written for clarity rather than for every edge case in your installation. Test anything you copy on a staging copy of your site first, and keep a backup before you run it on a live one. Responsibility for what a snippet does on your site rests with you.</p>
            </section>

            <section>
              <h3>7. Liability</h3>
              <p>To the extent the law allows, this site and its author are not liable for loss arising from the use of the documentation or of the snippets in it: lost data, lost work, downtime or lost income. Where a law that applies to you does not allow such a limitation, the limitation is reduced to what that law permits and the rest of these terms stays in force.</p>
              <p>Nothing here limits rights that a consumer law gives you and that cannot be waived.</p>
            </section>

            <section>
              <h3>8. Names and trademarks</h3>
              <p>WordPress, WooCommerce and every other product named in these pages belong to their respective owners and are used here only to say what works with what. Naming them implies no endorsement in either direction.</p>
            </section>

            <section>
              <h3>9. Privacy</h3>
              <p>This site collects nothing from you and sets no cookies. The detail is on the <a href="/privacy">Privacy Policy</a> and <a href="/cookies">Cookie Policy</a> pages, and both are part of these terms.</p>
            </section>

            <section>
              <h3>10. Changes</h3>
              <p>These terms can change as the product and the documentation change. The version published on this page is the one that applies, and a change is never applied backwards to reading you have already done.</p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Terms }
