import React from "react";
import Project from "../../components/Project"
import media from "./media.jpg"
import Schedule from "./schedule.jpg"
import quiz from "./quiz.jpg"
import burger from "./burger.jpg"
import password from "./password.jpg"
import team from "./team.jpg"

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
                            <div className="card text-white" id="CardColor">
                                <div className="card-body">
                                    <h5 className="card-title">Media App</h5>
                                    <p className="card-text">This was the very first group project that I worked on with 4 others. The
                                    concept of this is it searches comics, video games and movies of the same genre using
                                “Keyword” or “Title”.</p>
                                    <Project name="Multi-Media-App" img={media} link="https://icek567.github.io/Multi-Media-Search-App/" />
                                </div>
                                <a class="btn btn-outline-info btn-sm" id="btn" href="https://github.com/icek567/Multi-Media-Search-App" role="button">GitHub</a>
                                <h5 id="list">Technologies used:</h5>
                                <ul>
                                    <li>jquery</li>
                                    <li>Javascript</li>
                                    <li>Materialize</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card text-white" id="CardColor">
                                <div className="card-body">
                                    <h5 className="card-title">Day Schedule</h5>
                                    <p className="card-text">This was a Day schedule that works for a regular morning shift. You are
                                    able to type task inside of the boxes and saved them so you are able to exit and come back
                            to them later. </p>
                                    <Project name="Schedule" img={Schedule} link="https://icek567.github.io/Schedule/" />
                                </div>
                                <a class="btn btn-outline-info btn-sm" id="btn" href="https://github.com/icek567/Schedule" role="button">GitHub</a>
                                <h5 id="list">Technologies used:</h5>
                                <ul>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row articlecontent">
                        <div className="col-sm-6">
                            <div className="card text-white" id="CardColor">
                                <div className="card-body">
                                    <h5 className="card-title">Superhero Quiz</h5>
                                    <p className="card-text">How good do you know superhero lore? Take this quiz and find out if you know enough to pass.
                            See your high school but if you get too many wrong answers it will end the quiz early.</p>
                                    <Project name="Superhero Quiz" img={quiz} link="https://icek567.github.io/Quiz-2" />
                                </div>
                                <a class="btn btn-outline-info btn-sm" id="btn" href="https://github.com/icek567/Superhero-Quiz" role="button">GitHub</a>
                                <h5 id="list">Technologies used:</h5>
                                <ul>
                                    <li>jquery</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card text-white" id="CardColor">
                                <div className="card-body">
                                    <h5 className="card-title">Burger App</h5>
                                    <p className="card-text">Devour the burger or toss it away, the choice is up to you. On the left side you have the burgers that have been created while on the right
                            are the ones that you ate.</p>
                                    <Project name="Burger App" img={burger} link="https://arcane-thicket-32283.herokuapp.com/" />
                                </div>
                                <a class="btn btn-outline-info btn-sm" id="btn" href="https://github.com/icek567/burger-app" role="button">GitHub</a>
                                <h5 id="list">Technologies used:</h5>
                                <ul>
                                    <li>Express</li>
                                    <li>Express-handlebars</li>
                                    <li>Bootstrap</li>
                                    <li>MySQL</li>
                                    <li>Heroku App</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row articlecontent">
                        <div className="col-sm-6">
                            <div className="card text-white" id="CardColor">
                                <div className="card-body">
                                    <h5 className="card-title">Password Generator</h5>
                                    <p className="card-text">Need to come up with a strong password for any online account? With this you are able to generate one for you and be able to copy it to clipboard. 
                                    This website uses pure javascript to generate from random symbols, numbers and letters.</p>
                                    <Project  name="Password Generator" img={password} link="https://icek567.github.io/Password-Generator/" />
                                </div>
                                <a class="btn btn-outline-info btn-sm" id="btn" href="https://github.com/icek567/Password-Generator" role="button">GitHub</a>
                               <h5 id="list">Technologies used:</h5>
                                <ul>
                                    <li>HTML</li>
                                    <li>Javascript</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card text-white" id="CardColor">
                                <div className="card-body">
                                    <h5 className="card-title">Team Maker</h5>
                                    <p className="card-text">Using node.js, form your terminal you are able to create a team for yourself. Create the manager, Engineer and the intern.
                                     Once all of the information was put in, open the new file in your web browser and it will show you the website. </p>
                                    <Project name="Team Maker" img={team} link="https://github.com/icek567/Team-Maker" />
                                </div>
                                <a class="btn btn-outline-info btn-sm" id="btn" href="https://github.com/icek567/Team-Maker" role="button">GitHub</a>
                                <h5 id="list">Technologies used:</h5>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Javascript</li>
                                    <li>Inquirer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
