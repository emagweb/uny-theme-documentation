import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'
import shotInstall from '../assets/img/docs/doc-02-install-theme.jpg'
import shotPlugins from '../assets/img/docs/doc-03-install-plugins.jpg'
import shotReading from '../assets/img/docs/doc-04-reading-settings.jpg'
import shotMenus from '../assets/img/docs/doc-09-menus.jpg'
import shotCustomizer from '../assets/img/docs/doc-05-customizer.jpg'
import shotColors from '../assets/img/docs/doc-06-customizer-colors.jpg'
import shotTypography from '../assets/img/docs/doc-07-customizer-typography.jpg'
import shotHeader from '../assets/img/docs/doc-08-customizer-header.jpg'
import shotBlog from '../assets/img/docs/doc-20-blog-sidebar.jpg'
import shotWidgets from '../assets/img/docs/doc-18-widgets.jpg'
import shotShop from '../assets/img/docs/doc-22-woocommerce-shop.jpg'

const shot = "r-8 m-y-24 shadow-sm"
const shotStyle = { display: 'block', width: '100%', height: 'auto' }

const Theme = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="The Theme"
          text="Installing Uny, importing the demo, and setting up colours, typography, header, footer and blog in the WordPress Customizer."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. What is in the package</h3>
              <p>The download contains the theme itself and the plugins that extend it. The theme renders your site; the builder adds the section library on top of it. They are separate pieces on purpose, so each keeps working without the other.</p>
              <p>Unpack the file you downloaded and you get folders, not archives, which is what the marketplace allows:</p>
              <ul>
                <li><strong>uny</strong> - the WordPress theme: templates, palette, typography, blog, WooCommerce styling.</li>
                <li><strong>uny-child</strong> - the child theme. Use it if you plan to edit template files, so an update of the parent does not overwrite your work.</li>
                <li><strong>ewub-uny-builder</strong> - the plugin with 214 sections in 15 groups and the Auto Layout generator.</li>
                <li><strong>ewd-widgets</strong> - a small companion plugin that adds the Random Posts widget.</li>
                <li><strong>demo-content-light.xml</strong> and <strong>demo-content-dark.xml</strong> - the demo site, one file per colour scheme. Import one of them, not both.</li>
                <li><strong>Documentation.txt</strong> - the address of this guide.</li>
              </ul>
              <p>WordPress installs a theme and a plugin from a ZIP, and it cannot take a folder through the admin screen. So the theme arrives as an archive of its own for that purpose, and the two plugins are offered as archives on the recommended plugins screen described in step 4. Nothing in the package is an archive inside an archive.</p>
            </section>

            <section>
              <h3>2. Requirements</h3>
              <p>Nothing unusual - any host running a current WordPress will do.</p>
              <ul>
                <li>WordPress 6.9 or newer, tested up to WordPress 7.1.</li>
                <li>PHP 8.1 or newer.</li>
                <li>WooCommerce only if you plan to sell; the other 194 sections do not need it.</li>
                <li>For the AI assistant only: WordPress application passwords, which need the site to be served over HTTPS.</li>
              </ul>
            </section>

            <section>
              <h3>3. Installing the theme</h3>
              <p>Go to <strong>Appearance, Themes, Add New, Upload Theme</strong> and pick the theme archive, then press Install and Activate.</p>
              <img src={shotInstall} alt="Uploading the theme archive in Appearance, Themes, Add New" className={shot} style={shotStyle} />
              <p>Upload the theme archive, not the whole package you downloaded. If WordPress reports a missing stylesheet, you have handed it the outer archive - unpack it first and use the theme folder archive inside.</p>
            </section>

            <section>
              <h3>4. Installing the plugins</h3>
              <p>After activation the theme prompts you to install its recommended plugins. The screen lives at <strong>Appearance, Install Plugins</strong> if you dismissed the notice.</p>
              <img src={shotPlugins} alt="The recommended plugins screen listing all eight plugins waiting to be installed" className={shot} style={shotStyle} />
              <p>Eight are offered, and none of them is compulsory. All eight install from this screen without touching a file: tick the ones you want, choose Install from the Bulk actions menu, then activate them the same way. <strong>Uny Builder</strong> and <strong>EWD Widgets</strong> are ours, which is why their source reads External Source; the other six come from the WordPress plugin directory - Contact Form 7, WooCommerce, Safe SVG, Nextend Social Login, WPConsent Cookie Banner and WordPress Importer.</p>
              <p>The two that are ours are downloaded from our own server rather than from the WordPress directory, so they ask for your purchase code once. Open <strong>Appearance, License Activation</strong>, paste the code and press Activate; installing then works exactly as it does for the other six. The code is in your Envato account under Downloads, next to this item, as <em>Licence certificate and purchase code</em>. Everything else in the theme works without it - the code only unlocks these downloads, updates and the demo import.</p>
              <p>If your host does not let WordPress write files on its own and asks for FTP details, the same screen offers each of our plugins as a zip. Download it there and add it through <strong>Plugins, Add New, Upload Plugin</strong>; the result is the same.</p>
              <p>Two of them matter before you import the demo. <strong>Uny Builder</strong> has to be active, because the demo pages are made of builder sections and would otherwise arrive as empty content, and <strong>WordPress Importer</strong> is what runs the import. Add <strong>WooCommerce</strong> as well if you want the shop pages and the commerce sections to have products to show. The rest can wait until you need them.</p>
            </section>

            <section>
              <h3>5. Importing the demo content</h3>
              <p>The importer brings in the demo pages, posts, menus and images. It is the fastest way to understand the theme: you get the live demo on your own installation and can take it apart block by block.</p>
              <p>There are two demo files, one per colour scheme, and they differ in the palette the pages are built around:</p>
              <ul>
                <li><strong>demo-content-light.xml</strong> - the light demo, the one at <a href="https://demo-one-uny-theme.dvostok.com" target="_blank" rel="noreferrer">demo one</a>.</li>
                <li><strong>demo-content-dark.xml</strong> - the dark demo, the one at <a href="https://demo-two-uny-theme.dvostok.com" target="_blank" rel="noreferrer">demo two</a>.</li>
              </ul>
              <p>Import ONE of them. They hold the same pages, so importing both leaves you with two copies of everything. Pick the scheme you want to start from - it is a radio button in the Customizer afterwards either way, and switching it does not require a different import.</p>
              <p>Run the import under <strong>Tools, Import, WordPress</strong>, with <strong>Download and import file attachments</strong> ticked so the images come across.</p>
              <ul>
                <li>Import into a clean installation when you can. On a site that already has content the demo adds to it rather than replacing it.</li>
                <li>Give it time. Images are downloaded one by one, so a slow host can take several minutes.</li>
                <li>If the import stops halfway, run it again - already imported items are skipped.</li>
              </ul>
            </section>

            <section>
              <h3>6. Front page and menus</h3>
              <p>Tell WordPress which page is the front page under <strong>Settings, Reading</strong>. Choose "A static page" and pick the demo home page.</p>
              <img src={shotReading} alt="Settings, Reading with a static front page selected" className={shot} style={shotStyle} />
              <p>Then assign your menus under <strong>Appearance, Menus</strong>. This matters more here than in most themes: the header, navigation and footer sections read these menus directly, so a section shows the right links as soon as the menu is assigned to the right location.</p>
              <img src={shotMenus} alt="Appearance, Menus with menu locations assigned" className={shot} style={shotStyle} />
            </section>

            <section>
              <h3>7. The Theme Customizer</h3>
              <p>Open <strong>Appearance, Customize</strong>. All theme options sit in one panel with live preview, in this order: Colors, Typography, Header / Logo, Footer, Blog / Posts.</p>
              <img src={shotCustomizer} alt="The Uny panel in the WordPress Customizer" className={shot} style={shotStyle} />

              <h3>Colors</h3>
              <p>Eleven controls. The first one is the switch that matters most:</p>
              <ul>
                <li><strong>Color scheme</strong> - Light or Dark. This sets the starting point for every shade below, and every section follows it.</li>
                <li><strong>Surface (page &amp; cards)</strong> - the background of the page and of cards.</li>
                <li><strong>Text</strong> - the main text colour.</li>
                <li><strong>Grey</strong>, <strong>Medium</strong>, <strong>Light</strong> - the secondary text and the two lighter fills.</li>
                <li><strong>Accent</strong> and <strong>Accent Hover</strong> - buttons, links and highlights, plus their hover state.</li>
                <li><strong>Border</strong> and <strong>Border Dark</strong> - hairlines on light and on dark backgrounds.</li>
                <li><strong>Muted</strong> - captions, meta lines and disabled states.</li>
              </ul>
              <img src={shotColors} alt="The Colors section of the Customizer" className={shot} style={shotStyle} />
              <p>Change the scheme first, then adjust individual shades. Doing it the other way round means re-picking colours after the scheme resets your starting point.</p>

              <h3>Typography</h3>
              <p><strong>Font Family</strong> offers a list of Google fonts - Inter, Roboto, Lato, Poppins, Montserrat, Raleway, Nunito, Merriweather, Outfit, Syne, Manrope, Figtree, Geist and others. <strong>Custom Google Font name</strong> takes any other Google font by name if yours is not in the list.</p>
              <p>The first item on the list is <strong>System fonts (no external request)</strong>, and it is there for sites that must not contact anybody. Choose it and the theme asks Google for nothing: no stylesheet, no preconnect or dns-prefetch hint, no font file. Pages are set in the typefaces the visitor's own device already has - San Francisco on a Mac or iPhone, Segoe UI on Windows, Roboto on Android. Nothing else in the theme calls a third-party host, so with this option a Uny site makes no external requests at all, which is usually what a GDPR review is asking about. The pages also render a fraction faster, since there is no font to wait for.</p>
              <p>The <strong>Custom Google Font name</strong> field is ignored while System fonts is selected. That is deliberate: a family name left over in the field must not quietly switch the outside request back on.</p>
              <p>The builder has the same option for its sections, on <strong>Uny Builder, Settings, Typography</strong>. Set both if you use the builder, because the plugin setting governs the sections and the theme setting governs the rest of the site.</p>
              <img src={shotTypography} alt="The Typography section of the Customizer" className={shot} style={shotStyle} />

              <h3>Header / Logo</h3>
              <p><strong>Logo display</strong> decides how the brand appears: site name as text, icon only, or icon with text. The logo image itself is set under Site Identity, the way WordPress does it everywhere. <strong>Site name color</strong> overrides the accent for the site name; leave it empty to follow the Accent colour.</p>
              <p>The header also carries a background image with <strong>Overlay color</strong> and <strong>Overlay opacity (%)</strong>, so text stays readable over any photo.</p>
              <img src={shotHeader} alt="The Header and Logo section of the Customizer" className={shot} style={shotStyle} />

              <h3>Footer</h3>
              <p><strong>Footer logo image</strong>, <strong>Show site description</strong>, <strong>Footer menu (main row)</strong> and <strong>Footer bottom bar menu</strong>, plus the same overlay pair as the header for the footer background.</p>

              <h3>Blog / Posts</h3>
              <p><strong>Show post author</strong> turns the byline on and off. <strong>Listing cover style</strong> chooses between the featured image (with a generated accent placeholder when a post has none) and text only, for a uniform listing without covers. <strong>Sidebar</strong> places the widget column left, right, or removes it for a full-width layout.</p>
            </section>

            <section>
              <h3>8. Posts and the blog</h3>
              <p>An article can be written in two ways, and both are normal WordPress posts.</p>
              <ul>
                <li><strong>Written in the editor.</strong> The usual way: type the article and the theme lays it out - cover, title, byline, body, sidebar. Featured images become the covers in listings, categories and dates come from the post itself, and the sidebar position follows the Customizer setting.</li>
                <li><strong>Built from sections.</strong> The builder panel and its switch are on posts as well as pages, so a piece that deserves more than a column of text can be assembled from blocks: a hero with the cover, a pull quote, a gallery, a call to action at the end. Turning the switch on puts the single-post block in place for you, already wired to that post, so you start from a finished article layout rather than a blank page.</li>
              </ul>
              <p>Either way the post keeps its ordinary life - category, tags, featured image, comments - because those live in the editor beside the panel, not in the sections. The step-by-step version is in the Builder guide, <a href="/builder#post">A blog post built from sections</a>.</p>
              <img src={shotBlog} alt="A blog listing with the sidebar on the right" className={shot} style={shotStyle} />
            </section>

            <section>
              <h3>9. Widget areas</h3>
              <p>Widgets go under <strong>Appearance, Widgets</strong>. The blog sidebar is the main area; the footer areas fill the columns of the footer sections.</p>
              <img src={shotWidgets} alt="Appearance, Widgets with the theme widget areas" className={shot} style={shotStyle} />
            </section>

            <section>
              <h3>10. WooCommerce</h3>
              <p>Install WooCommerce and the shop is styled to match the theme - product listings, single products, cart and checkout, with the same palette and typography as the rest of the site.</p>
              <img src={shotShop} alt="The WooCommerce shop page styled by the theme" className={shot} style={shotStyle} />
              <p>On top of that, the twenty commerce sections in the builder let you feature real products on any page, not only inside the shop. See the Builder guide for those.</p>
            </section>

            <section>
              <h3>Next</h3>
              <p>The theme is set up. Now open a page in the builder and start assembling - by hand, or with the AI assistant if you would rather describe the page than build it.</p>
              <p className="flex aic rowrap m-t-24">
                <a href="/builder" className="button m-r-24">Builder guide</a>
                <a href="/assistant" className="button outline">AI assistant</a>
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Theme }
