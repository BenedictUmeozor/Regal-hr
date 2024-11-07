interface Feature {
  iconPath: string
  title: string
  description: string
  hoverPath: string
}

interface Recommends {
  avatarPath: string
  firstText: string
  secondText: string
}

export const NAVLINKS = [
  'What We Offer',
  'Why Regal HR',
  'Resources',
  'About us',
]

export const COMPANYLINKS = ['About Us', 'Careers', 'Blog', 'Press']
export const PRODUCTLINKS = ['Features', 'Pricing', 'Integration', 'FAQs']
export const RESOURCELINKS = [
  'Help Center',
  'Documentation',
  'Webinars',
  'Case Studies',
]
export const CONTACTLINKS = ['Contact Us', 'Support', 'Sales']
export const LEGALLINKS = [
  'Privacy Policy',
  'Terms of Service',
  'Cookie Policy',
]

export const FEATURES: Feature[] = [
  {
    iconPath: '/onboard.svg',
    title: 'Recruitment and Onboarding',
    description:
      'Simplify your hiring process with our seamless recruitment tools. Automate onboarding to make new hires feel welcome from day one.',
    hoverPath: '/onboard-white.svg',
  },
  {
    iconPath: '/performance.svg',
    title: 'Performance Management',
    description:
      'Track employee performance effortlessly. Set goals, provide feedback, and conduct evaluations all in one place.',
    hoverPath: '/performance-white.svg',
  },
  {
    iconPath: '/group.svg',
    title: 'Compliance and Reporting',
    description:
      'Stay compliant with labor laws and regulations. Generate comprehensive reports with minimal effort.',
    hoverPath: '/group-white.svg',
  },
  {
    iconPath: '/analytics.svg',
    title: 'HR Analytics and Reporting',
    description:
      'Empower your team and build a thriving company culture with our employee engagement features, such as recognition programs and pulse surveys.',
    hoverPath: '/analytics-white.svg',
  },
  {
    iconPath: '/attendance.svg',
    title: 'Time and Attendance',
    description:
      'Manage time and attendance with ease. Our system integrates with your existing workflows to ensure accurate tracking and reporting.',
    hoverPath: '/attendance-white.svg',
  },
]

export const RECOMMENDATIONS: Recommends[] = [
  {
    avatarPath: '/avatar1.png',
    firstText:
      'Since we started using this RegalHR, our recruitment process has become incredibly efficient. We’ve saved countless hours and improved our hiring quality',
    secondText: 'Michael P. CEO of Innovate Inc.',
  },
  {
    avatarPath: '/avatar2.png',
    firstText:
      'Our employees love the self-service features. It’s made their lives easier and freed up our HR team to focus on strategic initiatives.',
    secondText: 'Emily T., Director of Operations at Growth Solutions',
  },
  {
    avatarPath: '/avatar3.png',
    firstText:
      'The performance management tools are fantastic. We can track goals and provide feedback seamlessly. It’s improved our overall productivity',
    secondText: 'John D., Compliance Officer at Secure Finance',
  },
  {
    avatarPath: '/avatar4.png',
    firstText:
      'Compliance and reporting used to be a headache. Now, it’s a breeze. We’re always audit-ready thanks to this amazing too',
    secondText: 'Sarah L., HR Manager at TechCorp',
  },
]
