import { Fira_Code } from "next/font/google";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "./components/Footer";

const inter = Fira_Code({
  weight: "300",
  subsets: ["latin"],
});
config.autoAddCss = false;
export const metadata = {
  title: "Anat Ben Elazar Portfolio",
  description:
    "Welcome to Anat Ben Elazar's web developer portfolio. With expertise in JavaScript, React, and Node.js, I create beautiful, functional websites. Check out my projects and see how we can work together to bring your ideas to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
