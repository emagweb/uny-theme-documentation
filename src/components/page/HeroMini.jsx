const HeroMini = (props) => {
  return (
    <div id="page" className="bg-light">
      <div className="container">
        <div className="p-y-100">
          <p className="upp c-theme-light fw-400 fz-22 ls-5 p-b-16">Documentation</p>
          <h2 className='title-intro fw-700 p-b-24'>{props.title}</h2>
          <p className="fz-20 c-grey w-70">{props.text}</p>
        </div>
      </div>
    </div>
  )
}
export { HeroMini }
