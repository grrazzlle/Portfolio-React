import React from "react";
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import email from "../images/email.jpg"

function ContactPage() {
  return (
    <div className="pl-5 pt-5">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-lee-504678108/">
      <img alt="" src={linkedin} width="300" height="125" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/grrazzlle">
      <img alt="" src={github} width="250" height="150" /></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:Cel47@miami.edu">
      <img alt="" src={email} width="250" height="200" /></a>
    </div>
  );
}

export default ContactPage;
