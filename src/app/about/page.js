import Image from "next/image";
import PageHeading from "../components/PageHeading";
import Button from "../components/Btn";
import ImageTransition from "../components/ImageTransition";
import styles from "./about.module.css";
export const metadata = {
  title: "Anat Ben Elazar Portfolio - About",
  description:
    "Welcome to Anat Ben Elazar's web developer portfolio. With expertise in JavaScript, React, and Node.js, I create beautiful, functional websites. Check out my projects and see how we can work together to bring your ideas to life.",
};
function About() {
  return (
    <div className={styles.aboutPageContainer}>
      <PageHeading name="AboutMe" />
      <div className={styles.sectionContainer}>
        <div style={{ flex: 1, padding: "1rem" }}>
          <p className={styles.aboutText}>
            Hello! I&apos;m Anat, a fullstack developer with a deep passion for
            web development that started back in 2021. It all began with a game
            called Code Monkey, where I was introduced to the basic concepts of
            JavaScript. I was amazed by the possibilities and the creativity
            that coding unlocked for me.
          </p>
          <p className={styles.aboutText}>
            I have a keen eye for detail and love creating pixel-perfect UIs. My
            strong problem-solving skills allow me to transform complex
            challenges into elegant, functional designs. I firmly believe that
            programming holds the power to solve many of our daily-life issues,
            making life more efficient and enjoyable.
          </p>
          <p className={styles.aboutText}>
            When I&apos;m not coding, you will find me experimenting in my
            kitchen or working out at the gym.
          </p>
        </div>
        <ImageTransition>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/profile-pic-anat.png"
              className={styles.profileImage}
              width={330} // Base width
              height={330} // Base height
              quality={100}
              alt="profile"
            />
          </div>
        </ImageTransition>
      </div>
      <Button
        text="Resume"
        to="/Anat_Ben_Elazar_resumee.pdf"
        download="Anat_Ben_Elazar_resumee.pdf"
      />
    </div>
  );
}

export default About;
