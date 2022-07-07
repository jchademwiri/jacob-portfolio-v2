export const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-zinc-900 sm:p-6 lg:p-12'>
			<main className='mx-auto rounded max-w-7xl bg-zinc-800'>{children}</main>
			<footer className='py-4 mt-5 text-center text-white'>
				Jacob Chademwiri - &copy; {new Date().getFullYear()} All Rights Reserved
			</footer>
		</div>
	);
};
