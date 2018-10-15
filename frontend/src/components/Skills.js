import React from "react";
import PropTypes from "prop-types";

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Skills</p>
        </header>
        <div className="card-content">
          <div className="media-content">
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default Skills;
