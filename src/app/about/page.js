import Image from "next/image";
import PageHeading from "../components/PageHeading";
import Button from "../components/Btn";
import ImageTransition from "../components/ImageTransition";

function About() {
  return (
    <div
      style={{
        height: "100vh",
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <PageHeading name="AboutMe" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%", // Ensure it takes full width
        }}
      >
        <div style={{ flex: 1, padding: "1rem" }}>
          <p style={{ fontSize: "1.3rem" }}>
            Hello! I&apos;m Anat, a fullstack developer with a deep passion for
            web development that started back in 2021. It all began with a game
            called Code Monkey, where I was introduced to the basic concepts of
            JavaScript. I was amazed by the possibilities and the creativity
            that coding unlocked for me.
          </p>
          <p style={{ fontSize: "1.3rem" }}>
            I have a keen eye for detail and love creating pixel-perfect UIs. My
            strong problem-solving skills allow me to transform complex
            challenges into elegant, functional designs. I firmly believe that
            programming holds the power to solve many of our daily-life issues,
            making life more efficient and enjoyable.
          </p>
          <p style={{ fontSize: "1.3rem" }}>
            When I&apos;m not coding, you will find me experimenting in my
            kitchen or working out at the gym.
          </p>
        </div>
        <ImageTransition>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Image
              src="/images/profile-pic-anat.png"
              width={330}
              height={330}
              quality={100}
              alt="profile"
            />
          </div>
        </ImageTransition>
      </div>
      <Button
        text="Resumee"
        to="/Anat_Ben_Elazar_resumee.pdf"
        download="Anat_Ben_Elazar_resumee.pdf"
      />
    </div>
  );
}

export default About;
