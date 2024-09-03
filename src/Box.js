import Button from "./Button";

var box = {
  border: "4px solid darkblue",
  textAlgin: "center",
  width: "250px",
  padding: "50px",
  margin: "40px",
  alginItems: "center",
  justifyContent: "center",
  height: "360px",
};

export default function Box() {
  return (
    <div style={box}>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
}
