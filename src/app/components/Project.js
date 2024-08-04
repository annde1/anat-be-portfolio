import Image from "next/image";
import Button from "./Btn";
import styles from "./project.module.css";
import { Poppins } from "next/font/google";
const inter = Poppins({
  weight: "300",
  subsets: ["latin"],
});
const interThiner = Poppins({
  weight: "200",
  subsets: ["latin"],
});
function Project({ src, description, stack, name, link }) {
  const html = () => {
    return { __html: stack };
  };

  return (
    <div className={` ${styles.projectContainer} ${inter.className}`}>
      {src && <Image src={src} alt={name} width={50} height={50} />}

      <p className={styles.title}>{name}</p>

      <p className={`${styles.description} ${interThiner.className}`}>
        {description}
      </p>
      <span className={`${styles.stack} ${interThiner.className}`}>
        <span className={styles.technologies}>Stack</span>
        <div dangerouslySetInnerHTML={html()}></div>
      </span>

      <Button to={link} text="GitHub" />
    </div>
  );
}
export default Project;
