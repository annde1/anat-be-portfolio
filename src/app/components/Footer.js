import styles from "./footer.module.css";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {year} Anat Ben Elazar. Built with code, creativity, and a lot of
        coffee ☕️.
      </p>
    </div>
  );
}
export default Footer;
