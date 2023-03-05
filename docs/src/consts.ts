export const SITE = {
	title: 'CJKitten Documentation',
	description: 'CJKitten Documentation',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://cjkitten.github.io/docs/public/CJKitten%20Documentation.png',
		alt: 'A Life with a beautiful nature by your side.'	
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/cjkitten/cjkitten.github.io/tree/main/docs`;

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Projects': [
			{ text: 'Introduction', link: 'introduction' },
			{ text: 'Key30', link: 'key30' },
			{ text: 'page3', link: 'en/page-3' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
