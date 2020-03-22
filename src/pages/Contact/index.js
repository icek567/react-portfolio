import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="col-md-8 articlebox">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <h1 className="articletitle">Contact</h1>
                    </div>

                </div>

                <div className="row articlecontent">
                    <div className="col-md">
                        <form>
                            <h4 className="text-white">Name:</h4>
                            <input className="display" type="text" name="name" placeholder="Your Name" /><br />
                            <h4 className="text-white">Email:</h4>
                            <input className="display" type="text" name="email" placeholder="example@gmail.com" /><br />
                            <h4 className="text-white" >Message:</h4>
                            <textarea className="display" type="text" name="name" placeholder="Write Message here" ></textarea>
                            </form>
                            <br />
                            <button className="button" type="submit" value="Submit" >Submit</button>
                            <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;