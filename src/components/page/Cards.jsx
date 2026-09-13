const Cards = (props) => {
  const accent = '#E91E8C'
  return (
    <section id="features" className={`p-y-100 ${props.bg || ''}`}>
      <div className="container tc">
        <p className="upp c-theme fw-500 fz-14 p-b-16">{props.label}</p>
        <h2 className='title-intro fw-700 p-b-24'>{props.title}</h2>
        <p className="fz-20 c-grey w-60 ma wide m-b-60">{props.text}</p>
        <div className="row">
          {props.data.map((el) => {
            const Icon = el.icon
            return (
            <div className={`col-lg-${props.number} m-b-24`} key={el.id}>
              <div className="bg-light r-12 p-x-32 p-y-32">
                <Icon size={32} color={accent} />
                <h3 className="title-part fw-700 m-t-16 m-b-16">{el.title}</h3>
                <p className="c-grey">{el.text}</p>
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
