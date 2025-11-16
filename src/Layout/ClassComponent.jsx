import React, { Component } from "react";

class CardClass extends Component {
  render() {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src={this.props.image}
          className="card-img-top"
          alt={this.props.title}
        />

        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default CardClass;
