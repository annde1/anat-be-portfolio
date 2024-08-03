"use client";
import styles from "./SubmitBtn.module.css";
import { Fira_Code } from "next/font/google";
import { useFormStatus } from "react-dom";

const inter = Fira_Code({
  weight: "300",
  subsets: ["latin"],
});
function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <div className={styles.container}>
      <button className={`${inter.className} ${styles.btn}`}>
        {pending ? "Sending..." : "Submit"}
      </button>
    </div>
  );
}
export default SubmitBtn;
