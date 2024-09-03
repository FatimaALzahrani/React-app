export function State(num, changeNum) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{num}</h1>
      <button
        onClick={changeNum}
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          fontWeight: "bold",
        }}
      >
        زيد الرقم
      </button>
    </div>
  );
}
