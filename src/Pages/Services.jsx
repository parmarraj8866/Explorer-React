import data from "../Layout/data";
import CardUi from "../Layout/CardUi";

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((ele, index) => (
          <div className="col-lg-4" key={index}>
            <CardUi image={ele.image} title={ele.title} para={ele.para} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
