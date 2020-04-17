import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="col-md-8 articlebox">
            <div className="container">
                <div className="box2">
                    <div className="row">
                        <div className="col">
                            <h1 className="articletitle">Contact</h1>
                        </div>

                    </div>

                    <div className="row articlecontent">
                        <div className="col-md">
                            <form>
                                <h4 className="text-white">Name:</h4>
                                <input className="display2" type="text" name="name" placeholder="Your Name" /><br />
                                <h4 className="text-white">Email:</h4>
                                <input className="display2" type="text" name="email" placeholder="example@gmail.com" /><br />
                                <h4 className="text-white" >Message:</h4>
                                <textarea className="display" type="text" name="name" placeholder="Write Message here" ></textarea>
                            </form>
                            <br />
                            <button className="btn btn-outline-light"  type="submit" value="Submit" >Submit</button>
                            <br />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="articletitle">Contact Info</h2>
                            <ul>
                                <li class="text-light"><strong>Email:</strong> <a href="/">sergio_perezg@yahoo.com</a></li>
                                <li class="text-light"><strong>Github:</strong> <a href="https://github.com/icek567">icek567</a></li>
                                <li class="text-light"><strong>Portfolio:</strong> <Link to="/portfolio">Check it Out!</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;