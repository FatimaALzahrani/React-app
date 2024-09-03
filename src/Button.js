var button = {
  backgroundColor: "purple",
  raduis: "15px",
  boarder: "solid 1px black",
  boxShadow: "0px 2px 2px black",
  color: "#ffffff",
  padding: "10px",
  margin: "15px",
  textAlgin: "center",
};

export default function Button({ text, children }) {
  return (
    <button style={button}>
      {text}
      {children}
    </button>
  );
}
