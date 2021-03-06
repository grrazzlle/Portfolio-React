import React, { Component } from "react";
import NavTabs from "./NavTabs";
import AboutPage from "../pages/AboutPage";
import PortfolioPage from "../pages/PortfolioPage";
import ContactPage from "../pages/ContactPage";
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';

class Header extends Component {
  state = {
    currentPage: "/AboutPage"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    return <Switch>
      <Route path="/ContactPage" component={ContactPage} />
      <Route path="/AboutPage" component={AboutPage} />
      <Route path="/PortfolioPage" component={PortfolioPage} />
      <Redirect to="/AboutPage" />
    </Switch>

  };

  render() {
    return (
      <div>
        <Router basename={'/'}>
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
