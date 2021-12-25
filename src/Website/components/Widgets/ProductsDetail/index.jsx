import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

function ProductsFirst(data) {
  return (
    <div>
      <div className="row container-box">
        <div className="col-6 container-box__img-box">
          <img
            className="container-box__img-box__img"
            src={data.data.image}
            alt={data.data.title}
          />
        </div>
        <div className="col-6 container-box__content-box">
          <div className="container-box__content-box__min-box">
            <h2>{data.data.title}</h2>
            <p>{data.data.discription}</p>
          </div>
          <a href={data.data.link}>
            <button type="button" className="btn btn-outline-light">
              خرید و اطلاعات بیشتر ...
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProductsFirst;
