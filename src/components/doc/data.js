import {faGithub, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {IconAdjustmentsCheck, IconBook, IconHorseToy, IconSignRight} from "@tabler/icons-vue";

const textMenus = [
  {
    text: 'UI Kit',
    url: '/ui-kit',
  },
  {
    text: 'Blocks',
    url: '/blocks',
  }, {
    text: 'Templates',
    url: '/templates',
  },
  {
    text: 'Base',
    url: '/base',
  },
  {
    text: 'Utility',
    url: '/utility',
  },
  {
    text: 'Roadmap',
    url: '/roadmap',
  }
]

const iconMenus = [
  {
    icon: faGithub,
    url: 'http://github.com/x-tropy/mvs'
  },
  {
    icon: faXTwitter,
    url: 'http://x.com/extropy_ui'
  }
]

const features = [
  {
    icon: IconSignRight, title: 'Opinionated by Design',
    description: 'Every design choice is intentional & justified. Each component prioritizes simplicity and avoids unnecessary complexity. Stick with Tailwind & Vue 3—No bloat, no overengineering, just clean, minimal, and practical features.'
  },
  {
    icon: IconHorseToy, title: 'Easy-to-use',
    description: 'mvs UI includes only the core essentials. Components are designed as intuitive building blocks. Developers can assemble them like playing with Legos. Solve real problems, not fiddling with UI details.'
  },
  {
    icon: IconAdjustmentsCheck, title: 'Fully Customizable',
    description: 'Every component is designed for "copy & go" usability. Without deep abstractions, the codebase is flat, clean, and easy to modify. Developers can adapt components to their unique needs without feeling restricted.'
  },
  {
    icon: IconBook, title: 'Educational',
    description: 'mvs UI is more than just a tool, it’s also a learning resource. The straightforward code structure makes it easy to understand how things work, empowering developers to grow their skills while building projects.'
  },
]

export {textMenus, iconMenus, features}
