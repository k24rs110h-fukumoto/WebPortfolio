import { Link, useParams } from "react-router";
import newsList from "../../data/news";
import "./NewsDetailPage.css";

function NewsDetailPage() {
  const { slug } = useParams();
  const news = newsList.find((item) => item.slug === slug);

  if (!news) {
    return (
      <main className="news-not-found">
        <h1>Newsが見つかりません</h1>
        <Link to="/news">NEWSへ戻る</Link>
      </main>
    );
  }

  return (
    <main className="news-detail-page">
      <Link to="/news" className="news-back-link">
        ← NEWS
      </Link>

      <article className="news-detail">
        <div className="news-detail-meta">
          <time>{news.date}</time>
          <span>{news.category}</span>
        </div>

        <h1>{news.title}</h1>

        <p className="news-detail-description">
          {news.description}
        </p>

        <div className="news-detail-content">
          <p>{news.content}</p>
        </div>

        {(news.projectSlug || news.github || news.website) && (
          <div className="news-detail-links">
            {news.projectSlug && (
              <Link to={`/projects/${news.projectSlug}`}>
                プロジェクトを見る
                <span>→</span>
              </Link>
            )}

            {news.github && (
              <a
                href={news.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>
            )}

            {news.website && (
              <a
                href={news.website}
                target="_blank"
                rel="noreferrer"
              >
                公開サイト
                <span>↗</span>
              </a>
            )}
          </div>
        )}
      </article>
    </main>
  );
}

export default NewsDetailPage;