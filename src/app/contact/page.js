import ContactForm from "../components/ContactForm";
import PageHeading from "../components/PageHeading";
import styles from "./contact.module.css";
import SocialIcons from "../components/SocialIcons";

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
