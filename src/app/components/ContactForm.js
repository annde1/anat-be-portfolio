"use client";
import { useFormState } from "react-dom";
import { contact } from "../../../lib/actions";
import SubmitBtn from "./SubmitBtn";
import styles from "./contactForm.module.css";
function ContactForm() {
  const [state, formAction] = useFormState(contact, { message: null });

  return (
    <form className={styles.form} action={formAction}>
      <label htmlFor="email" style={{ marginBottom: "1rem" }}>
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        style={{
          background: "none",
          border: "none",
          borderBottom: "1px solid #292929",
          height: "3rem",
          color: "white",
        }}
      />
      <label
        htmlFor="message"
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        Message
      </label>
      <textarea
        style={{
          background: "none",
          border: "none",
          borderBottom: "1px solid #292929",
          height: "5rem",
          marginBottom: "2rem",
          color: "white",
        }}
        id="message"
        name="message"
        required
      />
      {state.message && <p>{state.message}</p>}
      <SubmitBtn />
    </form>
  );
}
export default ContactForm;
