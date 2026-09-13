/**
 * Two kinds of post, on the home page.
 *
 * The home page said almost nothing about posts: one trailing line under the three ways to
 * build. A buyer reading it would conclude the builder is for landing pages only, which is
 * what the Theme guide used to claim outright. Both are fixed; this section is the short
 * version that belongs on the front page.
 *
 * Classes follow Ways.jsx and Steps.jsx so the three sections read as a family.
 */
const Posts = () => {
  return (
    <section id="posts" className="p-y-100">
      <div className="container tc">
        <p className="upp c-theme fw-500 fz-14 p-b-16">Blog posts</p>
        <h2 className='title-intro fw-700 p-b-24'>Two kinds of post,<br />both ordinary WordPress</h2>
        <p className="fz-20 c-grey w-60 ma wide m-b-60">The builder is not only for landing pages. The same switch sits on a post, so you choose per article how much layout it deserves.</p>
        <div className="row">
          <div className="col-lg-6 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">Written in the editor</p>
              <h4 className="title-part fw-700 m-b-16">The theme lays it out</h4>
              <p className="c-grey">Type the article the usual way and the theme does the rest: cover from the featured image, title, byline, body and the sidebar you chose in the Customizer. Nothing to set up, and listings pick the post up by themselves.</p>
            </div>
          </div>
          <div className="col-lg-6 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">Built from sections</p>
              <h4 className="title-part fw-700 m-b-16">A hero, a quote, a gallery</h4>
              <p className="c-grey">Turn the builder on for the post and it puts the single-post block in place already wired to that article - its title, date, cover and body - so you start from a finished layout, then add blocks around it or replace it entirely.</p>
            </div>
          </div>
        </div>
        <p className="fz-18 c-grey m-t-24">Either way the post keeps its ordinary life - category, tags, featured image, comments - because those live in the editor beside the builder panel, not in the sections. The AI agent can write a post this way too.</p>
        <div className="m-t-40 flex aic jcc rowrap">
          <a href="/builder#post" className="button m-r-24">How a post is built</a>
          <a href="/theme" className="button outline">Blog options</a>
        </div>
      </div>
    </section>
  )
}
export { Posts }
