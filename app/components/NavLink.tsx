import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

export default function NavLink({ category, isActive }: Props) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${
        isActive &&
        "underline decoration-indigo-700 underdline-offset-4 font-bold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
