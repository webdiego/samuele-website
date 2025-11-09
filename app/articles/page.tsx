import { getPosts } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import PostCard from "@/components/PostCard";
import { type Post } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Posts() {
  const { data: posts } = await sanityFetch({
    query: getPosts,
  });

  return (
    <>
      <div className="bg-white w-full h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20 text-black">
          <div className="flex flex-col items-start">
            <p className="font-black uppercase mb-1">
              <span>|</span>ARTICLES
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
          <div className="mt-10 grid grid-cols-3 gap-4">
            {posts.map((post: Post) => (
              <PostCard key={post._id} post={post as Post} />
            ))}
            <div className="flex">
              <Link href={`/articles`}>
                <Button className="text-black w-full" variant={"outline"}>
                  Read all
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
