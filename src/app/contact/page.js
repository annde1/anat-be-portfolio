import ContactForm from "../components/ContactForm";
import LinkedinIcon from "../components/LinkedinIcon";
import PageHeading from "../components/PageHeading";

function Contact() {
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
      <PageHeading name="Contact" />
      <ContactForm />
      <LinkedinIcon />
    </div>
  );
}
export default Contact;
