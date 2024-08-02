import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function LinkedinIcon() {
  return (
    <Link href="https://www.linkedin.com/in/anat-ben-elazar" target="blank">
      <FontAwesomeIcon
        icon={faLinkedin}
        size="3x"
        style={{ color: "white" }}
      ></FontAwesomeIcon>
    </Link>
  );
}
export default LinkedinIcon;
