

const Steps = () => {
  return (
    <section id='steps' className="p-y-80">
      <div className="container tc">
        <h2 className='title-grd p-b-24'>Achieve Compliance in</h2>
        <h3 className="title-sub m-b-60">Three Steps</h3>
        <div className="row">
          <div className="col-lg-4 m-y-24">
            <div className="card step w-100 shadow-none">
              <p className="title-step">1</p>
              <h4 className="card-title title-grd m-b-24">Request your needs</h4>
              <p className="h-15">Speak with our compliance expert, and describe your regulatory requirements and business objectives.</p>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="card step w-100 shadow-none">
              <p className="title-step">2</p>
              <h4 className="card-title title-grd m-b-24">Comprehensive Audit</h4>
              <p className="h-15">Receive a detailed compliance audit with gap analysis and actionable recommendations tailored to your needs.</p>
            </div>
          </div>
          <div className="col-lg-4 m-y-24">
            <div className="card step w-100 shadow-none">
              <p className="title-step">3</p>
              <h4 className="card-title title-grd m-b-24">Delivery</h4>
              <p className="h-15">Implementation begins with audit cost fully deducted from project fee. Essentially a free audit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Steps }
