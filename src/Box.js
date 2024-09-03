import Button from "./Button";

var box = {
  border: "4px solid darkblue",
  textAlgin: "center",
  width: "250px",
  padding: "50px",
  margin: "40px",
  alginItems: "center",
  justifyContent: "center",
};

export default function Box() {
  return (
    <div style={box}>
      <Button text="جديد 🤩" />
      <Button text="React.js">
        <br />
        <p>🌟🌟🌟🌟</p>
        <br />
        <img
          width="50px"
          src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
          alt=""
        />
      </Button>
      <Button text="Node.js"></Button>
      <Button text="Next.js">
        <br />
        <img
          width="50px"
          src="https://th.bing.com/th/id/OIP.55d_h6dKx8Al7P1cYTLZ2AHaBf?rs=1&pid=ImgDetMain"
          alt=""
        />
      </Button>
      <Button text="Java Script">
        <br />
        <img
          width="50px"
          src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"
          alt=""
        />
      </Button>
      <Button text="JQuery">
        <br />
        <img
          width="50px"
          src="https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png"
          alt=""
        />
      </Button>
      <Button text="BootStrap">
        <br />
        <img
          width="50px"
          src="https://e7.pngegg.com/pngimages/391/430/png-clipart-bootstrap-full-logo-tech-companies-thumbnail.png"
          alt=""
        />
      </Button>
    </div>
  );
}
