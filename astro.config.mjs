// @ts-check
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DAW',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'DAW',
					items: [
						{
							label: 'Unidad 2',
							link: 'daw/unidad-2',
							slug: 'daw/unidad-2',
							items: [{
								label: 'Resumen',
								link: 'daw/unidad-2/resumen'
							}],

						},
					],
				},
				{
					label: 'IPE II',
					items: [],
				},
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
