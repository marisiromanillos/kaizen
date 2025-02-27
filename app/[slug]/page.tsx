import {
  PortableText,
  PortableTextReactComponents,
  type SanityDocument,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/client";
import Link from "next/link";
import Image from "next/image";
import { PortableTextBlock } from "@portabletext/types";
import { POST_QUERY } from "../../sanity/lib/queries";

const builder = imageUrlBuilder(client);
const options = { next: { revalidate: 30 } };

interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  attribution?: string;
}

interface Post extends SanityDocument {
  title: string;
  publishedAt: string;
  author: string;
  body: PortableTextBlock[];
  image?: SanityImage;
  Paragraph1?: PortableTextBlock[];
  Paragraph2?: PortableTextBlock[];
  Paragraph3?: PortableTextBlock[];
  Paragraph4?: PortableTextBlock[];
  image1?: SanityImage;
  image2?: SanityImage;
  image3?: SanityImage;
  image4?: SanityImage;
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="mb-4 leading-6">{children}</p>,
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 mb-4">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-4 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-4 mb-4">{children}</ol>
    ),
  },
};

const PostImage = ({ image, alt }: { image: SanityImage; alt: string }) => (
  <div className="relative mx-auto my-12 first-of-type:my-6">
    <Image
      src={builder.image(image).quality(90).url()}
      alt={alt}
      width={700}
      height={500}
      className="rounded-xl object-cover mx-auto"
      sizes="(max-width: 768px) 100vw, 700px"
      priority
    />
  </div>
);

const PostParagraph = ({ content }: { content: PortableTextBlock[] }) => (
  <div className="prose max-w-none">
    <PortableText components={components} value={content} />
  </div>
);

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<Post>(POST_QUERY, await params, options);

  return (
    <main className="wrapper border-x border-lightGreen py-15 mx-auto w-full flex flex-col gap-4">
      <div className="container max-w-4xl">
        <Link href="/blog" className="hover:underline text-sm font-bold">
          ← Back to all blogs
        </Link>
        {/* Post Date */}
        <h1 className="text-4xl text-center text-lightGreen mt-4">
          {post.title}
        </h1>
        {post.image?.asset && <PostImage image={post.image} alt={post.title} />}
        <div className="font-bold space-y-4">
          <p className="text-xs">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h3 className="text-lg">{post.author}</h3>
        </div>

        <div className="prose">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>

        <div className="my-4 container">
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              {post[`Paragraph${num}`] && (
                <PostParagraph content={post[`Paragraph${num}`]} />
              )}
              {post[`image${num}`]?.asset && (
                <PostImage
                  image={post[`image${num}`]}
                  alt={post[`image${num}`]?.attribution || ""}
                />
              )}
            </div>
          ))}
        </div>

        <Link href="/blog" className="hover:underline font-bold">
          ← Back to all blogs
        </Link>
      </div>
    </main>
  );
}
