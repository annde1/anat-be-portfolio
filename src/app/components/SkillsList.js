import Image from "next/image";
import styles from "./skillList.module.css";
function SkillsList() {
  //todo: add tooltip, hover animation
  const skills = [
    { name: "Javascript", id: "js", img: "/images/js.svg" },
    { name: "Html", id: "html", img: "/images/html5-logo-31813.png" },
    {
      name: "CSS",
      id: "css",
      img: "/images/317756_badge_css_css3_achievement_award_icon.png",
    },
    { name: "Typescript", id: "typescript", img: "/images/typescript.svg" },
    { name: "Bootstrap", id: "bootstrap", img: "/images/bootstrap.png" },
    {
      name: "Sass",
      id: "sass",
      img: "/images/1297046_code_compilator_css_design_sass_icon.png",
    },
    {
      name: "Material UI",
      id: "material-ui",
      img: "/images/material-ui-1.svg",
    },
    {
      name: "React",
      id: "react",
      img: "/images/1174949_js_react js_logo_react_react native_icon.png",
    },
    { name: "Redux", id: "redux", img: "/images/redux.svg" },
    { name: "Git", id: "git", img: "/images/git-icon.svg" },
    {
      name: "Next JS",
      id: "next",
      img: "/images/9118036_nextjs_fill_icon.png",
    },
    { name: "Firebase", id: "firebase", img: "/images/firebase-1.svg" },
    { name: "Mongo DB", id: "mongo", img: "/images/mongodb-icon-1.svg" },
    { name: "Gatsby", id: "gatsby", img: "/images/gatsby.svg" },
    { name: "Node JS", id: "node", img: "/images/nodejs.png" },
  ];
  return (
    <div className={styles.skillsContainer}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.box}>
          <Image alt={skill.name} src={skill.img} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}
export default SkillsList;
