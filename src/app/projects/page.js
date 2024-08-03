import PageHeading from "../components/PageHeading";
import ProjectsList from "../components/ProjectsList";
import styles from "./projects.module.css";
function Projects() {
  return (
    <div className={styles.container}>
      <PageHeading name="Projects" />
      <ProjectsList />
    </div>
  );
}
export default Projects;
