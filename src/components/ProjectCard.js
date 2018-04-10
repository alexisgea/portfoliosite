import React, { Component } from "react";

class ProjectCard extends Component {
  render() {
    const { image, index, link, title } = this.props;

    return (
      <a className="card" href={link} target="_blank">
        <span className="image">
          <img src={image} alt={title} />
        </span>
        {title}
      </a>
    );
  }
}

export default ProjectCard;
