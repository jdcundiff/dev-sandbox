import React from "react";

class ProjectRow extends React.Component {
  render() {
    const project = this.props.data;
    return (
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              <small className="is-right">
                <a href={project.github}>
                    {project.github}
                </a>
              </small>
            </p>
          </div>
        </div>
      </article>
    );
  }
}

export default ProjectRow;
