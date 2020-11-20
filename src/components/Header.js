import React, { Component } from "react";
import NavTabs from "./NavTabs";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

class Header extends Component {
  state = {
    currentPage: "AboutPage"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    return <Switch>
      <Route exact path="/Portfolio-React/ContactPage" component={ContactPage} />
      <Route exact path="/Portfolio-React/AboutPage" component={AboutPage} />
      <Route exact path="/Portfolio-React/PortfolioPage" component={PortfolioPage} />
      <Redirect to="/Portfolio-React/AboutPage" />
    </Switch>

  };

  render() {
    return (
      <div>
        <Router>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
        </Router>
      </div>
    );
  }
}

export default Header;
