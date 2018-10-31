import React from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import ProjectUpdates from "./ProjectUpdates";
import ProjectTags from "./ProjectTags";

class Project extends React.Component {
  render() {
    const project = this.props.project;
    let cardStyle = {
      marginBottom: '10px',
    }

    return (
      <div style={cardStyle} className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{project.title}</p>
              <p className="subtitle is-6" dangerouslySetInnerHTML={{__html: project.description}}/>
            </div>
          </div>
          <div className="content">
            <DataProvider endpoint={'api/updates/' + project.id} render={data => <ProjectUpdates data={data} />} />
          </div>
          <div className="media">
            <div className="media-content is-clipped">
              <div className="field is-grouped is-grouped-multiline">
                <div className="control">
                  <div className="tags has-addons">
                    <span className="tag is-radiusless is-dark">{project.category == 'PR' ? 'Personal' : 'Work'} Project</span>
                    <a className="tag is-radiusless is-link" href={project.github}>
                      <i className={project.category == 'PR' ? 'fab fa-github' : 'fas fa-briefcase'}></i>
                    </a>
                  </div>
                </div>
                <DataProvider endpoint={'api/tags/' + project.id} render={data => <ProjectTags data={data} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  data: PropTypes.array.isRequired
};

export default Project;
