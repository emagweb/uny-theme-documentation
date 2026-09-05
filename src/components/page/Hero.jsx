const Hero = (props) => {
  return (
     <div id="services" className="bg-hero">
        <div className="container">
          <div className='row'>
            <div className="col-lg-7">
              <div className="h-90 flex aic">
                <div>
                  <h2 className='title-intro c-white p-b-24'>{props.title}</h2>
                  <h3 className="title w-70 m-y-40 c-blue">{props.text}</h3>
                  <a href={props.buttonLink} className="button m-y-40">{props.buttonText}</a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 m-hide">
              <div className="h-90 flex aic jcc p-b-40">
                <img src={props.pic} alt="Pictures" width={500} height={500} className="w-100" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export { Hero }