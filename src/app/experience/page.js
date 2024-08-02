import PageHeading from "../components/PageHeading";
import SkillsList from "../components/SkillsList";

function Experience() {
  return (
    <div
      style={{
        height: "100vh",
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageHeading name="Skills" />
      <SkillsList />
    </div>
  );
}
export default Experience;
