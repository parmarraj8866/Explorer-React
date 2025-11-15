const CardUi = (props) => {
  return (
    <div className="card bg-dark text-light mt-4 shadow-sm border border-secondary">
      <img
        src={props.image || "Dummy Image"}
        className="card-img-top"
        alt="card"
      />

      <div className="card-body">
        <h5 className="card-title fw-bold text-info">
          {props.title || "Dummy Title"}
        </h5>

        <p className="card-text text-light">
          {props.para || "Dummy Paragraph"}
        </p>
      </div>
    </div>
  );
};

export default CardUi;
