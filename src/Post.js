var post = {
  border: "solid 4px darkblue",
  // width: "400px",
  padding: "50px",
  margin: "40px",
  textAlign: "center",
};

export default function Post({ title, pragraph }) {
  return (
    <div style={post}>
      <h2>{title}</h2>
      <hr />
      <p>{pragraph}</p>
    </div>
  );
}
