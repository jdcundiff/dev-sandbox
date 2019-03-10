import React from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Skills from "./Skills";

class Bio extends React.Component {
  render() {
    const data = this.props.data[0];
    return (
      <div className="level">
        <div className="level-left">
            <div className="level-item">
              <figure className="image is-96x96">
                <img className="is-rounded" src={data.image} alt="Bio image"/>
              </figure>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <div className="title is-4">{data.first_name + ' ' + data.last_name}</div>
                <div className="heading">{data.title} {data.objective ? (<p className="heading">Objective</p>) : ''}</div>
              </div>
            </div>
            {/*
          <div className="columns is-multiline is-mobile">
            <DataProvider endpoint="api/skills/" render={data => <Skills data={data} />} />
          </div>
          */}
        </div>
      </div>
    );
  }
}

Bio.propTypes = {
  data: PropTypes.array.isRequired
};

export default Bio;
