import ContactForm from "../components/ContactForm";
import PageHeading from "../components/PageHeading";
import styles from "./contact.module.css";
import SocialIcons from "../components/SocialIcons";
export const metadata = {
  title: "Anat Ben Elazar Portfolio - Contact",
  description:
    "Welcome to Anat Ben Elazar's web developer portfolio. With expertise in JavaScript, React, and Node.js, I create beautiful, functional websites. Check out my projects and see how we can work together to bring your ideas to life.",
};
function Contact() {
  return (
    <div className={styles.container}>
      <PageHeading name="Contact" />
      <ContactForm />
      <SocialIcons />
    </div>
  );
}

export default Contact;
