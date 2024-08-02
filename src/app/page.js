import ContactButton from "./components/ContactBtn";
import Description from "./components/Description";
import Hello from "./components/Hello";
import MainSentence from "./components/MainSentence";
import Name from "./components/Name";

export default function Home() {
  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "70%" }}>
          <Hello />
          <Name />
          <MainSentence />
          <Description />
          <ContactButton />
        </div>
      </div>
    </>
  );
}
