import React from "react";
import "./style.css";

function Project(props) {
    console.log(props.img)
    return (
        <div class="col-md-6 portfoliobox">
            <img class="portfolioimg" src={props.img} alt={props.name} />
            <div class="imgbox">
            <a href={props.link}>{props.name}</a>
            </div>
        </div>
    )
}

export default Project;