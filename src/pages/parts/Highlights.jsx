/**
 * The three key features, on the home page.
 *
 * These lines used to sit inside the hero, which left the hero carrying a heading,
 * three claims, a paragraph and two buttons at once. They read better as a band of
 * their own: one feature per column, an icon above it, nothing else competing.
 *
 * Icon sizes and the accent colour follow About.jsx so the two icon rows match.
 */
import { PiStackLight, PiMagicWandLight, PiStorefrontLight } from "react-icons/pi"
const accent = '#E91E8C'
const items = [
  { id: 1, Icon: PiStackLight, text: '214 Ready Sections & Auto Layout' },
  { id: 2, Icon: PiMagicWandLight, text: 'Build Manually, Generate or Use AI' },
  { id: 3, Icon: PiStorefrontLight, text: 'WooCommerce Support + Customizer' }
]
const Highlights = () => {
  return (
    <section id="highlights" className="p-y-100 bg-medium">
      <div className="container tc">
        <div className="row">
          {items.map(({ id, Icon, text }) => (
            <div className="col-lg-4 m-y-24" key={id}>
              <Icon size={64} color={accent} />
              <h3 className="title-part fw-700 m-t-16">{text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export { Highlights }
