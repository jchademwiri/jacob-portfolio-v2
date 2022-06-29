import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo
				titleTemplate='Jacob Chademwiri | %s'
				title='Frontend developer in Centurion, SA'
				description={`I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`}
				openGraph={{
					title: 'frontend developer in Centurion, SA',
					description: `I'm a frontend developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`,
					type: 'website',
					locale: 'en_US',
					site_name: 'Jacob Chademwiri',
					images: [
						{
							url: `https://jacobc.co.za/social.jpg`,
							width: 1200,
							height: 600,
							alt: 'Jacob Chademwiri Frontend Developer in Centurion, SA',
						},
					],
				}}
				twitter={{
					site: '@jchademwiri',
					cardType: 'summary_large_image',
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
