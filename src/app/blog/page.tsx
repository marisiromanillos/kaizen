import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  image {
    asset->{
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  },
  title,
  slug,
  publishedAt
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              {post.image?.asset && (
                <div className="relative aspect-[16/9] w-full mb-4">
                  <Image
                    src={builder
                      .image(post.image)
                      .width(800)
                      .height(450)
                      .quality(90)
                      .url()}
                    alt={post.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="rounded-xl object-cover"
                    placeholder="blur"
                    blurDataURL={post.image.asset.metadata.lqip}
                    priority={false}
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}