import { quickLinks } from '@/data';
import { TAbout, TQuickLinks } from '@/lib/types';
import Image from 'next/image';
export const About = ({
	profile,
	profileAlt,
	subtitle,
	title,
	description,
	technologies,

}: TAbout) => {
	return (
		<section className='p-10 lg:p-20'>
			<header className='flex flex-wrap w-full'>
				<div className='relative w-32 h-32 mb-8 mr-8 '>
					<Image
						className='rounded-full'
						src={profile}
						alt={profileAlt}
						layout='fill'
						objectFit='cover'
						placeholder='blur'
						blurDataURL={profile}
					/>
				</div>
				<div>
					<p className='mb-2 text-sm font-semibold tracking-wider uppercase text-zinc-400'>
						{subtitle}
					</p>
					<h1 className='font-sans text-4xl text-zinc-50 lg:text-6xl'>
						{title}
					</h1>
				</div>
			</header>
			<div className='grid grid-cols-7 gap-8 my-12'>
				<div className='flex flex-col max-w-xl col-span-7 lg:col-span-3'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						About
					</h3>
					<p className='text-sm text-zinc-400'>{description}</p>
				</div>
				<div className='flex flex-col max-w-xl col-span-7 sm:col-span-3 lg:col-span-2'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Technologies
					</h3>
					<ul className='space-y-1 list-none'>
						{technologies.map((tech) => (
							<li key={tech} className='text-sm text-zinc-400'>
								{tech}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col max-w-xl col-span-7 sm:col-span-3 lg:col-span-2'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Quick Links
					</h3>
					<ul className='space-y-1 list-none'>
						{quickLinks.map(({ text, href, username }: TQuickLinks) => (
							<li key={text} className='text-sm text-[#fbbf24]'>
								<a
									href={href}
									className='hover:underline'
									target='_blank'
									rel='noopener noreferrer'>
									<span>
										{text} - {username}
									</span>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
