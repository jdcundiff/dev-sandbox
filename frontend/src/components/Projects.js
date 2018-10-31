import React from "react";
import PropTypes from "prop-types";
import Project from "./Project"

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: props.data};
  }

  render() {
    return (
      <React.Fragment>
        {this.state.projects.map((project, index) => {
          return (
            <Project project={project} key={index}/>
          );
        })}
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array.isRequired
};

export default Projects;
