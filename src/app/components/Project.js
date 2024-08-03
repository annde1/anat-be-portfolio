import Image from "next/image";
import Button from "./Btn";
import { Montserrat } from "next/font/google";
import styles from "./project.module.css";
const poppins = Montserrat({
  weight: "300",
  subsets: ["latin"],
});
const fontBold = Montserrat({
  weight: "500",
  subsets: ["latin"],
});
function Project({ src, description, stack, name, link }) {
  const html = () => {
    return { __html: stack };
  };

  return (
    <div className={`${poppins.className} ${styles.projectContainer}`}>
      {src && <Image src={src} alt={name} width={50} height={50} />}

      <p className={styles.title}>{name}</p>

      <p className={styles.description}>{description}</p>
      <span style={{ fontSize: "1.3rem", marginBottom: "3rem" }}>
        <span
          style={{ marginBottom: "2rem", lineHeight: "1.6" }}
          className={fontBold.className}
        >
          Stack
        </span>
        <div dangerouslySetInnerHTML={html()}></div>
      </span>

      <Button to={link} text="GitHub" />
    </div>
  );
}
export default Project;
