import {
  faGithub,
  faLinkedinIn,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../contact/contact.module.css";
import Link from "next/link";

function SocialIcons() {
  return (
    <ul className={styles.socialIcons}>
      <li>
        <Link
          href="https://github.com/annde1"
          style={{ marginRight: "2rem" }}
          target="blank"
        >
          <i>
            <FontAwesomeIcon icon={faGithub} />
          </i>
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/anat-ben-elazar"
          target="blank"
          style={{ marginRight: "2rem" }}
        >
          <i>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </i>
        </Link>
      </li>
      <li>
        <Link href="https://medium.com/@annadepta61" target="blank">
          <i>
            <FontAwesomeIcon icon={faMedium} />
          </i>
        </Link>
      </li>
    </ul>
  );
}

export default SocialIcons;
