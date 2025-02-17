import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  ...,
  image {
    asset->{
      url,
      metadata {
        dimensions,
        lqip
      }
    }
  }
}`;

const builder = imageUrlBuilder(client);

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/blog" className="hover:underline">
        ← Back to posts
      </Link>

      {post.image?.asset && (
        <div className="relative aspect-[16/9] w-full mb-4">
          <Image
            src={builder
              .image(post.image)
              .width(700)
              .height(500)
              .quality(90)
              .url()}
            alt={post.title}
            fill
            sizes="(max-width: 700px) 100vw, 700px"
            className="rounded-xl object-left-top"
            placeholder="blur"
            blurDataURL={post.image.asset.metadata.lqip}
            priority={true}
          />
        </div>
      )}
      <div className="prose">
        <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && <PortableText value={post.body} />}
        <h3>{post.author}</h3>
      </div>
      <h1 className="text-4xl text-center font-bold mb-8">{post.title}</h1>
      {/* post content */}
      <div className="mt-6">
        <div>
          {post.Paragraph1 && (
            <PortableText value={post.Paragraph1} />
          )}
        </div>
        {post.image?.asset && (
        <div className="relative mt-4 aspect-[16/9] w-full mb-4">
          <Image
            src={builder
              .image(post.image1)
              .width(700)
              .height(500)
              .quality(90)
              .url()}
            alt={post.image1.attribution}
            fill
            sizes="(max-width: 700px) 100vw, 700px"
            className="rounded-xl object-fit"
            placeholder="blur"
            blurDataURL={post.image.asset.metadata.lqip}
            priority={true}
          />
        </div>
      )}
      <div>
          {post.Paragraph2 && (
            <PortableText value={post.Paragraph2} />
          )}
        </div>
      </div>
    </main>
  );
}