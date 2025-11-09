"use client";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import type { PortableTextBlock } from "sanity";
// import { getFileUrl } from "@/lib/sanity"; // funzione helper

interface VideoValue {
  url?: string;
}

interface ImageValue {
  alt?: string;
}

// ✅ Componenti personalizzati
const ImageComponent = ({ value }: { value: ImageValue }) => {
  if (!value) return null;
  return (
    <Image
      className="not-prose w-full h-auto my-6"
      src={urlFor(value).quality(100).auto("format").url()}
      alt={value.alt || ""}
      width={1000}
      height={1000}
    />
  );
};

const VideoComponent = ({ value }: { value: VideoValue }) => {
  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return url;
  };

  if (!value?.url) return null;
  const embedUrl = getEmbedUrl(value.url);

  return (
    <div className="my-6 aspect-video w-full">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        />
      ) : (
        <p>Invalid video URL</p>
      )}
    </div>
  );
};

// ✅ Configurazione PortableText
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-3 leading-7 text-neutral-700">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold mt-8 mb-3">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold mt-8 mb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-semibold mt-8 mb-1">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic text-neutral-600 my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-2 text-neutral-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-2 text-neutral-700">{children}</ol>
    ),
  },
  types: {
    image: ImageComponent,
    embedVideo: VideoComponent,
  },
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-blue-600 hover:text-blue-800"
      >
        {children}
      </Link>
    ),
  },
};

// ✅ Componente finale
export const TextBlock = ({ value }: { value: PortableTextBlock[] }) => {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
};

export default TextBlock;
