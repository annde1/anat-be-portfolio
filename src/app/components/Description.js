import { Poppins } from "next/font/google";
import styles from "./description.module.css";
const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});
function Description() {
  return (
    <div className={styles.container}>
      <p className={`${poppins.className} ${styles.description}`}>
        As a fullstack developer, I specialize in creating dynamic and
        responsive websites using HTML, CSS, and JavaScript. My expertise in
        React and Next.js allows me to build efficient, scalable applications,
        while my proficiency in Node.js ensures smooth backend integration.
      </p>
      <p className={`${poppins.className} ${styles.description}`}>
        From concept to deployment, I am dedicated to delivering high-quality
        code and exceptional user experiences.
      </p>
    </div>
  );
}
export default Description;
