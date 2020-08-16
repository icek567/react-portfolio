import React from "react";
import "./style.css";
import me from "./me.jpg"
import Darklogo from "./Darklogo.png"



function About() {
  return (
    <div className="col-md-8 articlebox">
      <div className="container">
        <div className="box2">
          <div className="row">
            <div className="col">
              <h1 className="articletitle">Welcome To My Website <a id="emailIcon" href="mailto:perezsergio97.sp@gmail.com" title="Email Me" className="far fa-envelope text-white" > </a></h1>
            </div>
          </div>

          <div className="row articlecontent">
            <div className="col-md-4">
              <div className="Flip">
                <div className="Front">
                  <img className="Sergiopic" src={me} alt="Sergio" width="200" height="200" class="img-thumbnail" />
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <p className="text-white">  Hello everyone! My name is Sergio Perez and I'm a Web Developer with a passion in Front End Design. When I am not practicing my coding skills you can catch me at my job at Northshore Evanston
              Hospital. There I work as a Patient Transporter, basically if
              a patient needs to go to a test site, I am the one they call.
              I enjoy taking pictures with my camera(Sony Alpha 6000), preferably of landscapes.
              My favorite food is my mom's homemade Mexican food and my favorite drink is water.
              My favorite place to visit, besides Mexico, is Sedona, Arizona. It reminds me of my parents’ hometown.</p>
              <p className="text-white">  When I am not at work I like to spend time with my family and loved ones. Some
              other things that I like to do are traveling, hiking, playing video games, going
              swimming, playing soccer and watching sports. Many people have always said that I come off as shy at first but that is just me getting
              comfortable to the people around me. Once I do I go all out me showing my good sence of humor and very talkative
                person that I am.</p>
            </div>
          </div>
          <div className="row articlecontent">
            <div className="col-md-7">
              <p className="text-white">  My strongest laguages in code I would say are HTML5, React, Node.js, Javascript, Mongo and Mongoose. I am also very good with
              using the frameworks of Bootstrap, Materialize and CSS to add polishing touches.
                </p>
            </div>
            <div className="col-md-3">
              <img className="Logo2" src={Darklogo} alt="Logo" width="300" height="300" />
              <figcaption className="text-center text-whit">Logo I made for myself.</figcaption>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About;