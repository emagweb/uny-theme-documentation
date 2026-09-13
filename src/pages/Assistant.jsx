import { HeaderPage } from '../components/HeaderPage'
import { HeroMini } from '../components/page/HeroMini'
import { Footer } from '../components/Footer'
import shotSettings from '../assets/img/docs/doc-25-ai-settings.jpg'
import shotTools from '../assets/img/docs/doc-27-ai-tools.jpg'
import shotBrief from '../assets/img/docs/doc-26-ai-brief.jpg'

const shot = "r-8 m-y-24 shadow-sm"
const shotStyle = { display: 'block', width: '100%', height: 'auto' }

const Assistant = () => {
  return (
    <>
      <HeaderPage />
      <main className='page-content'>
        <HeroMini
          title="The AI Assistant"
          text="Let a chat assistant build and edit your pages through the builder. Off until you switch it on, and everything it makes is ordinary sections you can edit by hand."
        />
        <div className="container m-b-120">
          <div className="row col-lg-10 ma">

            <section>
              <h3>1. What this is</h3>
              <p>The builder can be driven by an AI chat instead of by hand. You describe the page you want, the assistant reads the section library, picks blocks that fit, writes the text into them and saves the page as a draft. You then open it in the builder and change whatever you like.</p>
              <p>The part that is easy to miss: this is not a text generator bolted onto a theme. The assistant works the builder itself. It can list the 214 sections and read what each one is for, look at a page you have already built, propose a set of sections and have it checked before anything is saved, create a page, edit an existing one section by section, and undo an edit it made earlier. Seven separate abilities, each with its own switch, so you decide how much of that you want to hand over.</p>
              <p>What it buys you in practice:</p>
              <ul>
                <li><strong>A page in one message.</strong> "A landing page for a design studio, with a portfolio and a price list" comes back as a sequence of sections with the words already written in.</li>
                <li><strong>Changes by conversation.</strong> Ask for a testimonial block after the features, or for shorter headings, and it edits the page you have rather than starting again.</li>
                <li><strong>Ordinary sections at the end of it.</strong> Nothing proprietary is written into your page - the result is the same blocks you would have inserted by hand, editable in the builder, and unaffected if you ever switch the assistant off.</li>
                <li><strong>A safety net by design.</strong> Reading and writing are separate permissions, a snapshot is taken before every write, and pages stay drafts unless publishing is asked for explicitly.</li>
                <li><strong>Any language.</strong> You can ask in one language and have the page written in another - the brief has a field for exactly that.</li>
              </ul>
              <p>Two things to be clear about before anything else.</p>
              <ul>
                <li><strong>It is off until you turn it on.</strong> With the switch off nothing is registered and the endpoint does not exist.</li>
                <li><strong>It is optional.</strong> Everything the assistant does can be done in the builder by hand. Nothing about the theme depends on it.</li>
              </ul>
              <p>The plugin does not contain an AI and does not talk to one. It publishes an endpoint on your own site and waits to be asked. You bring the chat - the requests come from it, and it decides what to ask for.</p>
            </section>

            <section>
              <h3>2. The screen</h3>
              <p>Everything lives under <strong>Uny Builder, AI Assistant</strong>. The top of the screen is a short checklist that tells you which step you are on.</p>
              <img src={shotSettings} alt="The AI Assistant screen with the four setup steps and the connection snippet" className={shot} style={shotStyle} />
              <ol>
                <li><strong>Turn the assistant on.</strong> One checkbox.</li>
                <li><strong>Choose what it may do.</strong> Seven tools, each with its own switch.</li>
                <li><strong>Create a password for your chat.</strong> Not your login password - a separate application password.</li>
                <li><strong>Connect your chat.</strong> Paste the settings shown on the screen into your chat client.</li>
              </ol>
              <p>Each line reports its own state, so you can see at a glance whether the assistant is connected or still waiting for its first call.</p>
            </section>

            <section>
              <h3>3. Setting it up</h3>
              <p>Four steps, in this order.</p>

              <h3>Turn it on</h3>
              <p>Tick <strong>Register the abilities and publish the MCP server</strong> and save. Until you do, the endpoint answers 404 and there is nothing for a chat to connect to.</p>

              <h3>Choose what it may do</h3>
              <p>Seven tools, and the split between reading and writing is the part worth reading twice.</p>
              <img src={shotTools} alt="The tool list with four reading tools and three writing tools" className={shot} style={shotStyle} />
              <ul>
                <li><strong>Four read:</strong> list the section library, list your builder pages, read one page, and check a proposed set of sections without saving it.</li>
                <li><strong>Three write:</strong> create a page, edit an existing page, and undo a previous edit.</li>
              </ul>
              <p>A tool that is switched off is not registered at all - it does not appear in the chat's tool list, so the assistant cannot even try. If you want to watch the assistant work before letting it touch anything, leave the three writing tools off: it can then read and propose, and nothing more.</p>

              <h3>Create a password for your chat</h3>
              <p>WordPress issues application passwords from your profile page, at the bottom, under <strong>Application Passwords</strong>. Give it a name you will recognise later, and copy it when it appears - it is shown once and never again.</p>
              <p>Two notes that save time. This is not the password you log in with, and revoking it later does not affect your login. And WordPress only issues application passwords on a site served over HTTPS, so on a plain HTTP installation the section is not there.</p>
              <p>A separate account is worth considering. If you create a WordPress user for the assistant and give it a role without the writing capability, it can read your pages and propose changes while being unable to save them.</p>

              <h3>Connect your chat</h3>
              <p>The screen prints the exact settings to paste into your client, with your own site address already filled in. Replace the user name with the account you made for the assistant and the password with the application password you just copied.</p>
              <p>Then quit the chat completely and open it again. Clients read the list of tools once, when they start, so a chat that was already running will keep describing the previous version. The checklist line turns to "Connected" as soon as the first call arrives.</p>
            </section>

            <section>
              <h3>4. Who is allowed to do what</h3>
              <p>Reading and writing are deliberately separate permissions.</p>
              <ul>
                <li><strong>Reading</strong> needs the ordinary <strong>edit_posts</strong> capability, which any editor already has.</li>
                <li><strong>Writing</strong> needs that plus a capability of its own, <strong>ewub_uny_ai_edit</strong>. The checkbox on the settings screen grants it to administrators; you can grant it to other roles from your own code.</li>
                <li><strong>Publishing</strong> needs the normal WordPress permission to publish pages. Without it the assistant can still create drafts.</li>
              </ul>
              <p>The practical consequence: handing an assistant a read-only account is a supported way to work, not a workaround.</p>
            </section>

            <section>
              <h3>5. The brief</h3>
              <p>Answer three questions once and the assistant stops asking them every time.</p>
              <img src={shotBrief} alt="The brief: who writes the text, pictures, and the language of the page" className={shot} style={shotStyle} />
              <ul>
                <li><strong>Who writes the text</strong> - the assistant writes it, you supply it, or the sample text in the blocks is left alone.</li>
                <li><strong>Pictures</strong> - keep the photographs each block ships with, supply paths from your own media library, or leave them and add yours later.</li>
                <li><strong>Language of the page</strong> - the language of your site, or another one you name. This is the language of the page itself, not of your conversation: you can ask in one language and have the page written in another.</li>
              </ul>
              <p>Underneath, the same answers appear as a single line you can copy straight into a chat if you would rather paste them than have the assistant read them.</p>
            </section>

            <section>
              <h3>6. What it can and cannot do</h3>
              <p>The assistant works through the same section library you use, so it is bounded by it.</p>
              <ul>
                <li><strong>It picks from the 214 sections.</strong> It cannot invent a block, change a layout or write CSS.</li>
                <li><strong>It writes text into the fields</strong> each block already has, and nowhere else.</li>
                <li><strong>Pictures stay as they are</strong> unless you give it a path inside your own media library. It cannot search your library, cannot upload, and an external address is refused - so a block keeps the photograph it ships with, and the page looks like the block preview.</li>
                <li><strong>Pages are saved as drafts</strong> unless publishing is asked for explicitly.</li>
                <li><strong>Every edit is reversible.</strong> A snapshot of the previous state is taken before each write, and the last ten per page are kept, so an edit made through the assistant can be undone.</li>
              </ul>
              <p>There are limits on the size of one request as well - a hundred sections per page, fifty edits per call, and half a megabyte of payload. They exist so a confused client cannot flood your database in one go.</p>
            </section>

            <section>
              <h3>7. Working with it</h3>
              <p>What we found while using it ourselves.</p>
              <ul>
                <li><strong>Say what the page is for, not which blocks you want.</strong> "A landing page for a design studio, with a portfolio and a price list" gets a better result than naming sections.</li>
                <li><strong>Let it finish, then edit in the builder.</strong> Fixing wording is faster by hand than by describing the fix.</li>
                <li><strong>Ask for changes to the page you have</strong> rather than for a fresh version. It can edit an existing page section by section.</li>
                <li><strong>The pictures are yours to swap.</strong> The assistant leaves the sample photographs in place on purpose; changing them in the builder takes a few clicks per block.</li>
              </ul>
            </section>

            <section>
              <h3>8. If something is not working</h3>
              <ul>
                <li><strong>The chat sees no tools.</strong> Either the module is off, or every tool is switched off, or the client was started before you connected it - quit it fully and open it again.</li>
                <li><strong>"Server disconnected" from the client.</strong> Usually stray output rather than a real failure: the connection carries structured messages only, and a single line of PHP notice ends it. The settings screen explains how to silence that when running through WP-CLI.</li>
                <li><strong>No Application Passwords section in your profile.</strong> The site is not served over HTTPS. WordPress hides the feature there.</li>
                <li><strong>It reads but cannot save.</strong> The writing tools are off, or the account lacks the writing capability.</li>
                <li><strong>It refuses an edit and mentions stale state.</strong> The page changed between the assistant reading it and trying to write. Harmless: it reads the page again and retries.</li>
                <li><strong>Pictures are not the ones you wanted.</strong> Expected. Swap them in the builder, or give the assistant paths from your media library.</li>
              </ul>
            </section>

            <section>
              <h3>Next</h3>
              <p>Widget areas, requirements, third-party libraries and the common questions are in the reference.</p>
              <p><a href="/reference" className="button m-t-24">Reference</a></p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export { Assistant }
