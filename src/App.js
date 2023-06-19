import earth from "./Fill 213.png";
import Mount from "./Mount.png";
import "./App.css";
import Card from "./Card.js";
import data from "./data.js";
import Linkedin from "./linkedIn.png";
import gitHub from "./icone-github-grise.png";
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="Background">
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <img src={earth} className="App-logo" alt="logo" />
            <h4 className="Title"> My travel jornal</h4>
          </div>
        </header>
        <div className="Card-Container">{cards}</div>
        <div className="App-footer">
          {" "}
          <a href="https://www.linkedin.com/in/daleh-alsubaiee">
            <img src={Linkedin} />
          </a>
          <a href="https://github.com/alsubaieedaleh">
            <img src={gitHub} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
