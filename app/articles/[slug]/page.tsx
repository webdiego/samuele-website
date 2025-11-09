import TextBlock from "@/components/TextBlock";
import { getPost } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Download } from "lucide-react";
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
    <div className="min-h-screen w-full  relative">
      {/* Diagonal Fade Grid Background - Top Left */}
      <div
        className="absolute inset-0 -z-10 hidden sm:block md:w-1/2 h-screen"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(209, 213, 219, 0.3) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, rgba(209, 213, 219, 0.3) 0.5px, transparent 0.5px)
    `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
        }}
      />
      <div className="max-w-xl mx-auto py-10 pb-20 px-4 ">
        <TextBlock value={post.content} />
        <div className="flex gap-2">
          {post.files &&
            post.files.length > 0 &&
            post.files?.map((file) => (
              <a
                key={file.name}
                href={file.url!}
                download={file.name}
                className=" text-xs px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                <p className="inline ">
                  <span className="inline-block mr-2">
                    <Download size={14} />
                  </span>
                  Download {file.name}
                </p>
              </a>
            ))}
        </div>
      </div>
    </div>
  ) : null;
}
