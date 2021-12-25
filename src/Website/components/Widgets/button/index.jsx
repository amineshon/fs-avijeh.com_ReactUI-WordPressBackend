import React from "react";
import "./indec.scss"


class buttonPublic extends React.Component{
    state = {
        titleButton : "GET STARTED",

    }
    render() {
        return(
            <div>
                <button className="btn-public">
                    {this.state.titleButton}
                </button>
            </div>
        );
    };
};
export default buttonPublic;