import React from "react";

class ProjectTags extends React.Component {
  render() {
    const tags = this.props.data;
    const rows = [];

    tags.forEach((tag) => {
      rows.push(
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">{tag.title}</span>
            <span className="tag is-info">{tag.info}</span>
          </div>
        </div>
      );
    });

    return (
      <React.Fragment>
        {rows}
      </React.Fragment>
    );
  }
}

export default ProjectTags;
