export const metadata = {
  title: 'Home - Ace High Club',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
        <Hero />
        <Clients />
        <Features />
        <Features02 />
        <Features03 />
        <TestimonialsCarousel />
        <Features04 />
        <Cta />
    </>
  )
}
