import React from "react";

function Card({ title, description, image }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
