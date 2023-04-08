import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import Images from "../../../../assets/images/img/content-Bilding.png"


class imagePublic extends React.Component{
    render(){
        return(
            <div>
                <img src={Images} alt="img" className="img-section-Public"/>
            </div>
        )
    }
}
export default imagePublic;