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
          </div>
          <div className="content">
            {project.description}
          </div>
          <div className="media-content">
            <div className="field is-grouped is-grouped-multiline">
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Project</span>
                  <a className="tag is-link" href={project.github}>
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>

              {/*TODO: Add db table for stack and remove hardcoding */}
              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">React</span>
                  <span className="tag is-info">16.5.2</span>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Django</span>
                  <span className="tag is-info">2.1.2</span>
                </div>
              </div>

              <div className="control">
                <div className="tags has-addons">
                  <span className="tag is-dark">Python</span>
                  <span className="tag is-info">3.6.6</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectRow;
