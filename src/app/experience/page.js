import PageHeading from "../components/PageHeading";
import SkillsList from "../components/SkillsList";
import styles from "./experience.module.css";
export const metadata = {
  title: "Anat Ben Elazar Portfolio - Skills",
  description:
    "Welcome to Anat Ben Elazar's web developer portfolio. With expertise in JavaScript, React, and Node.js, I create beautiful, functional websites. Check out my projects and see how we can work together to bring your ideas to life.",
};
function Experience() {
  return (
    <div className={styles.container}>
      <PageHeading name="Skills" />
      <SkillsList />
    </div>
  );
}
export default Experience;
