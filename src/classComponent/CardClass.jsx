import { Component } from "react";

class CardClass extends Component {
  render() {
    const { image, title, para } = this.props;

    return (
      <div className="card bg-dark text-light mt-4 shadow-sm border border-secondary">
        <img src={image || "Dummy Image"} className="card-img-top" alt="card" />

        <div className="card-body">
          <h5 className="card-title fw-bold text-warning">
            {title || "Dummy Title"}
          </h5>

          <p className="card-text text-light">{para || "Dummy Paragraph"}</p>
        </div>
      </div>
    );
  }
}

export default CardClass;
