import { useState } from "react";

export default function InputState() {
  const [pName, setName] = useState("");
  function handelName(event) {
    setName(event.target.value);
  }

  return (
    <div style={{ textAlign: "center", direction: "rtl" }}>
      <h2>{" مرحبًا " + pName}</h2>
      <label>ادخل اسمك </label>
      <input value={pName} onChange={handelName} />
    </div>
  );
}
