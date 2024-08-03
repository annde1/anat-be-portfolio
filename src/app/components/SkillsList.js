import Image from "next/image";
import styles from "./skillList.module.css";
import Transition from "./Transition";
import { skills } from "../../../lib/data";
function SkillsList() {
  return (
    <Transition>
      <div className={styles.skillsContainer}>
        {skills.map((skill) => (
          <div key={skill.id} className={styles.box}>
            <Image alt={skill.name} src={skill.img} width={100} height={100} />
          </div>
        ))}
      </div>
    </Transition>
  );
}

export default SkillsList;
