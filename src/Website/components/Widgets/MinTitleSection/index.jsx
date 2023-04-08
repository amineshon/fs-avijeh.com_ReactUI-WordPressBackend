import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class MinTitleSection extends React.Component {
  state = {
    minTitle: "درباره ",
    title: "فراسازان آویژه",
  };

  render() {
    return (
      <div className="col-12 min-title-section-box">
        <h5 className="min-title-section-box__min-title">
          {this.state.minTitle}
        </h5>
        <h2 className="min-title-section-box__title">{this.state.title}</h2>
      </div>
    );
  }
}

export default MinTitleSection;
