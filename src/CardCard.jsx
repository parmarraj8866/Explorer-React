import { Component } from "react";

class CardClass extends Component {
  render() {
    const { image, title, para } = this.props;

    return (
      <div
        className="card mt-4 shadow-lg border-0 bg-dark text-light"
        style={{
          borderRadius: "12px",
          transition: "0.3s",
          border: "1px solid #ffae00",
        }}
      >
        <img
          src={image || "Dummy Image"}
          alt=""
          className="mx-auto mt-3 rounded"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <div className="card-body text-center">
          <h3 style={{ color: "#ffae00" }}>{title || "Dummy Title"}</h3>
          <p className="text-light opacity-75">{para || "Dummy Paragraph"}</p>
        </div>
      </div>
    );
  }
}

export default CardClass;
