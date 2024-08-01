import Link from "next/link";
import styles from "./navBar.module.css";
function NavBar() {
  return (
    <>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <Link href="/about" className={styles.link}>
                About
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/projects" className={styles.link}>
                Projects
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/experience" className={styles.link}>
                Skills
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
