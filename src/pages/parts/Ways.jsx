/**
 * Three ways to get a page, on the home page.
 *
 * The documentation described the builder but never answered the question a buyer
 * actually has: how fast do I get a finished page, and what are my options. The
 * classes follow Steps.jsx so the two sections read as a pair.
 */
const Ways = () => {
  return (
    <section className="p-y-100 bg-medium">
      <div className="container tc">
        <p className="upp c-theme fw-500 fz-14 p-b-16">Three ways to build</p>
        <h2 className='title-intro fw-700 p-b-24'>A finished page today,<br />not next week</h2>
        <p className="fz-20 c-grey w-60 ma wide m-b-60">Pick sections yourself, have the skeleton generated, or describe the page to a chat. All three end in the same ordinary sections, editable by hand.</p>
        <div className="row">
          <div className="col-lg-4 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">By hand</p>
              <h4 className="title-part fw-700 m-b-16">Choose from 214 blocks</h4>
              <p className="c-grey">Open the library, look at the thumbnails, click the one you want. It lands on the page and you type your words straight into it, at the size they will be. Each block arrives finished, with its own photographs, so a page looks designed before you have changed anything.</p>
            </div>
          </div>
          <div className="col-lg-4 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">Auto Layout</p>
              <h4 className="title-part fw-700 m-b-16">Describe it in one line</h4>
              <p className="c-grey">Say what the page is - a shop, a services page, a product page - and the builder composes a matching sequence of sections in one click. A starting point, not a cage: reorder, replace or delete any of them exactly as if you had inserted them yourself.</p>
            </div>
          </div>
          <div className="col-lg-4 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">AI assistant</p>
              <h4 className="title-part fw-700 m-b-16">Let a chat write it</h4>
              <p className="c-grey">Connect the AI chat you already use and describe the page in a sentence. It picks the blocks, writes the text into them and saves a draft for you to edit. It can also change a page you already have, section by section. Optional, off until you switch it on, and every edit it makes can be undone.</p>
            </div>
          </div>
        </div>
        <p className="fz-18 c-grey m-t-24">All three work on blog posts as well as pages - the section below explains what that gives you.</p>
        <div className="m-t-40 flex aic jcc rowrap">
          <a href="/builder" className="button m-r-24">Builder guide</a>
          <a href="/assistant" className="button outline">AI assistant</a>
        </div>
      </div>
    </section>
  )
}
export { Ways }
