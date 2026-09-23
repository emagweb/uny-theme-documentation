import { PiStackLight, PiCursorClickLight, PiMagicWandLight, PiPlugsConnectedLight, PiSlidersLight, PiStorefrontLight, PiDeviceMobileLight, PiLightningLight, PiDownloadSimpleLight, PiChatCircleTextLight, PiArticleLight, PiTrayLight } from "react-icons/pi"

const features = [
  {
    id: 1,
    title: "214 ready-made sections",
    text: "Fifteen groups cover what a marketing site needs: headers, navigation, features, galleries, pricing, tables, testimonials, teams, blogs, products, forms and footers. You pick a finished block and change the words in it.",
    icon: PiStackLight
  },
  {
    id: 2,
    title: "Edit right on the page",
    text: "Text is edited where it will be shown, at the size it will have - so you see at once whether your headline fits on one line. Images open the standard WordPress media library.",
    icon: PiCursorClickLight
  },
  {
    id: 3,
    title: "Auto Layout builds the skeleton",
    text: "Describe the page in one line and the builder composes a matching sequence of sections. A starting point rather than a cage: every block can still be replaced, reordered or removed.",
    icon: PiMagicWandLight
  },
  {
    id: 4,
    title: "Or let a chat assistant build it",
    text: "Connect an AI chat to the builder and describe the page instead of assembling it. It picks from the same 214 sections and saves a draft you can edit by hand. Optional, off until you switch it on, and every edit it makes can be undone.",
    icon: PiChatCircleTextLight
  },
  {
    id: 5,
    title: "Posts, not only pages",
    text: "The same switch is on a blog post. Write the article in the editor and the theme lays it out, or build it from sections - the builder starts you off with the single-post block already wired to that article, and you add a hero, a quote or a gallery around it.",
    icon: PiArticleLight
  },
  {
    id: 6,
    title: "Content fills itself",
    text: "Navigation reads your WordPress menus. Blog sections pull real posts with covers. Commerce sections list actual products with prices. Maintain it once in WordPress and the sections follow.",
    icon: PiPlugsConnectedLight
  },
  {
    id: 7,
    title: "One Customizer, whole site",
    text: "Palette, typography, header, footer and blog options sit in the native Customizer with live preview. Switch between the light and dark scheme with one radio button.",
    icon: PiSlidersLight
  },
  {
    id: 8,
    title: "WooCommerce out of the box",
    text: "Shop, category, product, cart and checkout are styled to match, so a store does not look bolted on. Twenty commerce sections put real products on any landing page.",
    icon: PiStorefrontLight
  },
  {
    id: 9,
    title: "Forms keep their own entries",
    text: "Contact and request forms are part of the sections, and what people send lands in your WordPress admin under Form Entries, newsletter sign-ups under Subscribers. Both lists export to CSV, and nothing is passed to a third-party service.",
    icon: PiTrayLight
  },
  {
    id: 10,
    title: "Responsive by construction",
    text: "Sections are laid out on a percentage-based grid and checked on desktop, tablet and phone. Widths scale rather than snap, so blocks keep their proportions between breakpoints.",
    icon: PiDeviceMobileLight
  },
  {
    id: 11,
    title: "Demo content included",
    text: "Two importable files, one for the light demo and one for the dark. Bring in the pages, posts, menus and images, and you have the live demo on your own installation - ready to take apart block by block.",
    icon: PiDownloadSimpleLight
  },
  {
    id: 12,
    title: "Not welded to the theme",
    text: "The builder is a separate plugin with its own prefix and styles. It survives a theme switch, and the theme survives its deactivation - pages fall back to normal editor content.",
    icon: PiLightningLight
  }
]

export default features
