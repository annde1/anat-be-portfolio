import Link from "next/link";
import styles from "./SubmitBtn.module.css";
import { Fira_Code } from "next/font/google";
const inter = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});
function Button({ to, text, download }) {
  return (
    <div className={styles.container}>
      <Link
        href={to}
        download={download && download}
        className={`${inter.className} ${styles.btn} ${styles.link}`}
        target="blank"
      >
        {text}
      </Link>
    </div>
  );
}
export default Button;
