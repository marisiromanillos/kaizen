import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

// Define a type for the Post structure
type Post = {
  _id: string;
  title: string;
  publishedAt: string;
  slug: { current: string };
  image: {
    asset: {
      _ref: string;
      url: string;
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
        lqip: string;
      };
    };
  };
};

const POSTS_QUERY = `*[
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
}`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);

  return (
    <main className="wrapper py-15 border-white border-x">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li className="hover:underline" key={post._id}>
              <Link href={`/${post.slug.current}`}>
                {post.image?.asset && (
                  <div className="relative aspect-[16/9] w-full mb-4">
                    <Image
                      src={builder.image(post.image).width(700).height(500).quality(90).url()}
                      alt={post.title || 'Post image'}
                      fill
                      className="rounded-xl object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL={post.image.asset.metadata.lqip}
                      priority={false}
                    />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}