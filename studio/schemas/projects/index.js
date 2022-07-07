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
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'link' } }],
		},
		{
			title: 'Linkedin',
			name: 'LinkedinLink',
			description: 'Example: https://facebook.com/playhousemediagroup',
			type: 'url',
		},
		{
			title: 'Facebook',
			name: 'facebookLink',
			description: 'Example: https://facebook.com/playhousemediagroup',
			type: 'url',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
		},

		{
			name: 'logo',
			title: 'Project Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],

	preview: {
		select: {
			title: 'title',
			media: 'logo',
		},
	},
};
