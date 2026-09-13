const Hero = () => {
  return (
    <div id="hero" className="bg-hero-bundle">
      <div className="container">
        <div className='row jcc'>
          <div className="col-lg-8">
            <div className="p-y-120 tc">
              <p className="upp c-theme-light fw-400 fz-22 ls-5 p-b-16">Documentation</p>
              <h2 className='title-intro fw-700 p-b-24'>Uny AI - Theme with Flexible Section Builder</h2>
              <p className="fz-20 m-b-40 c-grey">Everything you need to launch a site: installing the theme, importing the demo, the Customizer, and 214 ready sections you edit straight on the page. Build a page three ways - pick sections yourself, have the whole skeleton generated from one line, or let an AI agent draft it in a chat. Blog posts work the same way: write one in the editor, or assemble it from sections.</p>
              <div className='flex aic jcc rowrap'>
                <a href="#start" className="button m-r-24">Quick start</a>
                <a href="/builder" className="button outline">Builder guide</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Hero }
