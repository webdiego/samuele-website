import TextBlock from "@/components/TextBlock";
import { getPost } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: getPost,
    params: { slug },
  });
  return post ? (
    <div className="max-w-xl mx-auto py-10 px-4">
      <TextBlock value={post.content} />
    </div>
  ) : null;
}
