export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Project Title',
			description: 'Keep titles short!',
			type: 'string',
		},
		{
			name: 'logo',
			title: 'Project Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Project URL',
			name: 'projectUrl',
			description: 'example: https://playhousemedia.net',
			type: 'url',
		},
		{
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
			},
		},

		{
			title: 'Linkedin',
			name: 'linkedin',
			description: 'Example: https://facebook.com/playhousemediagroup',
			type: 'url',
		},
		{
			title: 'Facebook',
			name: 'facebook',
			description: 'Example: https://facebook.com/playhousemediagroup',
			type: 'url',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'logo',
		},
	},
};
