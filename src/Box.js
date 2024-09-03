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
  const buttons = [
    {
      id: 1,
      text: "React.js",
      Children: (
        <div>
          <br />
          <p>🌟🌟🌟🌟</p>
          <br />
          <img
            width="50px"
            src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
            alt=""
          />
        </div>
      ),
    },
    {
      id: 2,
      text: "Next.js",
      Children: (
        <div>
          <br />
          <img
            width="50px"
            src="https://th.bing.com/th/id/OIP.55d_h6dKx8Al7P1cYTLZ2AHaBf?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
      ),
    },
    {
      id: 3,
      text: "Java Script",
      Children: (
        <div>
          <br />
          <img
            width="50px"
            src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"
            alt=""
          />
        </div>
      ),
    },
    {
      id: 4,
      text: "JQuery",
      Children: (
        <div>
          <br />
          <br />
          <img
            width="50px"
            src="https://cdn.iconscout.com/icon/free/png-256/jquery-8-1175153.png"
            alt=""
          />
        </div>
      ),
    },
    {
      id: 5,
      text: "BootStrap",
      Children: (
        <div>
          <br />
          <img
            width="50px"
            src="https://e7.pngegg.com/pngimages/391/430/png-clipart-bootstrap-full-logo-tech-companies-thumbnail.png"
            alt=""
          />
        </div>
      ),
    },
    { id: 6, text: "جديد 🤩" },
  ];

  const Btn = buttons.map((btn) => {
    return (
      <Button key={btn.id} text={btn.text}>
        {btn.Children}
      </Button>
    );
  });
  return <div style={box}>{Btn}</div>;
}
