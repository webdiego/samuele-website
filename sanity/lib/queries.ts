import { defineQuery } from "next-sanity";

// export const getPosts = defineQuery(`
// *[_type == 'post'] | order(_createdAt desc) {
//   'id': _id,
//   title,
//   content,
//   'slug': slug.current,
//   'image': image.asset->url,
//   publishedAt,
// }`);
export const getPosts = defineQuery(`
*[_type == "post"] | order(_createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  intro,
  slug,
  publishedAt,
  image,
  content
}
`);

export const getPost = defineQuery(`
*[_type == 'post' && slug.current == $slug][0] {
  'id': _id,
  title,
  content,
  'slug': slug.current,
  'image': image.asset->url,
  publishedAt,
  text,
  files[]{
   'id': _id,
    name,
    description,
    'url': asset->url
  }
}`);

// export const getCategories = defineQuery(`
// *[_type == 'postCategory'] | order(_createdAt desc) {
//   'id': _id,
//   title,
//   'slug': slug.current,
// }`)
