import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'


function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Customers',
  description: 'Recommendations.',
}

export function Testimonial_Example() {
  return (
    <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
            <img
                alt=""
                src="https://cdoiq2024.org/wp-content/uploads/2024/01/Logan-Havern.jpg"
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                fill="none"
                viewBox="0 0 162 128"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                />
                <use x={86} href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                Ron exceeded all expectations in his ability to help commercialize our technology within the DoD. His knack for evaluating tech and pinpointing its ideal end users is exceptional. Partnering with him over the past few months has been one of the smartest moves we’ve made as a company.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Logan Havern</div>
                <div className="mt-1 text-gray-400">CEO of Datalogz</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

const featuredTestimonial = {
  body: 'Ron is hands-down the best staff officer I have ever had the pleasure of working with. Daily life in the Air and Space Forces’ first Chief Data Office was fast-paced, entrepreneurial, and highly political. Everything we built had never been done before at that scale. Using the Gartner Hype Cycle, Ron led the Air Force through the Trough of Dissolutionment into consolidation and growth, earning respect and much needed funding through building an encompassing vision.',
  author: {
    name: 'Charles Destefani',
    handle: 'HumanIT Solutions',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C4D03AQEwdW0hm-uh7A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1615322025115?e=1729123200&v=beta&t=X9PNDnzKuh8orFu9NaCm3MMjai5a_pKNk3LHB5i62EY',
    //logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
  },
}
 
const testimonials = [
  [
    [
      /*{
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Rick Moore',
          handle: 'rick_moore',
          imageUrl:
            'https://media.licdn.com/dms/image/D4E03AQE9zAWA-GhbEA/profile-displayphoto-shrink_100_100/0/1705853016145?e=1729123200&v=beta&t=lGPVcI8jv7b9EOAqQAwn6GYozcJwyFOwdNubF6t09dI',
        },
      },
      // More testimonials...
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Dan Madden',
          handle: 'Squadra',
          imageUrl:
            'https://media.licdn.com/dms/image/C5603AQF8ubJiY5FBDg/profile-displayphoto-shrink_100_100/0/1653505993792?e=1729123200&v=beta&t=9QwSr7aeN0tLYRTKz__QwMQi_y9FIbP-nAasjQNMUAs',
        },
      },
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Richard Lombardi',
          handle: 'richard_lombardi',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },*/
      {
        body: 'Ron Synakowki is a rare blend of technical and strategic acumen and good old fashioned GSD (get things done).',
        author: {
          name: 'Dr. Angela Giddings',
          handle: 'OSD CAPE',
          imageUrl:
            'https://media.licdn.com/dms/image/D4E03AQE5nYHRLIT-yA/profile-displayphoto-shrink_100_100/0/1707532812122?e=1729123200&v=beta&t=amEGoZaHvAe9b7Fnxr1QWPn_qz1JyFwQ0g5dlYoTjj8',
        },
      },
    ],
    [
      {
        body: 'Ron is one of the most influential leaders I have had the privilege to work with.',
        author: {
          name: 'Callie King',
          handle: 'Dept. of State',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D03AQE4XeI7rvchRA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1636077323129?e=1729123200&v=beta&t=_htt8PXyP66GFeF-waR0d1c-xbpqEvTK6AcnAzQkGhk',
        },
      },
      /*{
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Brian Shealey',
          handle: 'VP Rohirrim',
          imageUrl:
            'https://media.licdn.com/dms/image/C5103AQGoyfvOuFwFVQ/profile-displayphoto-shrink_100_100/0/1516295430526?e=1729123200&v=beta&t=ePFCnxRQ9zToYrFM52gHptKPQOYUVUSXZj57UWlwQSI',
        },
      },*/
      // More testimonials...
    ],
  ],
  [
    [
      /*
      {
        body: 'Ron is hands-down the best staff officer I have ever had the pleasure of working with. Daily life in the Air and Space Forces’ first Chief Data Office was fast-paced, entrepreneurial, and highly political. Everything we built had never been done before at that scale. Using the Gartner Hype Cycle, Ron led the Air Force through the Trough of Dissolutionment into consolidation and growth, earning respect and much needed funding through building an encompassing vision',
        author: {
          name: 'Charles Destefani',
          handle: 'HumanIT Solutions',
          imageUrl:
            'https://media.licdn.com/dms/image/v2/C4D03AQEwdW0hm-uh7A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1615322025115?e=1729123200&v=beta&t=X9PNDnzKuh8orFu9NaCm3MMjai5a_pKNk3LHB5i62EY',
        },
    },
    */
    /*
    {
      body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
      author: {
        name: 'Howard Levenson',
        handle: 'Former General Manager-Area Vice President Databricks',
        imageUrl:
          'https://media.licdn.com/dms/image/C5603AQFu4i-UE_sfkQ/profile-displayphoto-shrink_100_100/0/1633137829623?e=1729123200&v=beta&t=ktPLcFl5PqmE6zptde6ddGttIqLGW3xhdG0SOO4Wh6E',
      },
  },
  */
      // More testimonials...
    ],
    [
      /*
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'John Olson',
          handle: 'Executive Leader: CEO | Co-Founder | Chairman | General',
          imageUrl:
            'https://media.licdn.com/dms/image/D5603AQFQi9HUG_yYRQ/profile-displayphoto-shrink_100_100/0/1705405525903?e=1729123200&v=beta&t=8blsEyS7P6n8Uv0YG8Qt2x3y94zTTGX2QV0RJSDKH0k',
        },
      },
      */
      {
        body: '...extraordinary ability to tackle complex, enterprise-level data and organizational challenges...adept at turning problems into opportunities for growth and innovation.',
        author: {
          name: 'Kyle Gearen',
          handle: 'USCYBERCOM',
          imageUrl:
            'https://media.licdn.com/dms/image/D4E03AQEVHpLjGf22Qg/profile-displayphoto-shrink_100_100/0/1687028728566?e=1729123200&v=beta&t=_10qJNZp9hHYUeOt7t1ScNfYfafeEcVhzLMumnxNBrw',
        },
      },
      {
        body: 'Our team grew from being a small start-up like office to a mature, well-established office with significant responsibilities which included but was not limited to DAF-wide data capability governance, development, and maintenance (a mountain of a task).',
        author: {
          name: 'Jay Roberts',
          handle: 'Explainable AI (XAI) Researcher',
          imageUrl:
            'https://media.licdn.com/dms/image/C4E03AQFHUfPxIwx61g/profile-displayphoto-shrink_100_100/0/1623170446173?e=1729123200&v=beta&t=6hb06ZQ0EkL0sar43KRqOrMn6B124Jv0hq8f53Yc_ps',
        },
      },
      // More testimonials...
    ],
  ],
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Multiple_Tile_Feedback() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            I have worked with thousands of amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default function Customers() {
  return (
    <SimpleLayout
      title="What customers have to say."
      intro="Hear feedback from clients, VC leadership, industry partners, and former colleagues."
    >
      <div className="space-y-20">
        <Testimonial_Example />
        <Multiple_Tile_Feedback />
      </div>
    </SimpleLayout>
  )
}


