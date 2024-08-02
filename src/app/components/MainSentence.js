import styles from "./mainSentence.module.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});
function MainSentence() {
  return (
    <p className={`${styles.mainSentece} ${poppins.className}`}>
      Fullstack developer passionate about creating captivating web experiences
    </p>
  );
}
export default MainSentence;
