import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./inddex.css";

class CalculationTool extends React.Component {
  render() {
    return (
      <div className="row mt-5 row-box">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            className="row-box__img-Box__img"
            src={"https://fs-avijeh.com/wp-content/uploads/2020/11/busines.jpg"}
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 row-box__col-content-box">
          <div className="row-box__col-content-box__div-box">
            <h1>ّطراحی دیوارهای بنایی غیرسازه ای مسلح به میلگرد بستر</h1>
            <p>
              این نرم افزار مطابق با برنامه محاسبه آیین‌نامه
              <br /> ACI530
              <br />
              آمیکاو ضابطه729 سازمان برنامه و بودجه کشور طراحی گردیده است آمریکا
              و ضابطه 729 سازمان برنامه و بودجه کشور طراحی گردیده است. کار با
              این نرم افزار به این صورت میباشد که تمام الملنهای مربوط به دیوار
              باید تکمیل گردد در صورتی که جواب نرم افزار 1 و کمتر بود دیوار در
              ناحیه امن قرار دارد و تعداد میلگرد بستر وارد شده در نرم افزار مورد
              تایید می باشد ،در غیر اینصورت باید تعداد میلگرد بستر مورد استفاده
              در دیوار را بیشتر کرد.
            </p>
            <a href="https://fs-avijeh.com/calculate_wall/">
              <span>محاسبه میلگرد مورد نیازم .. </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default CalculationTool;
