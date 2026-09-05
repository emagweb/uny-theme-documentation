const CtaPage = (props) => {
  return (
    <section id='ctapage'>
      <div className="container bg-cta p-x-100 p-y-100 r-15 c-white">
        <h2 className='title-intro'>{props.titleOne}</h2>
        <h3 className='title-grd fz-40 p-b-24'>{props.titleTwo}</h3>
        <div className="title w-70 m-y-60">{props.children}</div>
        <a href={props.buttonLink} className="button m-r-16 m-t-60">{props.buttonText}</a>
      </div>
    </section>
  )
}

export { CtaPage }