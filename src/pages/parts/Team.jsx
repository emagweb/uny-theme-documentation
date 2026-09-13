import chapters from '../../data/chapters'
const Team = () => {
  return (
    <section id="chapters" className="p-y-100">
      <div className="container tc">
        <p className="upp c-theme fw-500 fz-14 p-b-16">Contents</p>
        <h2 className='title-intro fw-700 p-b-24'>Where to read what</h2>
        <p className="fz-20 c-grey w-60 ma wide m-b-60">Six chapters. Start with the theme, then the builder.</p>
        <div className="row">
          {chapters.map((el) => (
            <div className="col-lg-6 m-b-24" key={el.id}>
              <div className="bg-light r-12 p-x-32 p-y-32">
                <img src={el.pic} alt={`${el.name} - ${el.job}`} className="r-8 m-b-24" style={{ display: 'block', width: '100%', height: 'auto' }} />
                <p className="upp c-theme fw-500 fz-14 p-b-8">{el.job}</p>
                <h3 className="title-part fw-700 m-b-16">{el.name}</h3>
                <p className="c-grey m-b-16">{el.text}</p>
                <a href={el.link} className="fw-500 c-theme">Read the {el.name} guide</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export { Team }
