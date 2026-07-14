import { Link } from "react-router";
import projects from "../../data/projects";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <main className="projects-page">
      <header className="projects-heading">
        <p>PROJECTS</p>
        <h1>制作プロジェクト</h1>
      </header>

      <section className="projects-list">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="projects-item"
          >
            <div className="projects-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="projects-image"
              />
            </div>

            <div className="projects-info">
              <p className="projects-meta">
                {project.category} ／ {project.tech}
              </p>

              <h2>{project.title}</h2>

              <p className="projects-description">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default ProjectsPage;