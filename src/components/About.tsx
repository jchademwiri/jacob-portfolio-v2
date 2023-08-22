// import { profileLinks } from '@/data';
import { TAbout } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
export const About = ({
	profile,
	profileAlt,
	subtitle,
	title,
	descParaOne,
	descParaTwo,
	technologies,
	profileLinks,

}: TAbout,) => {
	return (
		<section className='p-10 bg-armyGreen'>
			<header className='flex flex-wrap w-full'>
				<div className='relative w-32 h-32 mb-8 mr-8 border-2 rounded-full border-accent'>
					<Image
						className='rounded-full object-cover'
						src={profile}
						alt={profileAlt}
						width={128}
						height={128}
						placeholder='blur'
						blurDataURL={profile}
					/>
				</div>
				<div className='' >
					<p className='mb-2 text-sm font-semibold tracking-wider uppercase text-accent/90'>
						{subtitle}
					</p>
					<h1 className='font-sans text-4xl text-zinc-50 lg:text-6xl'>
						{title}
					</h1>
					<div className='text-accent/90 font-medium md:font-semibold my-4 flex flex-wrap gap-2 ' >

						<Link href={`tel:+27740491433`} >
							074 049 1433
						</Link>
						<span>|</span>
						<Link href={`mailto:info@playhousemedia.net`}>
							info@playhousemedia.net
						</Link>
						<span>|</span>
						<Link href={`mailto:jchademwiri@gmail.com`}>
							jchademwiri@gmail.com
						</Link>
					</div>
				</div>
			</header>
			<section className='grid grid-cols-8 gap-4 my-6'>
				<div className='flex flex-col col-span-8  md:col-span-4'>
					<h3 className='mb-4 text-2xl font-bold tracking-wide uppercase text-zinc-50'>
						About
					</h3>
					<div className='text-zinc-300'>

						<p className='my-4' >{descParaOne}</p>

						<p className='my-4' >{descParaTwo}</p>
					</div>
				</div>
				<div className=' col-span-8 flex-col  md:col-span-4 sm:flex-row flex gap-2 justify-between'>
					<div className='mb-8 flex flex-col max-w-xl '>
						<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
							Technologies
						</h3>
						{/* flex gap-1 sm:gap-0 items-center flex-wrap sm:grid sm:p-0 */}
						<ul className='list-none flex gap-1 sm:gap-0 items-center flex-wrap sm:grid sm:p-0'>
							{technologies.map((tech) => (
								<li key={tech} className='text-sm text-zinc-300'>
									{tech}{', '}
								</li>
							))}
						</ul>
					</div>
					<div className='flex flex-col max-w-xl'>
						<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
							Quick Links
						</h3>
						<ul className='list-none'>
							{profileLinks.map(({ text, href, username }) => (
								<li key={text} className='text-sm py-2 my-1 text-accent'>
									<Link
										href={href}
										className='hover:underline'
										target='_blank'
										rel='noopener noreferrer'>
										<span>
											{text} - {username} {','}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</section>
	);
};
