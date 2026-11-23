import autochekImage from './images/autochek.png'
import boboImage from './images/bobo.png'
import playflamesImage from './images/layman-playflames.jpg'
import playflamesImageOne from './images/layman-playflames1.jpg'
import playflamesImageTwo from './images/layman-playflames-2.jpg'
import playflamesImageThree from './images/layman-playflames-3.jpg'
import playflamesImageFour from './images/layman-playflames-4.jpg'
import playflamesImageFive from './images/layman-playflames-5.jpg'
import floattLogo from './images/Floatt-0.jpg'
import floattLogoInverse from './images/Floatt-1.jpg'
import floattStationery from './images/Floatt-2.jpg'
import floattShirt from './images/Floatt-3.jpg'
import floattMug from './images/Floatt-4.jpg'
import floattPhone from './images/Floatt-5.jpg'
import floattGuidelineLogoMark from './images/Floatt/floatt-1.jpg'
import floattGuidelineLogo from './images/Floatt/floatt-2.jpg'
import floattColorStyles from './images/Floatt/floatt-3.jpg'
import floattTypography from './images/Floatt/floatt-4.jpg'
import floattPalette from './images/Floatt/floatt-5.jpg'
import floattStyle from './images/Floatt/floatt-6.jpg'
import stGenevieveLogo from './images/st genevive 1.png'
import stGenevieveScreens from './images/st genevive 2.jpg'
import kizaziMotoCover from './images/Kizazi_Moto_Generation_Fire_logo.webp'

