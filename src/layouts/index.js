import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { Component } from "react";

import "../assets/sass/main.scss";
import MobileMenu from "../components/MobileMenu";

class Template extends Component {
  state = {
    isNavPanelVisible: false
  };

  handleToggleMenu = () => {
    this.setState({
      isNavPanelVisible: !this.state.isNavPanelVisible
    });
  };

  render() {
    const { location, children } = this.props;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    if (location.pathname === rootPath) {
    }

    return (
      <div
        className={`body ${
          this.state.isNavPanelVisible ? "navPanel-visible" : ""
        }`}
      >
        <MobileMenu onToggleMenu={this.handleToggleMenu} />
        <div id="page-wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children()}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Template;
