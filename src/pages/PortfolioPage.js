import React from "react";
import Project from "../components/Project.js"
import html from "../images/html.jpg"
import GoogleDrive from "../images/GoogleDrive.jpg"
import controller from "../images/controller.png"
import javascript from "../images/javascript.png"
import facebook from "../images/facebook.png"
import wallet from "../images/wallet.jpg"

function PortfolioPage() {
  return (
    <div>
      <main>
        <div className="container pl-md-5 mt-5">
          <div className="row">
            <Project img={html} title="HTML Prework" href="https://grrazzlle.github.io/coding-bootcamp/Module-3/prework-about-me/index.html" />
            <Project img={GoogleDrive} title="Google Drive" href="https://drive.google.com/drive/u/0/folders/1hEnML93InfRaMqJ18FSV_XTrpXNcNu4r" />
          </div>
          <div className="row">
            <Project img={controller} title="Scratch Games" href="https://grrazzlle.github.io/coding-bootcamp/Module-7/scratch/index.html" />
            <Project img={javascript} title="Javascript Prework" href="https://grrazzlle.github.io/coding-bootcamp/Module-6/jiggle-into-javascript-updated/index.html" />
          </div>
          <div className="row">
            <Project img={facebook} title="Facebook Marketer Tool" href="https://modernmediamichael.github.io/firstproject/" />
            <Project img={wallet} title="Wallet Chain" href="https://infinite-plains-92576.herokuapp.com/" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;
