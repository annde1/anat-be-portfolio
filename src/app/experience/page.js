import PageHeading from "../components/PageHeading";
import SkillsList from "../components/SkillsList";
import styles from "./experience.module.css";
function Experience() {
  return (
    <div className={styles.container}>
      <PageHeading name="Skills" />
      <SkillsList />
    </div>
  );
}
export default Experience;
