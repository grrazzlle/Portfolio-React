import React from "react";
import linkedin from "../images/linkedin.png"
import github from "../images/github.png"
import email from "../images/email.jpg"

function ContactPage() {
  return (
    <div className="pl-5 pt-5">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-lee-504678108/">
      <img alt="" src={linkedin} width="200" height="75" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/grrazzlle">
      <img alt="" src={github} width="200" height="120" /></a>
      <a target="_blank" rel="noopener noreferrer" href="mailto:Cel47@miami.edu">
      <img alt="" src={email} width="100" height="100" /></a>
    </div>
  );
}

export default ContactPage;
