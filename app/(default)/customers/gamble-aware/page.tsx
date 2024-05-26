export const metadata = {
    title: 'Services - Ace High Club',
    description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import CustomerBadge from '@/public/images/customer-badge.svg'
import Particles from '@/components/particles'
import RelatedPosts from "@/app/(default)/customers/single-post/related-posts";

export default function CustomerSingle() {
    const WEBSITE_URL = "https://www.liquorandgaming.nsw.gov.au/community-and-stakeholders/community-support/help-with-problem-gambling";

    return (
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
                <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                    <div className="md:flex md:justify-between">

                        {/* Page content */}
                        <div className="md:grow pb-12 md:pb-20">
                            <div className="max-w-3xl">

                                <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                                    <div className="mb-4">
                                        <Link className="inline-flex text-sm font-medium text-purple-500 group" href="/customers"><span className="tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&lt;-</span> Go Back</Link>
                                    </div>

                                    <header>
                                        <h1 className="h2 inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Help for People Experiencing Gambling Harm</h1>
                                        <div className="text-sm flex items-center space-x-4 mb-8">
                                            <img className="rounded-full" src="../images/customer-avatar-03.jpg" width="32" height="32" alt="Customer Avatar 03" />
                                            <div>
                                                <div className="text-slate-300 font-medium">Becky Taylor</div>
                                                <div className="text-slate-500">Product Marketing Manager</div>
                                            </div>
                                        </div>
                                    </header>

                                    {/* Post content */}
                                    <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
                                        <p><strong>GambleAware NSW – 1800 858 858</strong></p>

                                        <blockquote>
                                            If you’re based in NSW and have a gambling-related issue or you’re worried about a friend or loved one, GambleAware can help.
                                            <br/>
                                            <br/>
                                            GambleAware offers education, resources and tips to be gamble aware and how to gamble more safely.

                                            If you or someone you know needs more help or support, GambleAware also offers free and confidential counselling and professional support services such as financial counselling.
                                            <br/>
                                            <br/>
                                            Learn more on the <a href={WEBSITE_URL} target={'_blank'}>GambleAware</a> website.
                                        </blockquote>
                                    </div>
                                </article>

                                <RelatedPosts />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
