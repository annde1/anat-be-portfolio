import styles from "./pageHeading.module.css";
function PageHeading({ name }) {
  const slash = "()";
  const close = ";";
  return (
    <span
      style={{ fontWeight: "800", fontSize: "2.2rem", marginBottom: "4rem" }}
      className={styles.heading}
    >
      <span>{name}</span>
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
export default PageHeading;
