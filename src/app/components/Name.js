import styles from "./name.module.css";
import { Poppins } from "next/font/google";
const roboto = Poppins({
  weight: "600",
  subsets: ["latin"],
});

function Name() {
  return (
    <div className={roboto.className}>
      <p className={styles.name}>Anat Ben Elazar</p>
    </div>
  );
}
export default Name;
