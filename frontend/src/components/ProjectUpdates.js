import React from "react";

class ProjectUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {updates: props.data};
  }

  render() {
    return (
      <React.Fragment>
        {this.state.updates.map((update, index) => {
          return (
            <h4>{update.title}</h4>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ProjectUpdates;
