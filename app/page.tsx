import { categories } from "@/constants";
import { fetchNews } from "@/lib/fetchNews";
import NewsList from "./components/NewsList";

import response from "../response.json";

export default async function Homepage() {
  //fetch the news data

  const news: NewsResponse =
    response || (await fetchNews(categories.join(",")));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}
