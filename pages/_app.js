import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import { Layout } from '../components';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy='lazyOnload'>
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
			</Script>
			<DefaultSeo
				titleTemplate='Jacob Chademwiri | %s'
				title='Frontend Developer in Centurion, SA'
				description={`I'm a Frontend Developer in Centurion, SA. I love to build websites  with JavaScript, Next.js, React, Express, Tailwind and MongoDB.`}
				openGraph={{
					title: 'Frontend Developer in Centurion, SA',
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
		</Layout>
	);
}

export default MyApp;
