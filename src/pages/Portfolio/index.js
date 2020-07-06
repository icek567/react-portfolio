import React from "react";
import Project from "../../components/Project"
import media from "./media.jpg"
import Schedule from "./schedule.jpg"
import quiz from "./quiz.jpg"
import burger from "./burger.jpg"
import password from "./password.jpg"
import team from "./team.jpg"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'



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
                            <Card id="CardColor">
                                <Card.Body>
                                    <Card.Title><h5>Media App</h5></Card.Title>
                                    <Card.Text>
                                        <p>This was the very first group project that I worked on with 4 others. The
                                        concept of this is it searches comics, video games and movies of the same genre using
                                        “Keyword” or “Title”.</p>
                                    </Card.Text>
                                    <Project name="Multi-Media" img={media} link="https://icek567.github.io/Multi-Media-Search-App/" />
                                    <Accordion>
                                        <Card classname="accordion" border="info" id="CardColor">
                                            <Card.Header id="point">
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <h5>Technologies Used </h5>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text> <ul>
                                                        <li>HTML5</li>
                                                        <li>jquery</li>
                                                        <li>Javascript</li>
                                                        <li>Materialze</li>
                                                    </ul>
                                                        <Button variant="btn btn-outline-info btn-sm" href="https://github.com/icek567/Multi-Media-Search-App ">GitHub</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-6">
                            <Card id="CardColor">
                                <Card.Body>
                                    <Card.Title><h5>Day Schedule</h5></Card.Title>
                                    <Card.Text>
                                        <p>This was a Day schedule that works for a regular morning shift. You are
                                         able to type task inside of the boxes and saved them so you are able to exit and come back to them later. </p>
                                    </Card.Text>
                                    <Project name="Schedule" img={Schedule} link="https://icek567.github.io/Schedule/" />
                                    <Accordion>
                                        <Card classname="accordion" border="info" id="CardColor">
                                            <Card.Header id="point">
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <h5>Technologies Used </h5>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text> <ul>
                                                        <li>CSS</li>
                                                        <li>Javascript</li>
                                                        <li>Materialze</li>
                                                    </ul>
                                                        <Button variant="btn btn-outline-info btn-sm" href="https://github.com/icek567/Schedule">GitHub</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row articlecontent">
                        <div className="col-sm-6">
                            <Card id="CardColor">
                                <Card.Body>
                                    <Card.Title><h5>SuperHero Quiz</h5></Card.Title>
                                    <Card.Text>
                                        <p className="card-text">How good do you know superhero lore? Take this quiz and find out if you know enough to pass.
                                         See your high school but if you get too many wrong answers it will end the quiz early.</p>
                                    </Card.Text>
                                    <Project name="SuperHero Quiz" img={quiz} link="https://icek567.github.io/Superhero-Quiz/" />
                                    <Accordion>
                                        <Card classname="accordion" border="info" id="CardColor">
                                            <Card.Header id="point">
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <h5>Technologies Used </h5>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text>
                                                        <ul>
                                                            <li>jquery</li>
                                                            <li>Javascript</li>
                                                            <li>Bootstrap</li>
                                                        </ul>
                                                        <Button variant="btn btn-outline-info btn-sm" href="https://github.com/icek567/Superhero-Quiz">GitHub</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-6">
                            <Card id="CardColor">
                                <Card.Body>
                                    <Card.Title><h5>Burger App</h5></Card.Title>
                                    <Card.Text>
                                        <p>Devour the burger or toss it away, the choice is up to you. On the left side you have the burgers that have been created while on the right are the ones that you ate.</p>
                                    </Card.Text>
                                    <Project name="Burger App" img={burger} link="https://arcane-thicket-32283.herokuapp.com/" />
                                    <Accordion>
                                        <Card classname="accordion" border="info" id="CardColor">
                                            <Card.Header id="point">
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <h5>Technologies Used </h5>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text>
                                                        <ul>
                                                            <li>Express</li>
                                                            <li>Express-handlebars</li>
                                                            <li>Bootstrap</li>
                                                            <li>MySQL</li>
                                                            <li>Heroku App</li>
                                                        </ul>
                                                        <Button variant="btn btn-outline-info btn-sm" href="https://github.com/icek567/burger-app">GitHub</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="row articlecontent">
                        <div className="col-sm-6">
                            <Card id="CardColor">
                                <Card.Body>
                                    <Card.Title><h5>Password Generator</h5></Card.Title>
                                    <Card.Text>
                                        <p>Need to come up with a strong password for any online account? With this you are able to generate one for you and be able to copy it to clipboard.
                                    This website uses pure javascript to generate from random symbols, numbers and letters.</p>
                                    </Card.Text>
                                    <Project name="Password Generator" img={password} link="https://icek567.github.io/Password-Generator/" />
                                    <Accordion>
                                        <Card classname="accordion" border="info" id="CardColor">
                                            <Card.Header id="point">
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <h5>Technologies Used </h5>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text>
                                                        <ul>
                                                            <li>HTML5</li>
                                                            <li>Javascript</li>
                                                            <li>Bootstrap</li>
                                                        </ul>
                                                        <Button variant="btn btn-outline-info btn-sm" href="https://github.com/icek567/Password-Generator">GitHub</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-6">
                            <Card id="CardColor">
                                <Card.Body>
                                    <Card.Title><h5>Team Maker</h5></Card.Title>
                                    <Card.Text>
                                        <p> Using node.js, form your terminal you are able to create a team for yourself. Create the manager, Engineer and the intern.
                                     Once all of the information was put in, open the new file in your web browser and it will show you the website. </p>
                                    </Card.Text>
                                    <Project name="Team Maker" img={team} link="https://github.com/icek567/Team-Maker" />
                                    <Accordion>
                                        <Card classname="accordion" border="info" id="CardColor">
                                            <Card.Header id="point">
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                    <h5>Technologies Used </h5>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body >
                                                    <Card.Text>
                                                        <ul>
                                                            <li>HTML5</li>
                                                            <li>Node.js</li>
                                                            <li>Javascript</li>
                                                            <li>Inquirer</li>
                                                        </ul>
                                                        <Button variant="btn btn-outline-info btn-sm" href="https://github.com/icek567/Team-Maker">GitHub</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
