// @ts-check
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DAW',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/JoseVteRS/DAW-SEMI' }],
			sidebar: [
				{
					label: 'DAW',
					items: [
						// {
						// 	label: 'Unidad 1',
						// 	items: [{autogenerate: {directory: 'daw/unidad-1'}}],
						// },	
						{
							label: 'Unidad 2',
							items: [{ autogenerate: { directory: 'daw/unidad-2' } }],
						},
					],
				},
				{
					label: 'NUBE AWS',
					items: [{ autogenerate: { directory: 'nube-aws' } }]
				},
				// {
				// 	label: 'DIW',
				// 	items: [
				// 		{
				// 			label: 'Unidad 1',
				// 			items: [{autogenerate: {directory: 'ipe-2/unidad-04'}}],
				// 		},
				// 	],
				// },
				// {
				// 	label: 'DWEC',
				// 	items: [
				// 		{
				// 			label: 'Unidad 1',
				// 			items: [{autogenerate: {directory: 'ipe-2/unidad-04'}}],
				// 		},
				// 	],
				// },
				// {
				// 	label: 'DIW',
				// 	items: [
				// 		{
				// 			label: 'Unidad 1',
				// 			items: [{autogenerate: {directory: 'ipe-2/unidad-04'}}],
				// 		},
				// 	],
				// },
				{
					label: 'IPE II',
					items: [{ autogenerate: { directory: 'ipe-2' } }],
				}
			],
		}),
		mermaid({
			theme: 'dark',
			autoTheme: false,
			mermaidConfig: {
				flowchart: {
					curve: 'basis',
				},

			}
		})
	],
});
