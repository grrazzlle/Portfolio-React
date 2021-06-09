import React from "react";
import Project from "../components/Project.js"
import GoogleBooks from "../images/GoogleBooksSearch.png"
import fitness from "../images/fitness.png"
import controller from "../images/controller.png"
import budget from "../images/budget.jpg"
import facebook from "../images/facebook.png"
import wallet from "../images/wallet.jpg"

function PortfolioPage() {
  return (
    <div>
      <main>
        <div className="container pl-md-5 mt-5">
          <div className="row marginBottom">
            <Project img={GoogleBooks} title="Google Books" href="https://grrazzlle-google-books.herokuapp.com" />
            <Project img={fitness} title="Fitness Tracker" href="https://grrazzlle-fitness-tracker.herokuapp.com" />
          </div>
          <div className="row marginBottom">
            <Project img={controller} title="Scratch Games" href="https://grrazzlle.github.io/coding-bootcamp/Module-7/scratch/index.html" />
            <Project img={budget} title="Budget Tracker" href="https://grrazzlle-budget.herokuapp.com/" />
          </div>
          <div className="row marginBottom">
            <Project img={facebook} title="Facebook Marketer Tool" href="https://modernmediamichael.github.io/firstproject/" />
            <Project img={wallet} title="Wallet Chain" href="https://infinite-plains-92576.herokuapp.com/" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default PortfolioPage;
