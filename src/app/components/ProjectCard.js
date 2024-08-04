import Image from "next/image";
import styles from "./projectCard.module.css";
import Button from "./Btn";
function ProjectCard({ src, description, stack, name, link }) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={name}
        width={370}
        height={255}
        className={styles.cardImage}
      />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardStack}>Tech Stack: {stack}</p>
        <div style={{ justifySelf: "flex-end" }}>
          <Button text="Github" to={link} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
