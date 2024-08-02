import PageHeading from "../components/PageHeading";
import ProjectsList from "../components/ProjectsList";

function Projects() {
  return (
    <div
      style={{
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PageHeading name="Projects" />
      <ProjectsList />
    </div>
  );
}
export default Projects;
