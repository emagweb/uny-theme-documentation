const Steps = () => {
  return (
    <section id='start' className="p-y-100">
      <div className="container tc">
        <p className="upp c-theme fw-500 fz-14 p-b-16">Quick start</p>
        <h2 className='title-intro fw-700 p-b-24'>From archive to live site<br />in three steps</h2>
        <p className="fz-20 c-grey w-60 ma wide m-b-60">The short path. Each step is covered in detail in the Theme guide.</p>
        <div className="row">
          <div className="col-lg-4 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">Step 1</p>
              <h4 className="title-part fw-700 m-b-16">Install the theme</h4>
              <p className="c-grey">Upload the theme archive under Appearance, Themes, Add New, then activate it. Accept the recommended plugins prompt so the builder is installed with it.</p>
            </div>
          </div>
          <div className="col-lg-4 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">Step 2</p>
              <h4 className="title-part fw-700 m-b-16">Import the demo</h4>
              <p className="c-grey">Run the importer to bring in the demo pages, posts, menus and images, then set your front page under Settings, Reading.</p>
            </div>
          </div>
          <div className="col-lg-4 m-b-24">
            <div className="bg-light r-12 p-x-40 p-y-40">
              <p className="upp c-theme fw-500 fz-14 p-b-16">Step 3</p>
              <h4 className="title-part fw-700 m-b-16">Make it yours</h4>
              <p className="c-grey">Set the palette and fonts in the Customizer, then open any page in the builder and swap sections, text and images until the site is yours.</p>
            </div>
          </div>
        </div>
        <div className="m-t-40 flex aic jcc rowrap">
          <a href="/theme" className="button m-r-24">Theme guide</a>
          <a href="/builder" className="button outline">Builder guide</a>
        </div>
      </div>
    </section>
  )
}
export { Steps }
