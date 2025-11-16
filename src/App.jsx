import React from "react";
import Card from "./Layout/FunctionComponent";
import CardClass from "./Layout/ClassComponent";
import cards from "./Utils/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="my-5">
        Card Design using Array + Props (Function & Class Components)
      </h1>

      <h2>Functional Component Cards</h2>
      <div className="d-flex flex-wrap">
        {cards.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>

      <h2 className="mt-4">Class Component Cards</h2>
      <div className="d-flex flex-wrap">
        {cards.map((item) => (
          <CardClass
            key={`c${item.id}`}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
