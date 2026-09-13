import { useState, useEffect } from "react"
import Slider from "react-slick"
import groups from '../../data/groups'
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
    <section id="groups" className="p-y-100">
      <div className="container tc">
        <p className="upp c-theme fw-500 fz-14 p-b-16">The library</p>
        <h2 className='title-intro fw-700 p-b-24'>214 sections in 15 groups</h2>
        <p className="fz-20 c-grey w-60 ma wide m-b-40">Every block is shown as a thumbnail in the builder, so you choose by looking.</p>
      </div>
      <Slider {...currentSettings}>
        {groups.map((el) => (
          <div key={el.id}>
            <div className="card slick bg-light tc" style={{boxShadow: 'none'}}>
              <p className="upp c-theme fw-500 fz-14 p-b-8">{el.count} sections</p>
              <h3 className="title-part fw-700">{el.name}</h3>
              <div>
                <p className="card-text c-grey m-t-16">{el.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}
export { Reviews }
