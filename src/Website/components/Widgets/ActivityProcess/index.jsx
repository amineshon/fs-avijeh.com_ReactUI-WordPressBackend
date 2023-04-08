import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


class ActivityProcess extends React.Component {
  render() {
    return (
      <div className="row mt-5">
        <div className="col-md-6 col-lg-6 col-sm-12 box__box-content">
          <p className="box__box-content__content">
            شرکت فراسازان آویژه فعالیت خود را از سال 1389 آغاز کرده است. با توجه
            به روند رشد صنعت ساختمان و معرفی محصولات جدید در این صنعت، این شرکت
            محصولی فنی، ایمن و مقرون به صرفه را جهت تسلیح دیوار ها در برابر
            بلایای طبیعی نظیر زلزله،سیل، طوفان و… به بازار عرضه میدارد. در طول
            این سالها پروژه های چالش برانگیز و تخصصی زیادی در سراسر کشور توسط
            تیم ما انجام شده است که مهارت و تجربه ما را در اجرا و مدیریت پروژه
            های عمرانی و ارایه راهکارهای فنی افزایش داده است.
          </p>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div>
            <video
              className="box__media-box__video"
              controls
            >
            <source src="https://fs-avijeh.com/wp-content/uploads/2020/11/intro.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    );
  }
}

export default ActivityProcess;
