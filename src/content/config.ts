import { defineCollection, z } from 'astro:content';

const headerCollection = defineCollection({
	type: 'data',
	schema: z.object({
		items: z.array(z.object({
			url: z.string(),
			text: z.string(),
		}))
	}),
});

const mainCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		greeting: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	'header': headerCollection,
	'main': mainCollection,
};
