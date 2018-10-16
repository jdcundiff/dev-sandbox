import React from "react";
import PropTypes from "prop-types";
import SkillRow from "./SkillRow";

class Skills extends React.Component {
  render() {
    const skills = this.props.data;
    const rows = [];

    skills.forEach((row) => {
      rows.push(
        <SkillRow data={row}/>
      );
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
}

Skills.propTypes = {
  data: PropTypes.array.isRequired
};

export default Skills;
