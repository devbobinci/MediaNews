"use client";

import { useRouter } from "next/navigation";
import { encode } from "punycode";

type Props = {
  article: Article;
};

export default function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${encode(queryString)}`;
    router.push(url);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-500 h-10 rounded-b-lg dark:text-gray-900 hover:bg-indigo-700"
    >
      Read More
    </button>
  );
}
