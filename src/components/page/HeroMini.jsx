const HeroMini = (props) => {
  return (
    <div id="page" className="bg-hero">
      <div className="container m-t-100">
        <h2 className='title-intro c-white'>{props.title}</h2>
        <h3 className="title w-70 m-b-40 c-blue">{props.text}</h3>
      </div>
    </div>
  )
}

export { HeroMini }