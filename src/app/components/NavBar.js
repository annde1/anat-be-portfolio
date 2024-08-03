"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ""}`}>
          <li className={styles.listItem}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
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
  );
}

export default NavBar;
