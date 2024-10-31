interface Feature {
  iconPath: string
  title: string
  description: string
}

export const NAVLINKS = [
  'What We Offer',
  'Why Regal HR',
  'Resources',
  'About us',
]

export const FEATURES: Feature[] = [
  {
    iconPath: '/onboard.svg',
    title: 'Recruitment and Onboarding',
    description:
      'Simplify your hiring process with our seamless recruitment tools. Automate onboarding to make new hires feel welcome from day one.',
  },
  {
    iconPath: '/performance.svg',
    title: 'Performance Management',
    description:
      'Track employee performance effortlessly. Set goals, provide feedback, and conduct evaluations all in one place.',
  },
  {
    iconPath: '/group.svg',
    title: 'Compliance and Reporting',
    description:
      'Stay compliant with labor laws and regulations. Generate comprehensive reports with minimal effort.',
  },
  {
    iconPath: '/analytics.svg',
    title: 'HR Analytics and Reporting',
    description:
      'Empower your team and build a thriving company culture with our employee engagement features, such as recognition programs and pulse surveys.',
  },
  {
    iconPath: '/attendance.svg',
    title: 'Time and Attendance',
    description:
      'Manage time and attendance with ease. Our system integrates with your existing workflows to ensure accurate tracking and reporting.',
  },
]
