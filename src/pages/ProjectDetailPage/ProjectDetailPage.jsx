import { Link, useParams } from "react-router";
import projects from "../../data/projects";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <main className="project-not-found">
                <h1>プロジェクトが見つかりません</h1>
                <Link to="/projects">PROJECTSへ戻る</Link>
            </main>
        );
    }

    return (
        <main className="project-detail-page">
            <Link to="/projects" className="project-back-link">
                ← PROJECTS
            </Link>

            <section className="project-detail-header">
                <p>{project.category}</p>
                <h1>{project.title}</h1>
            </section>

            <div className="project-detail-media">
                {project.demoVideo ? (
                    <video
                        className="project-detail-video"
                        src={project.demoVideo}
                        poster={project.image}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    >
                        お使いのブラウザは動画再生に対応していません。
                    </video>
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-detail-image"
                    />
                )}
            </div>

            <section className="project-overview">
                <div className="project-section-title">
                    <p>OVERVIEW</p>
                    <h2>プロジェクト概要</h2>
                </div>

                <div className="project-overview-body">
                    <p className="project-description">{project.description}</p>

                    <dl className="project-information">
                        {project.period && (
                            <div>
                                <dt>PERIOD</dt>
                                <dd>{project.period}</dd>
                            </div>
                        )}

                        {project.role && (
                            <div>
                                <dt>ROLE</dt>
                                <dd>{project.role}</dd>
                            </div>
                        )}

                        <div>
                            <dt>CATEGORY</dt>
                            <dd>{project.category}</dd>
                        </div>
                    </dl>
                </div>
            </section>

            {project.technologies?.length > 0 && (
                <section className="project-section">
                    <div className="project-section-title">
                        <p>TECHNOLOGY</p>
                        <h2>使用技術</h2>
                    </div>

                    <div className="technology-list">
                        {project.technologies.map((technology) => (
                            <span key={technology}>{technology}</span>
                        ))}
                    </div>
                </section>
            )}

            {project.features?.length > 0 && (
                <section className="project-section">
                    <div className="project-section-title">
                        <p>FEATURES</p>
                        <h2>実装した機能</h2>
                    </div>

                    <ol className="feature-list">
                        {project.features.map((feature, index) => (
                            <li key={feature}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            )}

            {(project.github || project.website) && (
                <section className="project-links">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                            <span>↗</span>
                        </a>
                    )}

                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Website
                            <span>↗</span>
                        </a>
                    )}
                </section>
            )}
        </main>
    );
}

export default ProjectDetailPage;