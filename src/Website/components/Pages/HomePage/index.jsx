import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SectionPublic from "../../Widgets/sectionPublic/index";
import "./index.scss";
import LinePic from "../../../assets/images/img/Line.png";
import MinTitleSection from "../../Widgets/MinTitleSection/index";
import ActivityProcess from "../../Widgets/ActivityProcess/index";
import CalculationTool from "../../Widgets/CalculationTool/index";
import Blog from "../../Widgets/blog/index";
import Footer from "../../footer/indext";

class MinContent extends React.Component {
  state = {
    dataBlog: "",
  };

  componentDidMount() {
    this.loadDataBlog();
  }

  loadDataBlog = async () => {
    const url = "https://fs-avijeh.com/wp-json/wp/v2/posts";
    let response = await fetch(url);
    // only proceed once promise is resolved
    let data = await response.json();
    this.setState({
      dataBlog: data,
    });
  };

  render() {
    const { dataBlog } = this.state;
    return (
      <div>
        <div className="row bg-Light-gray">
          <img
            className="bg-wall"
            src={
              "https://fs-avijeh.com/wp-content/uploads/2020/11/wall-scaled.jpg"
            }
            alt="Background img"
          />
          <div className="container">
            <SectionPublic />
          </div>
          <div className="box-linePic">
            <img
              className="
                        box-linePic__linePic"
              src={LinePic}
              alt=""
            />
          </div>
        </div>
        <div>
          <MinTitleSection />
        </div>
        <div>
          <ActivityProcess />
        </div>
        <div>
          <CalculationTool />
        </div>
        <div>
          <Blog data={dataBlog} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};
export default MinContent;
