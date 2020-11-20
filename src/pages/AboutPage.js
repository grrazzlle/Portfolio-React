import React from "react";
import selfImg from "../images/selfImg.jpg"

function AboutPage() {
  return (
    <div className="pl-5 pt-5">
        <div className="col-md-8">
          <img alt="self" src={selfImg} width="350" height="450" align="left" className="border mr-5"/>
          I am currently a student at the University of Miami, participating in a coding bootcamp program for fullstack development. 
          I plan to complete this course and find a job related to this field and be able to make a decent living. 
          I enjoy solving problems and building things from scratch or fixing things already started my me or others. 
          I'm a team player, and can handle difficult tasks on my own, a leader when I can be and a good follower when helper when needed.
          </div>
    </div>
  );
}

export default AboutPage;
