import React from "react";
import Project from "../../components/Project"
import media from "./media.jpg"
import Schedule from "./schedule.jpg"
import quiz from "./quiz.jpg"
import burger from "./burger.jpg"

function Portfolio() {
    return (
        <div className="col-md-8 articlebox">
            <div className="container">
                <div className="box">
                    <div className="row">
                        <div className="col">
                            <h1 className="articletitle">Portfolio</h1>
                        </div>
                    </div>

                    <div className="row articlecontent">
                        <div className="col-sm-6">
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title">Media App</h5>
                                    <p className="card-text">This was the very first group project that I worked on with 4 others. The
                                    concept of this is it searches comics, video games and movies of the same genre using
                                “Keyword” or “Title”.</p>
                                    <Project name="Project1" img={media} link="https://jlovejo2.github.io/Multi-Media-Search-App/" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-title">Day Schedule</h5>
                                    <p className="card-text">This was a Day schedule that worked for a regular morning shift. You are
                                    able to type task inside of the boxes and saved them so you are able to exit and come back
                            to them later. </p>
                                    <Project name="Schedule" img={Schedule} link="https://icek567.github.io/Schedule/" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row articlecontent">
                        <div className="col-sm-6">
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-text">Super hero Quiz</h5>
                                    <p className="card-text">How good do you know superhero lore? Take this quiz and find out if you know enough to pass.
                            See your high school but if you get too many wrong answers it will end the quiz early.</p>
                                    <Project  name="Quiz" img={quiz} link="https://icek567.github.io/Quiz-2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card text-white bg-dark">
                                <div className="card-body">
                                    <h5 className="card-text">Burger App</h5>
                                    <p className="card-text">Devour the burger or toss it away, the choice is up to you. On the left side you have the burgers that have been created while on the right
                            are the ones that you ate.</p>
                                    <Project name="Burger App" img={burger} link="https://arcane-thicket-32283.herokuapp.com/" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
