import React from "react";
import PropTypes from "prop-types";
import ProjectRow from "./ProjectRow"

class Projects extends React.Component {
  render() {
    const data = this.props.data;
    const rows = [];

    data.forEach((row) => {
      rows.push(
        <ProjectRow data={row}/>
      );
    });

    return (
      <React.Fragment>
        {rows}
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array.isRequired
};

export default Projects;
