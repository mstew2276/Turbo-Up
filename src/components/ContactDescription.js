import React from "react";
import "./../App.css";
import './ContactDescription.css';

const ContactPage = () => {

  return (
    <div className='body'>
    <div className="contactcontainer">
        
      <form class="my-form" id="portfolio-form" action="" method="get">
        <div className="topmessage">
            <h1>Contact Me!</h1>
            </div>
        <ul>
            <li>
                <div class="grid col" >
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" id="name" placeholder="Name" required/>
                    <label for="exampleInputEmail1">Email address:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Email" required/>
                   

                </div>
            </li>

            <li>
                <div class="col">
                    <textarea placeholder="For any further comments/ specifics"></textarea>
                </div>
            </li>
            <button type="submit" class="btn btn-primary col" onclick="Submit()">Submit</button>
        </ul>
        
    </form>
    </div>
    </div>
  )
}

export default ContactPage;