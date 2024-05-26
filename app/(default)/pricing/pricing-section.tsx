import Image from 'next/image'
import Particles from '@/components/particles'
import Illustration from '@/public/images/page-illustration.svg'
import Pricing from '@/components/pricing'
import Leaderboard from "@/components/Leaderboard";

export default function PricingSection() {
    const players = [
        { name: 'James Johnson', playingTime: '2 years', winnings: 5000, averageWinRate: 65, preferredGame: 'Texas Hold\'em' },
        { name: 'Steve Nocho', playingTime: '3 years', winnings: 7000, averageWinRate: 72, preferredGame: 'Omaha' },
        // Add more players as needed
    ];


  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10"  quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-24">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Climb the Leaderboard</div>
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Your Name in Lights with Ace High Club</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">Ace High Club empowers you to ascend the ranks, tracking your victories and celebrating your rise to poker prominence.</p>
            </div>
          </div>
          {/*<Pricing />*/}
            <Leaderboard players={players}/>
        </div>
      </div>

    </section>
  )
}
