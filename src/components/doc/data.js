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

const categoryIconNames = {
  "Animals": 'IconPaw',
  "Arrows": 'IconArrowNarrowRight',
  "Badges": 'IconBadge4k',
  "Brand": 'IconBrandApple',
  "Buildings": 'IconBuildingCommunity',
  "Charts": 'IconChartBar',
  "Communication": 'IconMessageCircle',
  "Computers": 'IconNetwork',
  "Currencies": 'IconCurrencyDollar',
  "Database": 'IconDatabase',
  "Design": 'IconBrush',
  "Development": 'IconBug',
  "Devices": 'IconDeviceImac',
  "Document": 'IconFileText',
  "E-commerce": 'IconShoppingCart',
  "Electrical": 'IconCircuitBulb',
  "Extensions": 'IconJpg',
  "Food": 'IconCarrot',
  "Games": 'IconPlayCard',
  "Gender": 'IconGenderMale',
  "Gestures": 'IconHandFinger',
  "Health": 'IconHandSanitizer',
  "Laundry": 'IconIroning1',
  "Letters": 'IconCircleLetterA',
  "Logic": 'IconLogicAnd',
  "Map": 'IconMap',
  "Math": 'IconSquareRoot2',
  "Media": 'IconMusic',
  "Mood": 'IconMoodWink2',
  "Nature": 'IconLeaf',
  "Numbers": 'IconCircleNumber1',
  "Photography": 'IconLivePhoto',
  "Shapes": 'IconCircleCheck',
  "Sport": 'IconBallBasketball',
  "Symbols": 'IconRecycle',
  "System": 'IconAdjustments',
  "Text": 'IconBlockquote',
  "Vehicles": 'IconCar',
  "Version control": 'IconGitMerge',
  "Weather": 'IconHaze',
  "Zodiac": 'IconZodiacSagittarius',
  "Filled": 'IconTrophyFilled',
  "Other": 'IconTagOff',
}

export {textMenus, iconMenus, features, categoryIconNames}
