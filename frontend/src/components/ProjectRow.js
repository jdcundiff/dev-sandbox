import React from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import ProjectUpdates from "./ProjectUpdates";
import ProjectTags from "./ProjectTags";

class ProjectRow extends React.Component {
  render() {
    const project = this.props.data;
    return (
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{project.title}</p>
              <p className="subtitle is-6" dangerouslySetInnerHTML={{__html: project.description}}/>
            </div>
          </div>
          <div className="content">
            <DataProvider endpoint="api/updates/" render={data => <ProjectUpdates data={data} />} />
          </div>
          <div className="media">
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

                <DataProvider endpoint="api/tags/" render={data => <ProjectTags data={data} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectRow.propTypes = {
  data: PropTypes.array.isRequired
};

export default ProjectRow;
