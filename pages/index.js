import { Layout, About, PortfolioSection } from '../components';

const Homepage = () => {
	const technologies = [
		'JavaScript',
		'Next.js',
		'React',
		'Sanity CMS',
		'Tailwind',
		'CSS / SCSS',
		'MongoDB',
		'Wordpress',
		'Figma',
	];

	const quickLinks = [
		{ text: 'GitHub', href: 'https://github.com/jchademwiri' },
		{ text: 'LinkedIn', href: 'https://www.linkedin.com/in/jchademwiri' },
		{
			text: 'YouTube',
			href: 'https://www.youtube.com/channel/UCgnCtM2Ih8L5xNXXpBREmEg?sub_confirmation=1',
		},
		{ text: 'Twitter', href: 'https://twitter.com/jchademwiri' },
		{ text: 'Email', href: 'mailto:info@playhousemedia.net' },
	];

	const portfolioItems = [
		{
			title: 'Playhouse Media Group',
			logo: '/playhouseMedia.svg',
			color: '#30bc72',
			description: `Playhouse Media Group is a media company that specializes in the creation responsive websites and applications that are user friendly and easy to use and seo optimized with a focus on speed and performance.`,
			technologies: [
				'Next.js',
				'React',
				'Tailwind',
				'SCSS',
				'Sanity CMS',
				'Cloudinary',
			],
			links: [
				{ text: 'Site', href: 'https://www.playhousemedia.net' },
				{
					text: 'YouTube',
					href: 'https://www.youtube.com/playhousemediagroup',
				},
				{
					text: 'LinkedIn',
					href: 'https://www.linkedin.com/company/playhouse-media-group',
				},
				{
					text: 'Facebook',
					href: 'https://www.facebook.com/playhousemediagroup',
				},
			],
		},
		{
			title: 'Sea Harvest',
			logo: '/seaHarvest.svg',
			color: '#266AFA',
			description: `Sea Harvest is a Zimbabwean fish company that specializes in fresh fish from the Kariba and Mutare. I spearheaded the development of the site from the ground up. `,
			technologies: [, 'React', 'SCSS', 'Sanity CMS'],
			links: [
				{ text: 'Site', href: 'https://seaharvest.co.zw/' },
				{ text: 'Facebook', href: 'https://www.facebook.com/seaharvestZW' },
			],
		},
		{
			title: 'Edurite',
			logo: '/Edurite.svg',
			color: '#6978D7',
			description: `Edurite offers unique, personalized, professional, virtual assistance with academic assignments and research projects in Business Studies. I championed the development of the site from the ground up using wordpress using elementor page builder, I then created social media pages for the site and connected their business to Google my Business.`,
			technologies: ['Wordpress', 'WooCommerce', 'Elementor'],
			links: [
				{ text: 'Site', href: 'https://www.edurite.co.za' },
				{ text: 'Facebook', href: 'https://www.facebook.com/eduritepro' },
				{ text: 'LinkedIn', href: 'https://www.linkedin.com/company/edurite' },
			],
		},
	];

	return (
		<Layout>
			<About
				profile='/jacobc.jpg'
				profileAlt='Jacob Chademwiri'
				subtitle='Frontend Developer'
				title='Jacob Chademwiri'
				description={`I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB, I'm also a fan of the Sanity CMS and the Wordpress platform. I help build websites for small businesses and medium sized businesses, I also provide Digital Marketing services and help them grow their online presence.`}
				technologies={technologies}
				quickLinks={quickLinks}
			/>
			{portfolioItems.map(
				({ title, logo, color, description, technologies, links }) => (
					<PortfolioSection
						key={title}
						title={title}
						logo={logo}
						color={color}
						description={description}
						technologies={technologies}
						links={links}
					/>
				)
			)}
		</Layout>
	);
};

export default Homepage;
