import Link from "next/link";
import styles from "./contactBtn.module.css";
import { Fira_Code } from "next/font/google";
const inter = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});
function Button({ to, text }) {
  return (
    <div className={styles.container}>
      <Link
        href={to}
        className={`${inter.className} ${styles.btn} ${styles.link}`}
      >
        {text}
      </Link>
    </div>
  );
}
export default Button;
