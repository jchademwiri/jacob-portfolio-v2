import Image from 'next/image';

export const PortfolioSection = ({
	title,
	logo,
	description,
	technologies,
	links,
	color,
}) => {
	return (
		<section>
			<header
				className='flex justify-between pt-10 pl-10 pr-10 lg:pt-20 lg:pl-20 lg:pr-20'
				style={{ backgroundColor: color }}>
				<h2 className='self-end mb-1 font-sans text-2xl font-bold text-zinc-50 sm:text-3xl md:mb-2 lg:text-4xl'>
					{title}
				</h2>
				<div className='flex items-center justify-center w-32 h-32 rounded-t bg-zinc-800'>
					<div className='relative w-10 h-10'>
						<Image
							src={logo}
							alt={title}
							layout='fill'
							objectFit='contain'
							placeholder='blur'
							blurDataURL={logo}
						/>
					</div>
				</div>
			</header>
			<div className='grid grid-cols-7 gap-8 p-10 bg-zinc-800 lg:p-20'>
				<div className='flex flex-col max-w-xl col-span-7 lg:col-span-3'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Description
					</h3>
					<p className='text-sm text-zinc-400'>{description}</p>
				</div>

				<div className='flex flex-col max-w-xl col-span-7 sm:col-span-3 lg:col-span-2'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Technologies
					</h3>
					<ul className='mb-4 space-y-1 list-none'>
						{technologies.map((tech) => (
							<li key={tech} className='text-sm text-zinc-400'>
								{tech}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col max-w-xl col-span-7 sm:col-span-3 lg:col-span-2'>
					<h3 className='mb-4 text-sm font-semibold tracking-wide uppercase text-zinc-50'>
						Links
					</h3>
					<ul className='space-y-1 list-none'>
						{links.map((link) => (
							<li key={link.text} className='text-sm' style={{ color }}>
								<a
									href={link.href}
									className='hover:underline'
									target='_blank'
									rel='noopener noreferrer'>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
