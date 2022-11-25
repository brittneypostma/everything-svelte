module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	plugins: ['prettier-plugin-tailwindcss'],
	printWidth: 100,
	pluginSearchDirs: ['.'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
				svelteSortOrder: 'options-scripts-markup-styles',
				svelteStrictMode: true,
				svelteBracketNewLine: false,
				svelteAllowShorthand: true,
				svelteIndentScriptAndStyle: true
			}
		}
	],
	tailwindConfig: './tailwind.config.cjs'
};
