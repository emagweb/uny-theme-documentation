const Cards = (props) => {

  const grd = 'linear-gradient(90deg, #4E7BF5, #A541FD)'
  const white = '#fff'

  return (
    <section id="serv" className="m-y-100 bg-light p-y-80">
      <div className="container">
        <h2 className='title-intro p-b-24 m-b-40'>{props.title}</h2>
        <div className="row">
          {props.data.map((el) => {
            const Icon = el.icon
            return (
            <div className={`col-lg-${props.number} m-b-40 p-x-0`} key={el.id}>
              <div className="p-x-40 p-y-32 bg-white shadow-sm r-8">
                <h3 className="title serv flex aic">
                  <Icon size={40} className="m-r-16 p-x-8 p-y-8 r-5" color={white} style={{ background: grd }} />
                  <span className="title-grd serv">{el.title}</span>
                </h3>
                <div className="h-p-1 m-y-24 bg-light" />
                <p className="m-t-24 m-b-8 card-text svt">{el.text}</p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Cards }