import React from "react";

function Card(props) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={props.image} className="card-img-top" alt={props.title} />

      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
