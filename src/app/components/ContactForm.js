"use client";
import { useFormState } from "react-dom";
import { contact } from "../../../lib/actions";
import SubmitBtn from "./SubmitBtn";
function ContactForm() {
  const [state, formAction] = useFormState(contact, { message: null });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <form
          style={{ display: "flex", flexDirection: "column", width: "50rem" }}
          action={formAction}
        >
          <label htmlFor="email" style={{ marginBottom: "1rem" }}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
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
          />
          <SubmitBtn />
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
