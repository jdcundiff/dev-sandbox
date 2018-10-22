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
      <div>
        {rows}
      </div>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.array.isRequired
};

export default Projects;
