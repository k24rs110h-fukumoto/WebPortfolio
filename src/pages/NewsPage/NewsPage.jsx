import { Link } from "react-router";
import newsList from "../../data/news";
import "./NewsPage.css";

function NewsPage() {
  return (
    <main className="news-page">
      <header className="news-heading">
        <p>NEWS</p>
        <h1>活動記録</h1>
        <span>
          制作、研究、サイト更新などの活動を時系列で掲載しています。
        </span>
      </header>

      <section className="news-list">
        {newsList.map((news) => (
          <Link
            to={`/news/${news.slug}`}
            className="news-item"
            key={news.slug}
          >
            <div className="news-meta">
              <time>{news.date}</time>
              <span>{news.category}</span>
            </div>

            <div className="news-content">
              <h2>{news.title}</h2>
              <p>{news.description}</p>
            </div>

            <span className="news-arrow">→</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default NewsPage;