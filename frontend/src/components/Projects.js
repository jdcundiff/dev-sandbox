import React from "react";
import PropTypes from "prop-types";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Projects</p>
        </header>
        <div className="card-content">
          <div className="media-content">
          </div>
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array.isRequired
};

export default Projects;
