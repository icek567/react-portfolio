import React from "react";
import "./style.css";
import About from "../../pages/About"
import Portfolio from "../../pages/Portfolio"
import Contact from "../../pages/Contact"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Container() {
    return (
        <div className="container-fluid pagebackground">
            <div className="row topmargin">
                <div className="col-md-2"></div>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default Container;