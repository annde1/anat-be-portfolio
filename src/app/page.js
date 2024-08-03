import Button from "./components/Btn";
import Description from "./components/Description";
import Hello from "./components/Hello";
import MainSentence from "./components/MainSentence";
import Name from "./components/Name";
import styles from "./page.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Hello />
          <Name />
          <MainSentence />
          <Description />
          <Button to="/contact" text="Let's connect" />
        </div>
      </div>
    </>
  );
}
