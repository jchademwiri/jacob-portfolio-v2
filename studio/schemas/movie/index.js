export default {
	title: 'Movie',
	name: 'movie',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Poster',
			name: 'poster',
			type: 'image',
		},
		{
			title: 'Directors',
			name: 'directors',
			type: 'array',
			description: 'example: https://playhousemedia.net',
			of: [{ type: 'string' }],
		},
	],
};
