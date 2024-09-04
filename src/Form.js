import { useState } from "react";

let formStyle = {
  direction: "rtl",
  padding: "20px",
  margin: "10px",
  border: "solid blaxk 2px",
  boxShadow: "0px 2px 6px black",
  backgroundColor: "lightgrey",
};
export default function Form() {
  const [inputs, setInputs] = useState({ name: "", email: "" });
  return (
    <form
      style={formStyle}
      onSubmit={(event) => {
        event.preventDefault();
        alert(
          " أهلًا " +
            inputs.name +
            "\n سنرسل التفاصيل لإيميلك التالي " +
            inputs.email
        );
        console.log(inputs);
      }}
    >
      <label>الاسم : </label>
      <input
        value={inputs.name}
        onChange={(event) => {
          setInputs({ ...inputs, name: event.target.value });
        }}
      />
      <hr />
      <label>الايميل : </label>
      <input
        value={inputs.email}
        onChange={(event) => {
          setInputs({ ...inputs, email: event.target.value });
        }}
      />
      <hr />
      <button
        style={{ backgroundColor: "pink", fontWedght: "bold", padding: "10px" }}
      >
        ارسال
      </button>
    </form>
  );
}
