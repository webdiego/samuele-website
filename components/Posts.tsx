import { getPosts } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import PostCard from "./PostCard";
import { type Post } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Posts() {
  const { data: posts } = await sanityFetch({
    query: getPosts,
  });

  return (
    <div
      id="studies"
      className="w-full mt-10 border relative bg-[#ffffff] overflow-hidden "
    >
      {/* Background griglia */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* Contenuto */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-black">
        <div className="flex flex-col items-start">
          <p className="font-black uppercase mb-1">
            <span>|</span> ARTICLES
          </p>
          <div className="uppercase font-black text-4xl md:text-5xl leading-[30px] md:leading-10 text-left">
            <h2>Studies /</h2>
            <h2>Research</h2>
          </div>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            quas vel. Provident iusto unde, explicabo laborum tempora vero
            corrupti
          </p>
        </div>

        {/* Griglia */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {posts.map((post: Post) => (
            <PostCard key={post._id} post={post as Post} />
          ))}
        </div>

        {/* Bottone */}
        <div className="flex items-center justify-start w-full mt-5">
          <Link href={`/articles`}>
            <Button className="text-white uppercase font-bold text-xs bg-black w-full">
              Read all
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
