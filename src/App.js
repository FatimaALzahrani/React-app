// import logo from './logo.svg';
import "./App.css";
import Box from "./Box";
import Header from "./header";
import Post from "./Post";

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "80%" }}>
          <div class="row">
            <div style={{ width: "50%" }}>
              <Post
                title="فاطمة الزهراني"
                pragraph="خريجة علوم حاسبات من جامعة الباحة"
              />
              <Post title="React.js" pragraph="Great FrameWork" />
              <Post
                title="الباحة"
                pragraph="افضل منطفة في العالم للسياحة والعيش فجوها جميل وهادية"
              />
            </div>
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
