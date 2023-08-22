import { About, PortfolioSection } from "@/components"
import { technologies, portfolioItems, profileLinks } from "@/data"

export default function Home() {
  return (
    <>
      <About
        profile='/jacobc.jpg'
        profileAlt='Jacob Chademwiri'
        subtitle='Frontend Developer'
        title='Jacob Chademwiri'

        descParaOne={`I'm Jacob Chademwiri, a dedicated frontend developer based in Centurion, South Africa. With a passion for crafting seamless digital experiences, I specialize in creating static and dynamic websites that blend cutting-edge technologies with intuitive design. My toolkit includes Typescript, JavaScript, Next.js, React, Tailwind, and Wordpress, which allow me to bring versatility and innovation to every project.`}

        descParaTwo={`For over 3 years, I've immersed myself in the ever-evolving world of web development. What started as a fascination with coding has grown into a full-fledged commitment to helping businesses thrive online. Throughout my journey, I've honed my skills and cultivated a deep understanding of user-centric design, performance optimization, and effective communication.`}
        technologies={technologies}
        profileLinks={profileLinks}
      />
      <header className='p-10 text-accent/90 bg-armyGreen lg:pt-20 lg:pl-20 lg:pr-20'>
        <h3 className='text-2xl  font-bold sm:text-3xl md:mb-2 lg:text-4xl'>
          My Recent Success Stories.
        </h3>
      </header>
      {portfolioItems.map(
        ({ title, logo,  description, services, technologies, links }) => (
          <PortfolioSection
            key={title}
            title={title}
            logo={logo}
            description={description}
            services={services}
            technologies={technologies}
            links={links}
          />
        )
      )}
    </>
  )
}
