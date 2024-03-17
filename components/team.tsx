import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Member01 from '@/public/images/team-01.png'
import Member02 from '@/public/images/team-02.png'

interface Item {
  img: StaticImageData
  name: string
  linkedin: string
  studentID: string
  description: string
}

export default function Team() {

  const items: Item[] = [
    {
      img: Member01,
      name: 'Aryan Shah',
      linkedin: '#0',
      studentID: '510282694',
      description: 'Passionate about technology and innovation.'
    },
    {
      img: Member02,
      name: 'Gabriel Perez',
      linkedin: '#0',
      studentID: '510544160',
      description: 'Proficient in software development.'
    },
  ]

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">We are a happy, small team</h2>
            <p className="text-lg text-slate-400">Navigating the currents of innovation, our team has charted its path through creativity and serendipity, embracing whimsy and the occasional quirk, forging a bond that is both dynamic and delightful.</p>
          </div>
          {/* Team members */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
            {items.map((item, index) => ( 
              <div key={index} className="relative flex flex-col items-center justify-between py-4 pl-4 pr-3 group before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-0 hover:before:opacity-10 focus-within:before:opacity-10 before:rounded-xl before:transition-opacity">
                <div className="flex flex-col items-center space-y-2">
                  <Image className="shrink-0" src={item.img} width="200" height="200" alt={item.name} />
                  <div className="text-center">
                    <div className="font-bold text-slate-100 mb-0.5">{item.name}</div>
                    <div className="text-sm text-purple-500 font-medium">{item.role}</div>
                    <div className="text-sm text-purple-500 font-medium">Student ID: {item.studentID}</div>
                    <div className="text-xs text-slate-400">{item.description}</div>
                  </div>
                </div>
                <a className="shrink-0 text-slate-500 mt-2 md:opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100 focus:outline-none group-hover:before:absolute group-hover:before:inset-0" href={item.linkedin} aria-label={`${item.name}'s LinkedIn`}>
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M11.297 13.807 7.424 18H5.276l5.019-5.436L5 6h4.43l3.06 3.836L16.025 6h2.147l-4.688 5.084L19 18h-4.32l-3.383-4.193Zm3.975 2.975h1.19L8.783 7.155H7.507l7.766 9.627Z" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}