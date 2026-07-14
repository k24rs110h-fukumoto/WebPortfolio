import { Link } from "react-router";
import "./ProjectCard.css";

function ProjectCard({ project, large = false }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`project-card${large ? " project-card-large" : ""}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="project-card-image"
      />

      <div className="project-card-info">
        <p className="project-card-category">{project.category}</p>
        <p className="project-card-title">{project.title}</p>
        <p className="project-card-tech">{project.tech}</p>
      </div>

      <span className="project-card-label">{project.tech}</span>
    </Link>
  );
}

export default ProjectCard;