import PageHeading from "../components/PageHeading";
import ProjectsList from "../components/ProjectsList";
import styles from "./projects.module.css";
export const metadata = {
  title: "Anat Ben Elazar Portfolio - Projects",
  description:
    "Welcome to Anat Ben Elazar's web developer portfolio. With expertise in JavaScript, React, and Node.js, I create beautiful, functional websites. Check out my projects and see how we can work together to bring your ideas to life.",
};
function Projects() {
  return (
    <div className={styles.container}>
      <PageHeading name="Projects" />
      <ProjectsList />
    </div>
  );
}
export default Projects;
