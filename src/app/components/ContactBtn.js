import Link from "next/link";
import styles from "./contactBtn.module.css";
import { Fira_Code } from "next/font/google";
const inter = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});
function ContactButton() {
  return (
    <div className={styles.container}>
      <Link
        href="/contact"
        className={`${inter.className} ${styles.btn} ${styles.link}`}
        data-sm-link-text="CLICK"
      >
        Let&apos;s Connect
      </Link>
    </div>
  );
}
export default ContactButton;
