import Helmet from "react-helmet";
import Link from "gatsby-link";
import projects from "../projects";
import ProjectCard from "../components/ProjectCard";
import React from "react";

class Index extends React.Component {
  render() {
    return (
      <div id="main" className="wrapper style1">
        <div className="container">
          <h2>Projects</h2>

          <section>
            <div className="flex-container">
              {projects.map((project, index) => (
                <ProjectCard {...project} index={index} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Index;
