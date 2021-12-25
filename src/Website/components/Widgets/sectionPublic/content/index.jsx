import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.scss"
import ButtonPublic from "../../button/index.jsx"






class Content extends React.Component{


    render() {
        return(
            <div className='content--box'>
                <h2 className='content--box__title'>Manage your business strategy in one place</h2>
                <p className='content--box__paragraph'>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                <div>
                    <ButtonPublic/>
                </div>
            </div>
        );
    };

}
export default Content;
