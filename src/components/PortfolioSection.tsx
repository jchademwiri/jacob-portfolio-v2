import { TPortfolioItems } from '@/lib/types';
import Image from 'next/image';


export const PortfolioSection = ({
	title,
	logo,
	description,
	services,
	technologies,
	links,
}: TPortfolioItems) => {
	return (
		<section>
			<header
				className='flex justify-between pt-10 pl-10 pr-10 lg:pt-20 lg:pl-20 lg:pr-20 bg-armyGreen/20'
				>
				<h2 className='self-end mb-1 font-sans text-2xl font-bold text-white sm:text-3xl md:mb-6 lg:text-4xl  '>
					{title}
				</h2>
				<div className='flex items-center justify-center w-32 h-32 rounded-t bg-armyGreen'>
					<div className='relative w-20 h-20'>
						<Image
							className='object-contain'
							src={logo}
							alt={title}
							placeholder='blur'
							width={80}
							height={80}
							blurDataURL={logo}
						/>
					</div>
				</div>
			</header>
			<div className='grid grid-cols-7 gap-8 p-10 bg-armyGreen lg:p-20'>
				<div className='flex flex-col max-w-xl col-span-7 lg:col-span-3'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Description
					</h3>
					<p className='text-sm text-zinc-100'>{description}</p>
					<div className='text-zinc-100 my-2 gap-2' >
						<h3 className='font-medium text-sm my-2 uppercase' >SERVICES RENDERED</h3>
						<ul className='mb-4 flex flex-wrap gap-2 items-center list-none'>
							{services.map((service) => (
								<li key={service} className='text-sm  text-accent/90'>
									{service}{', '}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className='flex flex-col max-w-xl col-span-7 sm:col-span-3 lg:col-span-2'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Technologies
					</h3>
					<ul className='mb-4 list-none flex gap-1 sm:gap-0 items-center flex-wrap sm:grid sm:p-0'>
						{technologies.map((tech) => (
							<li key={tech} className='text-sm  text-zinc-100 p-1'>
								{tech}{', '}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col max-w-xl col-span-7 sm:col-span-3 lg:col-span-2'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Links
					</h3>
					<ul className='list-none flex gap-1 sm:gap-0 items-center flex-wrap sm:grid sm:p-0'>
						{links.map((link) => (
							<li key={link.text} className='text-sm p-1 text-accent' >
								<a
									href={link.href}
									className='hover:underline'
									target='_blank'
									rel='noopener noreferrer'>
									{link.text}{', '}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
