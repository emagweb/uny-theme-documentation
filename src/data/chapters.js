import shotCustomizer from '../assets/img/docs/doc-05-customizer.jpg'
import shotBuilder from '../assets/img/docs/doc-11-builder-interface.jpg'
import shotAutolayout from '../assets/img/docs/doc-15-autolayout-modal.jpg'
import shotAssistant from '../assets/img/docs/doc-25-ai-settings.jpg'
import shotWidgets from '../assets/img/docs/doc-18-widgets.jpg'
import shotSettings from '../assets/img/docs/doc-28-builder-settings.jpg'

const chapters = [
  {
    id: 1,
    name: 'Theme',
    job: 'Part 1',
    text: 'Start here. Uploading and activating the theme, installing the recommended plugins, importing the demo content, choosing the front page and menus, and setting the palette, typography, header and footer in the WordPress Customizer.',
    pic: shotCustomizer,
    link: '/theme'
  },
  {
    id: 2,
    name: 'Builder',
    job: 'Part 2',
    text: 'The section library and the editing model: inserting a block, changing its text in place, swapping images through the media library, reordering with the section toolbar, what each of the fifteen groups is for, how a blog post can be built from sections, and where form entries end up.',
    pic: shotBuilder,
    link: '/builder'
  },
  {
    id: 3,
    name: 'Auto Layout',
    job: 'Part 3',
    text: 'Describe the page in a line and let the builder compose a matching sequence of sections. Covers the three recognised page types, what the dialog asks for, and how to reshape the result afterwards.',
    pic: shotAutolayout,
    link: '/builder#autolayout'
  },
  {
    id: 4,
    name: 'AI Assistant',
    job: 'Part 4',
    text: 'Optional, and off until you switch it on. Connect a chat assistant to the builder so it can draft and edit pages for you: what it may do, how permissions are split between reading and writing, and why every edit it makes can be undone.',
    pic: shotAssistant,
    link: '/assistant'
  },
  {
    id: 5,
    name: 'Reference',
    job: 'Part 5',
    text: 'The supporting material: the Random Posts widget from the companion plugin, server requirements, how the three packages fit together, what to check when something looks wrong, the bundled third-party libraries and the questions that come up most often. Widget areas and WooCommerce are in the Theme guide, form entries in the Builder guide.',
    pic: shotWidgets,
    link: '/reference'
  },
  {
    id: 6,
    name: 'Settings',
    job: 'Part 6',
    text: 'The builder admin screen, where colours, fonts and background shades are set once for every section: the light or dark palette the sections start from, twelve colour roles with your own hex values, the two alternative background shades, twenty-one Google fonts or the system fonts of the visitor, and how the logo appears in navigation and footer blocks. Leave a field empty and it inherits from the theme, so an accent changed in the Customizer moves the sections with it.',
    pic: shotSettings,
    link: '/builder#settings'
  }
]

export default chapters
