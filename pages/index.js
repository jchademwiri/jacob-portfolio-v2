import { About, PortfolioSection } from '../components';
import { technologies, quickLinks, portfolioItems } from '../data';

const Homepage = () => {
	return (
		<>
			<About
				profile='/jacobc.jpg'
				profileAlt='Jacob Chademwiri'
				subtitle='Frontend Developer'
				title='Jacob Chademwiri'
				description={`I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB, I'm also a fan of the Sanity CMS and the Wordpress platform. I help build websites for small businesses and medium sized businesses, I also provide Digital Marketing services and help them grow their online presence.`}
				technologies={technologies}
				quickLinks={quickLinks ? quickLinks : ''}
			/>
			<header className='p-10 text-white lg:pt-20 lg:pl-20 lg:pr-20'>
				<h3 className='text-2xl font-bold sm:text-3xl md:mb-2 lg:text-4xl'>
					My Recent Success Stories.
				</h3>
			</header>
			{portfolioItems.map(
				({ title, logo, color, description, technologies, links }) => (
					<PortfolioSection
						key={title}
						title={title}
						logo={logo}
						color={color ? color : '#fbbf24'}
						description={description}
						technologies={technologies}
						links={links}
					/>
				)
			)}
		</>
	);
};

export default Homepage;
