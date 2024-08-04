import ProjectCard from "./ProjectCard";
import { projects } from "../../../lib/data";
import styles from "./projectList.module.css";

function ProjectsList() {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <ProjectCard
          key={project.name}
          src={project.img}
          description={project.description}
          stack={project.stack}
          name={project.name}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
