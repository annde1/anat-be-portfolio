import Image from "next/image";
import Button from "./Btn";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
});
function Project({ src, description, stack, name, link }) {
  const html = () => {
    return { _html: stack };
  };
  //todo: make the link open in new tab (when clicking on button)
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "rgba(22, 21, 34, 0.3)",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        border: "1px solid #292929",
        borderRadius: "30px",
        padding: "3rem",
      }}
      className={poppins.className}
    >
      <Image src={src} alt={name} width={50} height={50} />
      <p
        style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: 0,
        }}
      >
        {name}
      </p>

      <p style={{ textAlign: "left", fontSize: "1.5rem" }}>{description}</p>
      <span style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        <span style={{ marginRight: "1rem" }}>Stack:</span>
        <span>{stack}</span>
      </span>

      <Button to={link} text="GitHub" />
    </div>
  );
}
export default Project;
