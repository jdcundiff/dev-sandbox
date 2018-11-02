import React from "react";

class ProjectTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tags: props.data};
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.map((tag, index) => {
          return (
            <div className="control" key={index} >
              <div className="tags has-addons">
                <span className="tag is-radiusless is-dark">{tag.title}</span>
                {(tag.info && tag.info != '') ? (
                    <span className="tag is-radiusless is-info">{tag.info}</span>
                  ) : ('')}
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default ProjectTags;
