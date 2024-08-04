"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./navBar.module.css";
import Image from "next/image";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <button className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>

        <Image
          src="/images/Ana.png"
          width={70}
          height={70}
          className={styles.logo}
          alt="portfolio-logo"
        />

        <ul className={`${styles.navList} ${isOpen ? styles.showMenu : ""}`}>
          <li className={styles.listItem}>
            <Link href="/" className={styles.link} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/about" className={styles.link} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/projects" className={styles.link} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              href="/experience"
              className={styles.link}
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/contact" className={styles.link} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
