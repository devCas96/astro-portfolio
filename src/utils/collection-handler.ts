import { getEntry, type ContentCollectionKey, type DataCollectionKey } from "astro:content"

export async function getContentEntry<T>(collectionName: ContentCollectionKey, language: string): Promise<T> {
  return <T>await getEntry(collectionName, language)
}

export async function getDataEntry<T>(collectionName: DataCollectionKey, language: string): Promise<T> {
  return <T>await getEntry(collectionName, language)
}