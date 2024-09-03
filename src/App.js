// import logo from './logo.svg';
import "./App.css";
import Box from "./Box";
import Header from "./header";
import Post from "./Post";
import { useState } from "react";
import { State } from "./State";
import InputState from "./InputState";

function App() {
  const Posts = [
    {
      id: 1,
      title: "فاطمة الزهراني",
      pragraph: "خريجة علوم حاسبات من جامعة الباحة",
    },
    { id: 2, title: "React.js", pragraph: "Great FrameWork" },
    {
      id: 3,
      title: "الباحة",
      pragraph: "افضل منطفة في العالم للسياحة والعيش فجوها جميل وهادية",
    },
  ];
  const PostList = Posts.map((post) => {
    return <Post key={post.id} title={post.title} pragraph={post.pragraph} />;
  });

  const [num, setNum] = useState(0);

  function changeNum() {
    setNum(num + 1);
  }

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "80%" }}>
          <div className="row">
            <div style={{ width: "50%" }}>{PostList}</div>
            <Box />
          </div>
        </div>
      </div>
      {State(num, changeNum)}
      <InputState />
    </div>
  );
}

export default App;
