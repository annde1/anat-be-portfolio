import Project from "./Project";
import { projects } from "../../../lib/data.js";
function ProjectsList() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5rem",
        width: "50%",
      }}
    >
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
