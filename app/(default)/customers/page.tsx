import PostDate from "@/components/post-date";

export const metadata = {
  title: 'Services- Ace High Club',
  description: 'Page description',
}

import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import Particles from '@/components/particles'
import CustomersList from './customers-list'
import {UpdateMdx} from "@/components/mdx/update-mdx";

export default function Customers() {
  return (
    <>
      <section className="relative">

        {/* Radial gradient */}
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
        </div>

        {/* Particles animation */}
        <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

        {/* Illustration */}
        <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
          <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">

            {/* Section header */}
            <div className="text-center pb-12 md:pb-20">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Premium Poker Services</div>
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Learn. Play. Enjoy!</h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-400">Ace High Club offers an extensive suite of resources designed to provide a healthy and enjoyable playing experience.</p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] -z-10 overflow-hidden after:absolute after:h-4 after:top-0 after:-translate-y-full after:left-0 after:w-0.5 after:bg-[linear-gradient(180deg,_transparent,_theme(colors.purple.500/.65)_25%,_theme(colors.purple.200)_50%,_theme(colors.purple.500/.65)_75%,_transparent)] after:animate-shine" aria-hidden="true"></div>
                <article className="pt-12 first-of-type:pt-0 group">
                  <div className="md:flex">
                    <div className="w-48 shrink-0">
                      <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                        <span className="ml-[1.625rem] md:ml-5">6th May 2024</span>
                      </time>
                    </div>
                    <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
                      <header>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">Want to host your event details with us?</h2>
                      </header>
                      <figure className="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        {/*<Image className="w-full rounded-[inherit]" src={props.image} width={574} height={326} alt={props.title} />*/}
                      </figure>
                      <div className="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
                        We are a growing platform that aims to offer accessible and friendly poker events across Sydney.
                        <br/><br/>
                        If you wish to host your event details on our site, you can go through our screening process to register as an Admin, and once
                        verified, your account with us will be successfully registered and you can start to display your events online.
                        <br/><br/>
                        As for the prices, they will depend on the level of marketing agreed upon registering with us. This can always be negotiated with our head office.
                        <br/><br/>
                        <br/><br/>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <CustomersList />

          </div>
        </div>

      </section>
    </>
  )
}
