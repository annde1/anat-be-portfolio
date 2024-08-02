import styles from "./SubmitBtn.module.css";
import { Fira_Code } from "next/font/google";
const inter = Fira_Code({
  weight: "300",
  subsets: ["latin"],
});
function SubmitBtn() {
  return (
    <div className={styles.container}>
      <button type="submit" className={`${inter.className} ${styles.btn}`}>
        Submit
      </button>
    </div>
  );
}
export default SubmitBtn;