export type Project = {
  number: string
  title: string
  discipline: string
  description: string
  period?: string
  image: string
  imageFit?: 'cover' | 'contain'
  imageAlt: string
  layout: 'wide' | 'tall' | 'compact'
  detail: string
  sections?: {
    title: string
    text?: string
    paragraphs?: string[]
    items?: { label: string; description: string }[]
  }[]
  story?: string[]
  statement?: string
  highlight?: { statement: string; context: string }
  videos?: { label: string; id: string }[]
  gallery?: { src: string; alt: string }[]
  galleryLayout?: 'square' | 'grid'
  fullWidthGallery?: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    number: '01', title: 'Bobo TVC', discipline: 'Video & Creative Production',
    description: 'Commercial storytelling, creative direction and advertising production.', layout: 'wide',
    image: boboImage, imageAlt: 'Bobo TVC frame featuring the Bobo brand',
    detail: 'Commercial storytelling, creative direction and advertising production.',
    videos: [
      { label: 'Bobo · 2026 / 01', id: 'tWUx6LBSwFg' },
      { label: 'Bobo · 2026 / 02', id: 'dI-DQDLlrS0' },
      { label: 'Bobo · 2025', id: '_FF2baPQqfs' },
    ],
  },
  {
    number: '02', title: 'FloattHR', discipline: 'Brand Identity',
    description: 'Developing a visual identity and brand language for an HR technology product.', layout: 'tall',
    image: floattPhone, imageAlt: 'FloattHR logo mark displayed on a phone',
    detail: 'Developing a visual identity and brand language for an HR technology product.',
    sections: [
      {
        title: 'The logomark',
        text: 'Each element of the logo was intentionally designed to tell a story. The wavy lines represent the tides and movements that define human and organizational dynamics while the two dots above symbolize people.',
      },
      {
        title: 'The logo',
        text: 'The FloattHR logo embodies the brand’s core idea — staying balanced and resilient above life’s ever-shifting tides. The brand logotype is made out of font Golos Text.',
      },
    ],
    gallery: [
      { src: floattLogo, alt: 'FloattHR primary logo on a light background' },
      { src: floattLogoInverse, alt: 'FloattHR reversed logo on a blue background' },
      { src: floattStationery, alt: 'FloattHR logo on stationery' },
      { src: floattShirt, alt: 'FloattHR logo applied to a T-shirt' },
      { src: floattMug, alt: 'FloattHR logo applied to a mug' },
      { src: floattPhone, alt: 'FloattHR logo displayed on a phone' },
    ],
    galleryLayout: 'square',
    fullWidthGallery: [
      { src: floattGuidelineLogoMark, alt: 'FloattHR logo and logomark guideline' },
      { src: floattGuidelineLogo, alt: 'FloattHR logo construction guidelines' },
      { src: floattColorStyles, alt: 'FloattHR logo color adaptations' },
      { src: floattTypography, alt: 'FloattHR typography guidelines' },
      { src: floattPalette, alt: 'FloattHR brand color palette' },
      { src: floattStyle, alt: 'FloattHR brand motif and visual style guidelines' },
    ],
  },
  {
    number: '03', title: 'Autochek', discipline: 'Video & Content Production',
    description: 'Commercial video, visual storytelling and marketing content.', layout: 'compact',
    image: autochekImage, imageAlt: 'Frame from an Autochek commercial production',
    detail: 'Commercial video, visual storytelling and marketing content.',
    videos: [{ label: 'Autochek · 2024', id: 'P57Pri5OkrI' }],
  },
  {
    number: '04', title: 'St. Genevieve Staff App', discipline: 'Product Design & Development',
    description: 'Bringing visibility and accountability to field operations.', period: '2023–2025', layout: 'wide',
    image: stGenevieveScreens, imageAlt: 'St. Genevieve website and staff timesheet app screens',
    detail: 'Bringing visibility and accountability to field operations.',
    gallery: [
      { src: stGenevieveLogo, alt: 'St. Genevieve Healthcare Services logo' },
    ],
    sections: [
      {
        title: 'The challenge',
        paragraphs: [
          'St. Genevieve Healthcare Services (STGHCS), a healthcare provider in Louisiana, faced an operational challenge common to organisations managing a distributed care workforce.',
          'Direct Support Workers (DSWs) were required to report to remote service locations to provide care and support. However, workforce administration still relied heavily on paper-based timesheets, leaving work-hour reporting largely at the discretion of individual workers.',
          'Verifying hours, tracking service delivery and identifying discrepancies became difficult. Beyond timesheets, organising, supervising and managing a growing pool of field workers was an increasingly demanding administrative task.',
          'The organisation needed more than a digital timesheet. It needed a better way to coordinate its workforce and gain visibility into service delivery.',
        ],
      },
      {
        title: 'The solution',
        paragraphs: [
          'We developed the St. Genevieve Staff App, a workforce management platform designed to connect the different operational roles within STGHCS.',
          'The platform brought managers, supervisors, support workers and billing personnel into a shared digital environment, introducing real-time monitoring and a more structured approach to workforce coordination and service tracking.',
          'Rather than treating each department as an isolated operation, the app was designed to support the entire service-delivery workflow, giving the organisation a clearer picture of what was happening across its workforce and helping identify gaps as they emerged.',
        ],
      },
      {
        title: 'Four primary user groups',
        items: [
          { label: 'Managers', description: 'Organisational oversight and workforce visibility.' },
          { label: 'Supervisors', description: 'Monitoring and coordinating field operations.' },
          { label: 'Support Workers', description: 'Access to the tools needed to carry out and document their work.' },
          { label: 'Billing Staff', description: 'Supporting the administrative and billing side of service delivery.' },
        ],
      },
      {
        title: 'The objective',
        text: 'To move workforce management beyond paper-based processes and create a more transparent, coordinated and trackable approach to delivering care.',
      },
      {
        title: 'My contribution',
        text: 'Research, design and frontend development.',
      },
    ],
  },
  {
    number: '05', title: 'The C.A.G.E.', discipline: 'Experiential Design & Development',
    description: 'An interactive experience built around people, play and connection.', layout: 'compact',
    image: playflamesImage, imageAlt: 'The C.A.G.E. interactive gaming experience',
    detail: 'An interactive experience built around people, play and connection.',
    story: [
      'The C.A.G.E. started as an experiment around a simple but increasingly difficult question: how do we create experiences that make people actively participate, rather than passively consume?',
      "Social media posts, traditional advertising and digital marketing have become increasingly predictable. The constant bombardment of content has diluted the novelty that once made these channels exciting. Getting noticed is harder, and holding people's attention is harder still.",
      'I began exploring ways to move beyond the familiar formats of communication and marketing — creating opportunities for people to interact, compete, think, laugh and connect.',
    ],
    statement: "Don't just capture attention. Give people a reason to participate.",
    highlight: {
      statement: 'People remember experiences more than they do display ads.',
      context: 'We heard that firsthand in conversations across the locations we visited.',
    },
    gallery: [
      { src: playflamesImageOne, alt: 'Player using an interactive game screen at The C.A.G.E.' },
      { src: playflamesImageTwo, alt: 'Players competing in The C.A.G.E.' },
      { src: playflamesImageThree, alt: 'Player interacting with a game at The C.A.G.E.' },
      { src: playflamesImageFour, alt: 'Players taking part in a game at The C.A.G.E.' },
      { src: playflamesImageFive, alt: 'Player using a live sketch game at The C.A.G.E.' },
    ],
  },
  {
    number: '06', title: 'Kizazi Moto', discipline: 'Sound & Ambience Design',
    description: 'Sound and ambience design for Kizazi Moto.', layout: 'wide',
    image: kizaziMotoCover, imageFit: 'contain', imageAlt: 'Kizazi Moto: Generation Fire cover art',
    detail: 'Sound and ambience design for Kizazi Moto.',
    videos: [{ label: 'Kizazi Moto · Sound & ambience', id: 'WpypOiIB2jc' }],
  },
]

export const capabilities = [
  { name: 'Brand & visual identity', description: 'I shape clear, distinctive brand worlds—from the first strategic thought to the smallest visual detail.' },
  { name: 'Product design', description: 'I make digital products easier to understand and more rewarding to use, from first flow to final prototype.' },
  { name: 'Frontend development', description: 'I bring interfaces to life in the browser, building responsive, considered experiences with modern tools.' },
  { name: 'Creative technology', description: 'I explore what happens when interaction, code and motion become part of the story.' },
  { name: 'Video & production', description: 'I develop visual stories and guide them from a compelling idea through to the finished frame.' },
]

export const experience: { company: string; role: string; period: string; location: string; note?: string }[] = [
  { company: '140Pro', role: 'Head of Design', period: '2023–Present', location: 'Lagos, Nigeria' },
  { company: 'St. Genevieve', role: 'Research, Design & Frontend Development', period: '2023–2025', location: 'Louisiana, USA' },
]
