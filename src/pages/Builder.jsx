import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'
import groups from '../data/groups'
import shotMetabox from '../assets/img/docs/doc-10-builder-metabox.jpg'
import shotInterface from '../assets/img/docs/doc-11-builder-interface.jpg'
import shotSidebar from '../assets/img/docs/doc-12-builder-sidebar.jpg'
import shotToolbar from '../assets/img/docs/doc-13-section-toolbar.jpg'
import shotAutoEmpty from '../assets/img/docs/doc-14-autolayout-empty.jpg'
import shotAutoModal from '../assets/img/docs/doc-15-autolayout-modal.jpg'
import shotEntries from '../assets/img/docs/doc-16-form-entries.jpg'
import shotSubscribers from '../assets/img/docs/doc-17-subscribers.jpg'
import shotContact from '../assets/img/docs/doc-23-contact-form.jpg'
import shotMap from '../assets/img/docs/doc-24-contact-map.jpg'
import shotSettings from '../assets/img/docs/doc-28-builder-settings.jpg'

const shot = "r-8 m-y-24 shadow-sm"
const shotStyle = { display: 'block', width: '100%', height: 'auto' }

const Builder = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="The Builder"
          text="214 sections in 15 groups, edited straight on the page - on pages and on blog posts alike. How to insert, fill and reorder them, how the blocks pull in your menus, posts and products by themselves, and the three ways to fill a page: by hand, by the generator, or by an AI chat."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. Opening the builder</h3>
              <p>Edit any page or post and you will find the Uny Builder panel in the sidebar, with a switch that turns the builder on for this piece of content and a button that opens the builder screen.</p>
              <img src={shotMetabox} alt="The Uny Builder panel in the page editor" className={shot} style={shotStyle} />
              <p>Two things sit in that panel besides the button:</p>
              <ul>
                <li><strong>Use Uny Builder for this page.</strong> Off by default. With it on, the page is rendered from your sections and the page template is ignored. Turn it off and the page falls straight back to whatever is in the normal editor - nothing is lost either way.</li>
                <li><strong>Show theme's header and footer.</strong> Off gives you a bare canvas, which is what a landing page usually wants. On wraps the sections in the site header and footer. Sections stay full width in both cases.</li>
              </ul>
              <p>There is a shorter route for a page you are starting from scratch: <strong>Uny Builder, New Page</strong> in the admin menu. One click creates a draft with the builder already switched on and drops you straight into the builder screen, so the first thing you see is the section library rather than an empty editor.</p>
            </section>

            <section>
              <h3>2. The builder screen</h3>
              <p>The page is shown as it will look to a visitor. Sections are stacked in the middle, the library opens from the side, and each section carries its own toolbar. There is no abstract tree of widgets to decipher - what you see is the page.</p>
              <img src={shotInterface} alt="The builder screen with sections stacked in the preview" className={shot} style={shotStyle} />
              <p>Work top to bottom: header, then the body sections, then the footer. Four things around the canvas are worth knowing before you start:</p>
              <ul>
                <li><strong>It saves itself.</strong> Every change - a word typed, a block moved, an image swapped - is written a moment later, and a small indicator reports Saving and then Saved. There is no Save button to forget.</li>
                <li><strong>Draft or live, decided here.</strong> A pill at the top shows whether the page is a Draft, Live or Scheduled, and you publish from the builder without going back to WordPress. It asks first, so a draft cannot go live by a stray click.</li>
                <li><strong>Save and Preview</strong> opens the page as a visitor sees it, in a new tab.</li>
                <li><strong>Search sections</strong> filters the library by name when you already know what you are after and do not want to scroll the groups.</li>
              </ul>
              <p>What there is not: an undo history. The builder saves continuously rather than keeping a stack of steps, so treat deleting a block as deliberate. Everything else is reversible by editing it back.</p>
            </section>

            <section>
              <h3>3. The section library</h3>
              <p>The library lists every section as a thumbnail, grouped by type, so you choose by looking rather than by guessing from a name.</p>
              <img src={shotSidebar} alt="The section library with thumbnails grouped by type" className={shot} style={shotStyle} />
              <p>Pick a group, scan the thumbnails, click the one you want and it is inserted at the end of the page. Then drag it into place with the toolbar, or keep inserting and arrange everything at the end.</p>
            </section>

            <section>
              <h3>4. The section toolbar</h3>
              <p>Every section has a strip along its top edge with the section name on the left and its controls on the right.</p>
              <img src={shotToolbar} alt="The toolbar above a section with its controls" className={shot} style={shotStyle} />
              <p>From left to right on every section:</p>
              <ul>
                <li><strong>Block info</strong> and the block name, so you always know which of the 214 you are looking at.</li>
                <li><strong>Anchor.</strong> Give the section a name and it becomes a link target: <em>your-page#pricing</em>. That is how a button in the header jumps to the pricing block further down, with no plugin and no code.</li>
                <li><strong>Set Background.</strong> Three swatches, and this is the control that keeps a long page from reading as one flat sheet. A light block offers white and two paler shades; a dark block offers three depths of dark. The two alternative shades are yours to choose once, globally, on the settings screen.</li>
                <li><strong>Order.</strong> The section's position as a number. Type 2 and it moves to second place - quicker than clicking an arrow eleven times on a long page.</li>
                <li><strong>Up and down arrows</strong> for a single step, and <strong>delete</strong>.</li>
              </ul>
              <p>Sections that hold particular kinds of content grow their own buttons on the same strip, and only there: <strong>Products</strong> and <strong>Auto by Rating</strong> on commerce blocks, <strong>Category</strong>, <strong>Count</strong> and <strong>Add Posts</strong> on blog blocks, <strong>Add Video</strong>, <strong>Edit Slides</strong>, <strong>Change Images</strong>, <strong>Set Location</strong> on a map, <strong>Insert Shortcode</strong> on a form, and plus and minus for a table row or a question in an FAQ. You never hunt through a settings panel for them - the button is on the block that needs it.</p>
            </section>

            <section>
              <h3>5. Editing text and images</h3>
              <p>Click any heading or paragraph in the preview and type. The text is edited where it will be shown, at the size and weight it will have, so you can see immediately whether your headline fits on one line.</p>
              <p>Images open the standard WordPress media library. Your uploads stay in one familiar place, and the same image can be reused across sections without duplicating files. An image says <em>Click to change image</em> when you hover it, so there is nothing to memorise.</p>
              <p>The same click-and-change applies to the smaller pieces most builders bury in a settings panel:</p>
              <ul>
                <li><strong>Icons.</strong> Click one and name any icon from the Feather set - 287 of them, drawn inline, so they stay sharp at any size and cost no extra request.</li>
                <li><strong>Link addresses</strong> on buttons and cards, edited in place.</li>
                <li><strong>Videos.</strong> Paste a YouTube or Vimeo address, whether the block plays it in a frame or uses it as a moving background.</li>
                <li><strong>The dark wash</strong> over a photograph, on a slider, so white text stays readable over a busy image.</li>
                <li><strong>Slides, table rows and FAQ questions</strong> are added and removed with the plus and minus on the block, and a new row arrives with sensible sample text rather than empty cells.</li>
                <li><strong>Star ratings</strong> on a testimonial, and the placeholder text inside form fields.</li>
              </ul>
            </section>

            <section>
              <h3>6. Sections that fill themselves</h3>
              <p>This is where a section library stops being a set of pretty pictures. Fifty of the blocks read your real WordPress content - all 19 blog blocks, 19 of the 20 commerce blocks and all 12 navigation blocks - so a page keeps itself current after you have stopped editing it.</p>
              <ul>
                <li><strong>Navigation and header sections</strong> print the menu you assigned to the primary location under Appearance, Menus. Add a menu item and every navigation section on the site follows. Before you have made a menu the block shows a sample one, so the page never looks broken while you are still building it.</li>
                <li><strong>Blog sections</strong> pull real posts with their featured images, categories and dates. The toolbar gives you a <strong>Category</strong> to narrow them to one topic and a <strong>Count</strong> for how many to list, from one to thirty. Sticky posts come first, in the order you pinned them, and the rest fill in by date - so a featured article stays at the top of the block without you editing the page again.</li>
                <li><strong>Commerce sections</strong> list actual WooCommerce products with their prices and add-to-cart buttons. Three ways to fill one: name the products you want by id, press <strong>Auto by Rating</strong> to let the block take your best-rated ones, or leave it alone and it shows your six most recent products. A new product in the shop appears on the page by itself.</li>
                <li><strong>Footer sections</strong> print the same menu, your social links and the logo from Site Identity, so the bottom of every page stays in step with the top without being edited twice.</li>
              </ul>
              <p>The practical effect: maintain the content in the normal WordPress screens and the page follows. There is no second copy of your catalogue or your menu living inside the page builder, waiting to go stale.</p>
            </section>

            <section id="post">
              <h3>7. A blog post built from sections</h3>
              <p>The builder is not only for landing pages. The same panel and the same switch are on posts, so an article can be assembled from blocks instead of typed into the editor - useful when a piece deserves more than a column of text: a hero with the cover, a pull quote, a gallery, a call to action at the end.</p>
              <p>Turning the switch on for a post does something helpful straight away: the builder puts the single-post block in place for you, already wired to that post - its title, date, cover and body. You are looking at a finished article layout before you have chosen anything. From there you add blocks around it, or replace it entirely and write the article out of sections.</p>
              <p>Two notes. The post keeps its normal WordPress life - category, tags, featured image, comments - because those live in the editor beside the panel, not in the sections. And if you empty a post of every block, the builder asks what you meant rather than leaving you with a blank page: put the post template back, hand the post to the theme's normal layout, or leave it empty.</p>
            </section>

            <section id="autolayout">
              <h3>8. Auto Layout</h3>
              <p>A page with no sections yet does not sit there empty. It offers you the three ways of filling it, side by side:</p>
              <img src={shotAutoEmpty} alt="The empty builder canvas offering three ways to fill the page" className={shot} style={shotStyle} />
              <ul>
                <li><strong>Add the sections yourself</strong> - pick them from the groups in the sidebar, in any order you like.</li>
                <li><strong>Lay out this page automatically</strong> - press Start and answer one question; the generator picks the blocks and their order.</li>
                <li><strong>Ask an AI assistant to build it</strong> - the chat route described in the <a href="/assistant">Assistant</a> guide, which fills in the words as well.</li>
              </ul>
              <p>Press <strong>Start</strong> on the middle card and the generator asks what the page is about - a product, a services page, a shop, or something you describe in your own words:</p>
              <img src={shotAutoModal} alt="The Auto Layout dialog asking what the page is about" className={shot} style={shotStyle} />
              <p>Two things worth knowing:</p>
              <ul>
                <li>The offer only appears on an empty page, and it asks before doing anything. Your existing sections are never overwritten.</li>
                <li>The result is an ordinary set of sections. Reorder, replace or delete any of them exactly as if you had inserted them by hand. It is a starting point, not a template you are locked into.</li>
              </ul>
            </section>

            <section id="settings">
              <h3>9. Global settings</h3>
              <p>Colours, fonts and background shades are set once for every section, on <strong>Uny Builder, Settings</strong>. Nine cards, and the useful part is what happens when you leave a field empty.</p>
              <img src={shotSettings} alt="The builder settings screen with the colour palette" className={shot} style={shotStyle} />
              <ul>
                <li><strong>Palette.</strong> The first control on the Colors card, and the one that decides the most: <em>Follow the theme</em>, <em>Always light</em> or <em>Always dark</em>. It sets what "unset" means for every colour below, so one choice gives you a coherent dark set of sections. Follow the theme takes the scheme from the Customizer, which is what you want on a Uny site; the two fixed options are for sites running another theme, or for keeping sections dark while the rest of the site is light.</li>
                <li><strong>Colors.</strong> Twelve roles - accent, accent hover, surface, dark, headings, captions, grey, medium, light, muted, border and border dark. An empty field inherits: first from the palette chosen above, then from the Uny theme, then from the brand default, and the label beside each field shows the colour the section will actually be painted with, along with where it came from. So on a Uny site you change the accent in the Customizer and the sections follow, with nothing to set twice. A colour typed into a field always wins, whichever palette is active.</li>
                <li><strong>Backgrounds.</strong> The two alternative shades offered by the per-section background picker. White, light and dark are fixed; these are the ones you choose. Leave the light alternative empty and it tracks your accent as a very pale wash, which is how a page gets a tint of your brand without you picking a colour at all.</li>
                <li><strong>Typography.</strong> Twenty-one Google fonts in a list, or type any family name from fonts.google.com yourself. Empty follows the theme. The first item, <strong>System fonts (no external request)</strong>, asks Google for nothing and sets the sections in the fonts the visitor already has - both on the front end and in the builder canvas, so what you edit is what you publish. The custom field is ignored while it is selected.</li>
                <li><strong>Logo.</strong> How the brand appears in navigation and footer sections: image with the site name, image only, or name only. The image itself comes from Site Identity in the Customizer.</li>
                <li><strong>Rendering</strong> reports how pages are assembled on this site - nothing to set, it is there to answer the question rather than make you guess.</li>
                <li><strong>AI Assistant</strong> shows whether the assistant can run here and links to its own screen.</li>
                <li><strong>Subscribers</strong> and <strong>Form Entries</strong> show the five most recent of each, with a CSV export.</li>
                <li><strong>Uninstall.</strong> One checkbox, off by default. Deactivating the plugin never deletes anything; this only applies if you delete the plugin outright.</li>
              </ul>
              <p>Everything here is stored per site rather than in the theme, so it survives a theme change.</p>
            </section>

            <section>
              <h3>10. The fifteen groups</h3>
              <p>What each group is for, and how many sections it holds.</p>
              {/* The bottom margin belongs on the COLUMN, not on the panel: the panel is
                  stretched to the height of its column, so a margin on the panel falls outside
                  that box and the lines touch. Every other card row in the project carries the
                  margin on the column for the same reason. */}
              <div className="row">
                {groups.map((el) => (
                  <div className="col-lg-6 m-b-24" key={el.id}>
                    <div className="bg-light r-8 p-x-24 p-y-24">
                      <div className="flex jcsb aic">
                        <h4 className="title-part fw-700">{el.name}</h4>
                        <span className="c-theme fw-600 fz-18">{el.count}</span>
                      </div>
                      <p className="fz-18 m-t-8">{el.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3>11. Forms and where the entries go</h3>
              <p>The form sections store submissions on your own installation - nothing is handed to a third-party service.</p>
              <p>Requests from contact and request forms appear under <strong>Form Entries</strong> in the WordPress admin.</p>
              <img src={shotEntries} alt="The Form Entries screen in the WordPress admin" className={shot} style={shotStyle} />
              <p>Newsletter sign-ups are collected separately under <strong>Subscribers</strong>.</p>
              <img src={shotSubscribers} alt="The Subscribers screen in the WordPress admin" className={shot} style={shotStyle} />
            </section>

            <section>
              <h3>12. Contact sections</h3>
              <p>Nine contact blocks, from a plain details column to a form beside a map. The phone, address and opening hours are ordinary editable fields on the block: click and type, the same as any other text. Social links, the map location and the form are on the block's own toolbar.</p>
              <img src={shotContact} alt="A contact section with a form on the front end" className={shot} style={shotStyle} />
              <img src={shotMap} alt="A contact section with a map on the front end" className={shot} style={shotStyle} />
            </section>

            <section>
              <h3>13. Letting an assistant build the page</h3>
              <p>Everything above is the builder driven by hand. The same builder can be driven by an AI chat instead: you say what the page is for, and the assistant reads the section library, picks the blocks that fit, writes the text into them and saves the page as a draft. Then you open it in the builder and change whatever you like.</p>
              <p>What that changes in practice:</p>
              <ul>
                <li><strong>A first draft in one message</strong> instead of an afternoon of choosing blocks. "A landing page for a design studio, with a portfolio and a price list" is enough to get a sequence of sections with words already in them.</li>
                <li><strong>It edits the page you have</strong>, section by section, so you can ask for a pricing block after the features and get exactly that, rather than a fresh version of the whole page.</li>
                <li><strong>Nothing exotic comes out of it.</strong> Everything it makes is the same 214 sections you would have inserted yourself, so there is no proprietary layer to unpick later, and every result is editable by hand.</li>
                <li><strong>Every edit can be undone.</strong> A snapshot is taken before each write, and pages stay drafts unless you ask for publishing.</li>
                <li><strong>Off until you switch it on</strong>, and it works with the chat you already pay for - the plugin does not contain an AI and does not send your content anywhere by itself.</li>
              </ul>
              <p><a href="/assistant" className="button m-t-24">AI Assistant guide</a></p>
            </section>

            <section>
              <h3>Next</h3>
              <p>Widgets, requirements, the bundled libraries and the answers to the common questions are in the reference.</p>
              <p><a href="/reference" className="button m-t-24">Reference</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Builder }
