import { Link } from "react-router";
import homeProjects from "../../data/homeProjects";
import projects from "../../data/projects";
import researchList from "../../data/research";
import newsList from "../../data/news";
import "./HomePage.css";

function getHomeItem(setting) {
  if (setting.type === "project") {
    const project = projects.find(
      (item) => item.slug === setting.slug
    );

    if (!project) {
      return null;
    }

    return {
      ...project,
      type: "project",
      href: `/projects/${project.slug}`,
      label: project.tech,
      large: setting.large,
    };
  }

  if (setting.type === "research") {
    const research = researchList.find(
      (item) => item.slug === setting.slug
    );

    if (!research) {
      return null;
    }

    return {
      ...research,
      type: "research",
      category: "RESEARCH",
      label: research.technologies?.[0] ?? "Research",
      href: research.pdf ?? "/research",
      large: setting.large,
    };
  }

  if (setting.type === "about") {
    return {
      ...setting,
      href: "/about",
    };
  }

  return null;
}

function HomePage() {
  const homeItems = homeProjects
    .map(getHomeItem)
    .filter(Boolean);

  const latestNews = newsList.slice(0, 3);

  return (
    <main className="home-page">
      <section className="home-projects">
        {homeItems.map((item) => {
          const className = `home-project-card${
            item.large ? " home-project-card-large" : ""
          }`;

          const content = (
            <>
              <img
                src={item.image}
                alt={item.title}
                className="home-project-image"
              />

              <div className="home-project-info">
                <p>{item.category}</p>
                <h2>{item.title}</h2>
                <span>{item.label}</span>
              </div>
            </>
          );

          if (item.type === "research" && item.pdf) {
            return (
              <a
                key={`${item.type}-${item.slug}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={`${item.type}-${item.slug}`}
              to={item.href}
              className={className}
            >
              {content}
            </Link>
          );
        })}
      </section>

      <section className="home-news">
        <div className="home-news-heading">
          <div>
            <p>NEWS</p>
            <h2>最新情報</h2>
          </div>

          <Link to="/news" className="home-news-more">
            VIEW MORE
            <span>→</span>
          </Link>
        </div>

        <div className="home-news-list">
          {latestNews.map((news) => (
            <Link
              key={news.slug}
              to={`/news/${news.slug}`}
              className="home-news-item"
            >
              <div className="home-news-meta">
                <time>{news.date}</time>
                <span>{news.category}</span>
              </div>

              <h3>{news.title}</h3>

              <span className="home-news-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;