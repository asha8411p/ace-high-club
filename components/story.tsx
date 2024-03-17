import Image from 'next/image'
import Team from '@/public/images/team.jpg'

export default function Story() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Our story (so far)</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                  We united over a shared passion for creating a platform that addresses our own challenges in finding the next great poker match. Our vision extends beyond personal gain; we aim to empower everyone in the poker ecosystem—from enthusiasts and professionals to clubs and investors.
                  </p>
                  <p>
                  Ace High Club is a digital platform that bridges the gap between people and the poker experiences that intrigue them. <strong className="text-slate-50 font-medium">We believe in leveraging technology to elevate the poker community,</strong>,  ensuring the industry evolves positively and inclusively.
                  </p>
                  <p>
                  Our platform invites users to explore the intricacies of poker, celebrate impactful moments, and engage in meaningful discussions about compelling concepts. We strive to foster a space for dialogue, <strong className="text-slate-50 font-medium"> aggregate knowledge</strong>, and make it more digestible and accessible.
                  </p>
                  <p>
                  Contrary to common misconceptions, our product isn't just about poker; it's a strategic tool designed to professionalize and streamline the poker landscape in Sydney. <a className="text-purple-500 font-medium hover:underline" href="#0"> Ace High Club </a> serves as a centralized hub, offering detailed insights into local poker clubs and events, thereby fostering a more vibrant and interconnected poker community.
                  </p>
                  <p>
                  We thrive on the challenge of bringing a scattered market together, making it more accessible for players and beneficial for poker clubs. Our journey involves developing an intuitive online platform, offering personalized club and tournament recommendations, and designing a rewards system to incentivize participation. The project aims to cater to a diverse user base, with plans for future international expansion and features that promote responsible gaming. We're excited about the possibilities and opportunities to innovate in this traditional sector, driven by our passion for poker and technology.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}