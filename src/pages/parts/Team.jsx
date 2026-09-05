import team from '../../data/team'

const Team = () => {

  return (
    <section id="team" className="m-b-80">
      <div className="container">
        <h2 className='title-intro p-b-24 m-b-40 tc'>Our Team</h2>
        <div className="row">
          {team.map((el) => (
            <div className="col-lg-6 m-b-24" key={el.id}>
              <div className="bg-light r-12 w-100 p-y-32 p-x-40">
                <div className="md-hide">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src={el.pic} alt={`${el.name} - ${el.job}`} width={216} height={300} className="bc-white bw-2 r-8 w-100 obfc" />
                    </div>
                    <div className="col-lg-7 p-l-24">
                      <div className="flex jcsb aic">
                        <h3 className="title-card fw-600">{el.name}</h3>
                      </div>
                      <p className='c-theme fw-500 fz-18'>{el.job}</p>
                      <p className="m-y-16 fz-18">{el.text}</p>
                    </div>
                  </div>
                </div>
                <div className="md-show">
                  <div className="row">
                    <div className="col-lg-5">
                      <img src={el.pic} alt={`${el.name} - ${el.job}`} width={216} height={300} className="mob-pic bc-white bw-2 r-8 w-100 obfc" />
                    </div>
                    <div className="col-lg-7">
                      <div className="flex jcsb aic">
                        <h3 className="title-card fw-600">{el.name}</h3>
                      </div>
                      <p className='c-theme fw-500 fz-18'>{el.job}</p>
                      <p className="m-y-16 fz-18">{el.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="m-y-40 tc"><a href="https://calendly.com/i-andrey/studio" target="_blank" rel="noopener noreferrer" className='button'>Book a Call</a></div>
      </div>
    </section>
  )
}

export { Team }