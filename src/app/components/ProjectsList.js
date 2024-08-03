import Project from "./Project";
import { projects } from "../../../lib/data.js";
import styles from "./projectList.module.css";
function ProjectsList() {
  return (
    <div className={styles.container}>
      {projects.map((project) => (
        <Project
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
