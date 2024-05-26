import { allUpdates } from 'contentlayer/generated'
import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import PostItem from './post-item'
import Cta from '@/components/cta-03'

export default function Changelog() {

  // Sort posts by date
  allUpdates.sort((a, b) => {
    return (new Date(a.publishedAt) > new Date(b.publishedAt)) ? -1 : 1
  })

  return (
      <section className="relative">
        {/* Radial gradient */}
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
        </div>

        {/* Particles animation */}
        <div className="absolute inset-0 h-96 -z-10" aria-hidden="true">
          <canvas data-particle-animation data-particle-quantity="15"></canvas>
        </div>

        {/* Illustration */}
        <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
          <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration"/>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="text-center pb-12 md:pb-20">
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Master the Art of Poker with Ace High Club</h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-400">Discover the secrets of the game with our comprehensive tutorials and guides, designed to take your skills to the next level.</p>
              </div>
            </div>

            {/* Explanation of Poker */}
            <div className="max-w-3xl mx-auto">
              <div className="pb-8">
                <h2 className="text-2xl font-semibold text-slate-200 mb-4">How Poker Works</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Poker is a popular card game that combines strategy, skill, and chance. It is played in various forms around the world, with each version having its own set of rules and nuances. However, the basic premise of the game remains the same: players wager money or chips on the strength of their hand, based on the rankings of different card combinations.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mt-4">
                  The game typically involves multiple rounds of betting, where players can either call (match the current bet), raise (increase the bet), or fold (withdraw from the hand). The objective of poker is to win chips or money by either having the best hand at showdown or by convincing other players to fold their hands.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mt-4">
                  Poker hands are ranked based on the probability of achieving them. The highest-ranking hand is usually a royal flush, followed by straight flush, four of a kind, full house, flush, straight, three of a kind, two pair, one pair, and high card. Understanding the ranking of hands is essential for making strategic decisions during gameplay.
                </p>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="max-w-3xl mx-auto">
              <div className="pb-8">
                <h2 className="text-2xl font-semibold text-slate-200 mb-4">Additional Resources</h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  If you're looking to improve your poker skills further, here are some additional resources you can refer to:
                </p>
                <ul className="list-disc text-lg text-slate-400 pl-6 mt-4">
                  <li><a href="https://www.pokerstrategy.com/" className="text-purple-500 hover:underline">PokerStrategy.com</a> - Offers strategy articles, videos, and forums for poker players of all levels.</li>
                  <li><a href="https://www.cardplayer.com/" className="text-purple-500 hover:underline">CardPlayer.com</a> - Provides news, strategy articles, and tournament coverage for both online and live poker players.</li>
                  <li><a href="https://www.twoplustwo.com/" className="text-purple-500 hover:underline">TwoPlusTwo.com</a> - Features forums where players can discuss strategy, hand analysis, and industry news.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );

}