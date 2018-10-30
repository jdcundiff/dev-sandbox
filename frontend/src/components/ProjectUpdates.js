import React from "react";

class ProjectUpdates extends React.Component {
  render() {
    const updates = this.props.data;
    const rows = [];

    updates.forEach((update) => {
      rows.push(
        <h4>{update.title}</h4>
      );
    });

    return (
      <React.Fragment>
        {rows}
      </React.Fragment>
    );
  }
}

export default ProjectUpdates;
