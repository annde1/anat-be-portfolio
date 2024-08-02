import styles from "./skillsHeading.module.css";
function SkillsHeading() {
  const s = "Skills";
  const slash = "()";
  const close = ";";
  return (
    <span
      style={{ fontWeight: "800", fontSize: "2.2rem" }}
      className={styles.heading}
    >
      <span>{s}</span>
      <span
        style={{
          marginLeft: "0.3rem",
          marginRight: "0.2rem",
        }}
      >
        {slash}
      </span>
      <span>{close}</span>
    </span>
  );
}
export default SkillsHeading;
