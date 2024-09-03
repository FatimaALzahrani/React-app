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
              <Post />
              <Post />
              <Post />
              <Post />
            </div>
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
