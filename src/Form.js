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
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    gender: "",
    city: "",
    comment: "",
    agree: false,
  });
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
      <hr />
      <label>الجنس : </label>
      <div>
        <input
          type="radio"
          value="ذكر"
          checked={inputs.gender === "ذكر"}
          onChange={(event) => {
            setInputs({ ...inputs, gender: event.target.value });
          }}
        />
        ذكر
        <input
          type="radio"
          value="أنثى"
          checked={inputs.gender === "أنثى"}
          onChange={(event) => {
            setInputs({ ...inputs, gender: event.target.value });
          }}
        />
        أنثى
      </div>
      <hr />
      <label>اختر مدينتك : </label>
      <select
        value={inputs.city}
        onChange={(event) => {
          setInputs({ ...inputs, city: event.target.value });
        }}
      >
        <option>الباحة</option>
        <option>الطايف</option>
        <option>المدينة</option>
        <option>مكة</option>
      </select>
      <hr />
      <label>لديك اي ملاحظات؟ </label>
      <textarea
        value={inputs.comment}
        onChange={(event) => {
          setInputs({ ...inputs, comment: event.target.value });
        }}
      >
        {inputs.comment}
      </textarea>
      <hr />
      <label>موافقة على الشروط والأحكام</label>
      <input
        type="checkbox"
        checked={inputs.agree}
        onChange={(event) => {
          setInputs({ ...inputs, agree: event.target.checked });
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
