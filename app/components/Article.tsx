import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

export default function Article({ article }: Props) {
  return (
    <article className="bg-slate-100 hover:shadow-xl dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-serif font-bold line-clamp-2">{article.title}</h2>

          <section className="flex-1 pt-1">
            <p className="line-clamp-6 text-sm">{article.description}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.source} - </p>
            <p>
              <LiveTimestamp time={article.published_at} />
            </p>
          </footer>
        </div>

        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}
