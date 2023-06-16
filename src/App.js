import earth from "./Fill 213.png";
import Mount from "./Mount.png";
import "./App.css";
import Card from "./Card.js";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <header className="App-header">
        <div className="brand">
          <img src={earth} className="App-logo" alt="logo" />
          <h4 className="Title"> My travel jornal</h4>
        </div>
      </header>
      <div className="Card-Container">{cards}</div>
    </div>
  );
}

export default App;
