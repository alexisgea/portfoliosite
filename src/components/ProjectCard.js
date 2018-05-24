import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    const { gif, image, index, link, title } = this.props;

    return (
      <a className="card" href={link} target="_blank">
        <span className="image">
          <img className="static" src={image} alt={title} />
          <img src={gif || image} alt={title} />
        </span>
      </a>
    );
  }
}

export default ProjectCard;
