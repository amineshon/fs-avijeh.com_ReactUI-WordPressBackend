import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Reinforcing from '../../../assets/images/img/glass-block-reinforcing.png'
import '../ProductFirst/index.css'



class productsecond extends React.Component {
    render() {
        return(
            <div>
                <div className="row container-box">
                    <div className="col-6 container-box__img-box">
                        <img className="container-box__img-box__img" src={Reinforcing} alt=""/>
                    </div>
                    <div className="col-6 container-box__content-box">
                        <div className="container-box__content-box__min-box">
                            <h2> قسمت دوم قطعه نبشی منقطع (وال پست)</h2>
                            <p>لورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورم
                                لورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورم
                                لورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورم
                                لورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورملورم لورم لورم لورم
                            </p>
                        </div>
                        <a href="#">
                            <button type="button" className="btn btn-outline-light">خرید و اطلاعات بیشتر ...</button>
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}
export default productsecond;