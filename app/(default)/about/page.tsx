export const metadata = {
  title: 'About - Ace High Club',
  description: 'Page description',
}

import Hero from '@/components/hero-about'
import Story from '@/components/story'
import Team from '@/components/team'
import Testimonials from '@/components/testimonials-02'
import Cta from '@/components/cta-02'

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Team />
      <Testimonials />
      <Cta />
    </>
  )
}
