export default {
	name: 'link',
	title: 'Link',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			title: 'Link URL',
			name: 'linkUrl',
			description: 'example: https://playhousemedia.net',
			type: 'url',
		},
	],
};
