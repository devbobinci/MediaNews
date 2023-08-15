import NewsList from "@/app/components/NewsList";
import { categories } from "@/constants";
import { fetchNews } from "@/lib/fetchNews";

type Props = {
  params: { category: Category };
};

export default async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
