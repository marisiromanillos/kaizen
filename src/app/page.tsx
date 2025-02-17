// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";

// import { client } from "@/sanity/client";

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const options = { next: { revalidate: 30 } };

export default  function IndexPage() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1>hello</h1>
    </main>
  );
}
