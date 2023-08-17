export type TQuickLinks = {
    text: string;
    href: string;
    username: string;
}
export type TPortfolioItems = {
    title: string;
    logo: string;
    color: string;
    description: string;
    technologies: (string | undefined)[];
    links: {
        text: string;
        href: string;
    }[]
}
export type TAbout = {
	profile: string
	profileAlt: string,
	subtitle: string,
	title: string,
	description: string,
	technologies: string[],
}