import React from "react";

class ProjectRow extends React.Component {
  render() {
    const project = this.props.data;
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <h2 className="title">{project.title}</h2>
            </div>
            <div className="media-content">
              <div className="subtitle tags">
                <span className="tag is-primary">Project</span>
                <a className="tag is-link" href={project.github}>
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            {project.description}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectRow;
