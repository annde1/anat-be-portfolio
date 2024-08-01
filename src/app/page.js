import Hello from "./components/Hello";
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
        <div style={{ width: "80%" }}>
          <Hello />
          <Name />
        </div>
      </div>
    </>
  );
}
