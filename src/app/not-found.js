import PageHeading from "./components/PageHeading";
import styles from "./notFound.module.css";
import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <PageHeading name="notFound" />
      <p className={styles.message}>
        Oops! The page you are looking for doesn&apos;t exist. It might have
        been moved or deleted.
      </p>
      <p className={styles.message}>
        But don&apos;t worry, you can go back to the{" "}
        <Link href="/" className={styles.link}>
          home page
        </Link>{" "}
        or explore other sections of my portfolio.
      </p>
    </div>
  );
}
