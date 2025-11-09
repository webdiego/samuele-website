import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { type Post } from "@/sanity/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const builder = imageUrlBuilder(client);

interface PostCardProps {
  post: Post;
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <>
      <div className="w-full p-3 border border-slate-100 rounded-sm flex flex-col justify-between gap-2 bg-neutral-50">
        <h1 className="font-bold  line-clamp-2">{post.title}</h1>
        <p className="text-xs line-clamp-3">{post.intro}</p>
        <div className="mt-5">
          <Image
            priority
            src={builder.image(post.image).url()}
            alt={post.title}
            width={500}
            height={500}
            className="w-full h-[150px] object-cover"
          />
        </div>
        <div className="w-full mt-2">
          <Link href={`/articles/${post.slug.current}`}>
            <Button className="text-black w-full" variant={"outline"}>
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
