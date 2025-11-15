import { Component } from "react";
import data from "../Layout/data";
import CardClass from "./CardClass";

class ServicesClass extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          {data.map((ele, index) => (
            <div key={index} className="col-lg-4">
              <CardClass image={ele.image} title={ele.title} para={ele.para} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ServicesClass;
