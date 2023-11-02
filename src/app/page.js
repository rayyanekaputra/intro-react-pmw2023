export default function Home() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "12px",
          fontSize: "24px",
        }}
      >
        Welcome to my App
      </h1>
      <HelloButton buttonText={"rayyan ganteng"} buttonText2={"i love you"} />
    </section>
  );
}

function HelloButton({ buttonText, buttonText2 }) {
  return (
    <>
      <button
        style={{
          width: "240px",
          height: "36px",
        }}
      >
        {" "}
        {buttonText}{" "}
      </button>
      <button
        style={{
          width: "240px",
          height: "36px",
          marginTop: "12px",
        }}
      >
        {" "}
        {buttonText2}{" "}
      </button>
    </>
  );
}
