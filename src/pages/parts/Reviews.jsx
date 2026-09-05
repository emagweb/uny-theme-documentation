import { useState, useEffect } from "react"
import Slider from "react-slick"
import reviews from '../../data/reviews'
import icon from '../../assets/svg/t-icon.svg'
import five from '../../assets/svg/t-five.svg'

const Reviews = () => {
  const settingsMap = [
    { maxWidth: 768, settings: { slidesToShow: 1 } },
    { maxWidth: 1024, settings: { slidesToShow: 3 } },
    { maxWidth: Infinity, settings: { slidesToShow: 4 } } 
  ]

  const baseSettings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    centerPadding: "48px",
    speed: 500,
    arrows: false,
    pauseOnHover: false
  }

  const [currentSettings, setCurrentSettings] = useState({
    ...baseSettings,
    ...settingsMap.find(b => window.innerWidth <= b.maxWidth).settings
  })

  useEffect(() => {
    const mediaQueries = settingsMap.map(b => 
      window.matchMedia(`(max-width: ${b.maxWidth}px)`)
    )

    const update = () => {
      const match = settingsMap.find((b, i) => mediaQueries[i].matches)
      if (match) {
        setCurrentSettings({ ...baseSettings, ...match.settings })
      }
    }

    update()
    mediaQueries.forEach(mq => mq.addEventListener("change", update))

    return () => mediaQueries.forEach(mq => mq.removeEventListener("change", update))
  }, [])

  return (
    <section id="reviews">
      <Slider {...currentSettings}>
        {reviews.map((el) => (
          <div key={el.id}>
            <div className="card slick bg-light" style={{boxShadow: 'none'}}>
              <div className="flex jcsb aic">
                <h3 className="card-title">{el.company}</h3>
                <img src={icon} alt="TrustPilot Icon" width={32} height={32} className="icon" />
              </div>
              <p className="card-sub c-theme m-b-24">{el.position}</p>
              <div>
                <p className="card-text">{el.review}</p>
              </div>
              <div className="card-footer">
                <img src={five} alt="5 Star" width={127} height={24} className="icon five" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export { Reviews }