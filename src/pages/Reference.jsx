import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'
import faq from '../data/faq'
import shotWidget from '../assets/img/docs/doc-19-random-posts-widget.jpg'
import shotWidgetFront from '../assets/img/docs/doc-21-random-posts-front.jpg'

const shot = "r-8 m-y-24 shadow-sm"
const shotStyle = { display: 'block', width: '100%', height: 'auto' }

// See the note in Theme.jsx: `gpl` is the edition with no licence key, where both bundled
// plugins ship as zip files inside the archive.
const GPL = process.env.DOCS_EDITION === 'gpl'

const Reference = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="Reference"
          text="The Random Posts widget, server requirements, troubleshooting and the questions that come up most often."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. EWD Widgets: List of Random Posts</h3>
              <p>The companion plugin adds one widget that shows random posts with their featured image. Posts that use a video as their lead media instead of a cover are skipped, so the list never shows a hole where an image should be. The title and the number of posts are both configurable.</p>
              <img src={shotWidget} alt="The Random Posts widget and its settings" className={shot} style={{ ...shotStyle, maxWidth: '666px' }} />
              <p>On the front end it renders as a compact list of covers with titles - useful in a blog sidebar where you want movement without maintaining a hand-picked list.</p>
              <img src={shotWidgetFront} alt="The Random Posts widget on the front end" className={shot} style={{ ...shotStyle, maxWidth: '301px' }} />
            </section>

            <section>
              <h3>2. Requirements</h3>
              <ul>
                <li>WordPress 6.9 or newer, tested up to WordPress 7.1.</li>
                <li>PHP 8.1 or newer.</li>
                <li>WooCommerce for the twenty commerce sections and the shop pages.</li>
                <li>No special PHP extensions and no external services.</li>
                <li>The AI assistant additionally needs application passwords, which WordPress only issues over HTTPS. Everything else works over plain HTTP.</li>
              </ul>
            </section>

            <section>
              <h3>3. How the pieces fit together</h3>
              <p>Three separate packages, deliberately not welded to each other:</p>
              <ul>
                <li><strong>The theme</strong> renders your site and owns the palette, typography and templates. It works on its own with the standard WordPress editor.</li>
                <li><strong>Uny Builder</strong> adds the section library. It is a plugin with its own prefix and stylesheet, so it survives a theme switch, and the theme survives its deactivation - pages simply fall back to their editor content.</li>
                <li><strong>EWD Widgets</strong> adds the Random Posts widget and nothing else.</li>
              </ul>
              <p>The AI assistant is part of the builder rather than a fourth package, and it is off until you switch it on. With the switch off nothing about it is registered.</p>
              <p>The practical consequence: nothing you build is held hostage. Deactivating a plugin costs you that plugin's feature, not your site.</p>
            </section>

            <section>
              <h3>4. If something looks wrong</h3>
              <ul>
                <li><strong>"Stylesheet is missing" when installing the theme.</strong> You uploaded the outer package archive. Unpack it and upload {GPL ? <><strong>uny.zip</strong> from inside it</> : 'the theme folder archive inside'}.</li>
                <li><strong>Demo pages come in empty.</strong> The builder was not active during the import. Activate it and run the import again.</li>
                <li><strong>A navigation section shows no links.</strong> No menu is assigned to that location under Appearance, Menus.</li>
                <li><strong>Commerce sections are empty.</strong> WooCommerce is inactive, or the catalogue has no published products.</li>
                <li><strong>Contact details show the sample phone and address.</strong> They are editable fields on the contact block itself - click the line in the builder and type your own.</li>
                <li><strong>Colours look off after switching scheme.</strong> The scheme resets the starting shades. Set Color scheme first, then adjust individual colours.</li>
                <li><strong>Sections stay light on a dark site, or the other way round.</strong> The builder has a palette of its own, on Uny Builder, Settings, Colors. Set it to Follow the theme and the sections take the scheme from the Customizer.</li>
                <li><strong>The site still asks Google for a font.</strong> The switch is in two places and both matter: Appearance, Customize, Typography for the theme, and Uny Builder, Settings, Typography for the sections. Choose System fonts (no external request) in both. A family name left in the custom field does not override it.</li>
                <li><strong>The import stalls.</strong> Run it again - imported items are skipped, and slow hosts often need a second pass to finish downloading images.</li>
                <li><strong>Your chat assistant sees no tools.</strong> The module is off, every tool is switched off, or the client started before you connected it. The assistant chapter covers this in full.</li>
                <li><strong>No Application Passwords in your profile.</strong> WordPress only offers them on a site served over HTTPS. That affects the AI assistant only; nothing else needs them.</li>
              </ul>
            </section>

            <section>
              <h3>5. Bundled third-party libraries</h3>
              <p>Every library below is bundled and served from your own site. Nothing is fetched from a content delivery network while a page renders, so the sections keep working on an installation with no outbound internet access. The licence text is not copied into the package; each entry links to the licence at its source.</p>
              <ul>
                <li><strong>Swiper 11.2.10</strong> - sliders and carousels. <a href="https://github.com/nolimits4web/swiper/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT licence</a>.</li>
                <li><strong>Slick 1.8.1</strong> - carousels in several builder sections; uses the jQuery that WordPress already ships. <a href="https://github.com/kenwheeler/slick/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT licence</a>.</li>
                <li><strong>Feather Icons 4.29.0</strong> - the inline icons used across the sections. <a href="https://github.com/feathericons/feather/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT licence</a>.</li>
                <li><strong>MapLibre GL JS 4.7.1</strong> - vector maps in the contact sections, loaded only on pages that actually place a map. <a href="https://github.com/maplibre/maplibre-gl-js/blob/v4.7.1/LICENSE.txt" target="_blank" rel="noopener noreferrer">BSD 3-Clause licence</a>. Tiles and style come from <a href="https://openfreemap.org" target="_blank" rel="noopener noreferrer">OpenFreeMap</a>, free for commercial use and with no API key; attribution belongs to OpenMapTiles, with data from OpenStreetMap.</li>
                <li><strong>TGM Plugin Activation 2.6.1</strong> - the plugin installer on Appearance, Install Plugins. <a href="http://www.gnu.org/licenses/gpl-2.0.html" target="_blank" rel="noopener noreferrer">GPLv2 or later</a>.</li>
                <li><strong>Jetpack Autoloader</strong> - keeps the builder's classes from clashing with another plugin shipping the same package. <a href="http://www.gnu.org/licenses/gpl-2.0.html" target="_blank" rel="noopener noreferrer">GPLv2 or later</a>.</li>
                <li><strong>WordPress MCP Adapter</strong> and <strong>PHP MCP Schema</strong> - serve the endpoint the AI assistant connects to. <a href="http://www.gnu.org/licenses/gpl-2.0.html" target="_blank" rel="noopener noreferrer">GPLv2</a>.</li>
                <li><strong>Google Fonts</strong> - the selectable body and heading fonts. <a href="https://openfontlicense.org/open-font-license-official-text/" target="_blank" rel="noopener noreferrer">SIL Open Font License 1.1</a>.</li>
              </ul>
              <h4 className="title-part fw-700 m-t-24 m-b-8">What leaves your visitor's browser</h4>
              <p>Every library above is served from your own site. Two things are fetched from somebody else's server, and because that means a request carrying your visitor's IP address and user agent, both are named here plainly so you can decide about them:</p>
              <ul>
                <li><strong>The typeface, from fonts.googleapis.com and fonts.gstatic.com.</strong> Google receives the IP address and user agent of each visitor whose browser asks for the font. You can switch this off completely: choose <strong>System fonts (no external request)</strong> under Appearance, Customize, Typography, and the same option under Uny Builder, Settings, Typography. Pages are then set in the fonts already on the visitor's device and nothing is requested.</li>
                <li><strong>Map tiles, from OpenFreeMap.</strong> Only on pages that actually place one of the map sections, and only for visitors who reach such a page. OpenFreeMap receives the IP address and the area being viewed. Leave the map sections out of your pages and nothing is requested. There is no API key and no account involved.</li>
              </ul>
              {GPL ? (
                <p>Nothing else in the theme or the builder contacts a third party. No analytics, no telemetry, no phoning home, and no licence check: there is no key in this edition and nothing is ever sent to us.</p>
              ) : (
                <p>Nothing else in the theme or the builder contacts a third party. No analytics, no telemetry, no phoning home: the purchase code goes to our download server only when you press Activate on the licence screen, and only to fetch the two plugins.</p>
              )}
            </section>

            <section>
              <h3>6. Frequently asked</h3>
              {faq.map((el) => (
                <div key={el.id} className="m-b-24">
                  <h4 className="title-part fw-700 m-b-8">{el.question}</h4>
                  <p>{el.answer}</p>
                </div>
              ))}
            </section>

            <section>
              <h3>7. Getting help</h3>
              <p>If none of the above covers your case, write to us through your purchase account. Include the page URL, a screenshot and a line about what you expected to happen - it usually turns a long exchange into a single reply.</p>
              <br />
              <p className="flex aic rowrap m-t-24">
                <a href="/" className="button m-r-24">Back to overview</a>
                <a href="https://demo-one-uny-theme.dvostok.com/" target="_blank" rel="noopener noreferrer" className="button outline">Live demo</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Reference }
