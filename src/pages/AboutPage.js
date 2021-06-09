import React from "react";
import selfImg from "../images/selfImg.jpg"

function AboutPage() {
  return (
    <div className="pl-5 pt-5">
        <div className="col-md-8 ">
          <img alt="self" src={selfImg} width="350" height="450" align="left" className="border mr-5"/>
          <span className="aboutMeText">
            By way of introduction, my name is Chris and I graduated from the University of Miami. 
            I am a Full Stack Web Developer in JavaScript, with experience in HTML5, CSS3, and React to using Node.js, as well as MySQL/MongoDB and building apps using a mobile first design.  
            I enjoy solving problems and building things from scratch or fixing things already started my myself or others. 
            I'm a team player, and can handle difficult tasks on my own, a leader when I can be and a good follower when help is needed.
          </span>
        </div>
    </div>
  );
}

export default AboutPage;
