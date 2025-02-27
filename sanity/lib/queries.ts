import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    publishedAt,
    slug,
    image {
      asset->{
        _ref,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    }
  }`);

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]`
);
