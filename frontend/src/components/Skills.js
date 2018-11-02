import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {skills: props.data};
  }

  render() {
    return (
      <React.Fragment>
        {this.state.skills.map((skill, index) => {
          return (
            <div className="column is-one-third-desktop is-half-touch">
              <Skill skill={skill} key={index}/>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default Skills;
