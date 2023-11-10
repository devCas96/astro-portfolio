import { defineCollection, z } from 'astro:content';
import { CollectionsNames } from "../constants/global";

const aboutCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string()
	}),
});

const experienceCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
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

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const headerCollection = defineCollection({
	type: 'data',
	schema: z.object({
		items: z.array(z.object({
			url: z.string(),
			text: z.string(),
		}))
	}),
});

export const collections = {
	[CollectionsNames.MAIN]: mainCollection,
	[CollectionsNames.ABOUT]: aboutCollection,
	[CollectionsNames.EXPERIENCE]: experienceCollection,
	[CollectionsNames.PROJECTS]: projectsCollection,
	[CollectionsNames.HEADER]: headerCollection
};
