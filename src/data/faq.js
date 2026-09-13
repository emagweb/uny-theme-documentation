const faq = [
  {
    id: 1,
    question: "Do I have to use the builder?",
    answer: "No. The theme works on its own with the standard WordPress editor - posts, pages, archives and WooCommerce are all styled. The builder adds the section library on top; if you deactivate it, pages fall back to their normal editor content and nothing breaks."
  },
  {
    id: 2,
    question: "Will my pages survive a theme switch?",
    answer: "The builder is an independent plugin with its own prefix and stylesheet, so the sections keep rendering under another theme. What changes is the surrounding chrome - the other theme's header, footer and typography will apply."
  },
  {
    id: 3,
    question: "Can I edit a section after inserting it?",
    answer: "Yes, that is the normal way to work. Text is edited directly in the preview, images open the WordPress media library, and the toolbar above each section moves it up or down, duplicates it or deletes it."
  },
  {
    id: 4,
    question: "Where do form submissions go?",
    answer: "Into the WordPress admin. Requests from contact and request forms appear under Form Entries, and newsletter sign-ups under Subscribers. Nothing is sent to a third-party service, so the data stays on your own installation."
  },
  {
    id: 5,
    question: "Does Auto Layout overwrite my page?",
    answer: "It only offers itself on a page that has no sections yet, and it asks first. The result is an ordinary set of sections - reorder, replace or delete any of them exactly as if you had inserted them by hand."
  },
  {
    id: 6,
    question: "Do the commerce sections need WooCommerce?",
    answer: "Yes. The twenty commerce sections read real products, prices and add-to-cart buttons from WooCommerce, so the plugin has to be active for them to have anything to show. The remaining 194 sections work without it."
  },
  {
    id: 7,
    question: "How do I get the demo content?",
    answer: "Install the recommended plugins, then run the importer described in the Theme guide. It brings in the demo pages, posts, menus and images so you can take the live demo apart and rebuild it into your own site."
  },
  {
    id: 8,
    question: "What are the server requirements?",
    answer: "WordPress 6.9 or newer and PHP 8.1 or newer, tested up to WordPress 7.1. Any host that runs a current WordPress will run the theme; no special extensions are needed. The AI assistant is the one exception: it uses WordPress application passwords, and those are only issued on a site served over HTTPS."
  },
  {
    id: 9,
    question: "Can a blog post be built from sections?",
    answer: "Yes. The builder panel and its switch are on posts as well as pages. Turn it on and the single-post block is put in place already wired to that article - title, date, cover and body - so you start from a finished layout and add blocks around it. The post keeps its category, tags, featured image and comments, because those stay in the editor."
  },
  {
    id: 10,
    question: "Do I need the AI assistant?",
    answer: "No. It is off until you switch it on, and with it off nothing is registered at all. It exists for people who would rather describe a page in a chat than assemble it by hand; everything it does can be done in the builder, and everything it makes is ordinary sections you can edit afterwards."
  },
  {
    id: 11,
    question: "Does the AI assistant send my content anywhere?",
    answer: "The plugin itself sends nothing. It publishes an endpoint on your own site and waits to be asked. The chat you connect is the one making the requests, so the data goes wherever that chat runs - which is your choice of tool, not ours. Nothing leaves your site until you connect a client and grant it a password."
  },
  {
    id: 12,
    question: "Can the assistant break a page I already built?",
    answer: "It cannot write at all unless you allow the writing tools and grant the capability, and even then every write takes a snapshot first, so any change made through it can be reverted. Pages stay drafts unless publishing is asked for explicitly."
  }
]

export default faq
