import React from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Skills from "./Skills";

class Bio extends React.Component {
  render() {
    const data = this.props.data[0];
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={data.image} alt="Bio image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{data.first_name + ' ' + data.last_name}</p>
            <p className="subtitle is-6">{data.title}</p>
            <DataProvider endpoint="api/skills/" render={data => <Skills data={data} />} />
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item">
            <div className="buttons has-addons is-right">
                <a className="button is-white" href={data.github}>
                  <span className="icon is-medium">
                    <i className="fab fa-github"></i>
                  </span>
                </a>
                <a className="button is-white" href={data.linkedin}>
                  <span className="icon is-medium">
                      <i className="fab fa-linkedin"></i>
                  </span>
                </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

Bio.propTypes = {
  data: PropTypes.array.isRequired
};

export default Bio;
