import React from "react";
import PropTypes from "prop-types";
import DataProvider from "./DataProvider";
import Skills from "./Skills";

class Bio extends React.Component {
  render() {
    const data = this.props.data[0];
    return (
      <div className="card">
        <div className="card-image is-hidden-mobile">
          <figure className="image">
            <img src={data.image} alt="Bio image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left is-hidden-tablet">
              <figure className="image is-96x96">
                <img className="is-rounded" src={data.image} alt="Bio image"/>
              </figure>
            </div>
            <div className="media-content has-text-centered">
              <div className="title is-4">{data.first_name + ' ' + data.last_name}</div>
              <div className="subtitle is-6">{data.title} {data.objective ? (<p className="heading">Objective</p>) : ''}</div>
            </div>
          </div>
          <div className="media-content is-clipped">
            <div className="columns is-multiline is-mobile">
              <DataProvider endpoint="api/skills/" render={data => <Skills data={data} />} />
            </div>
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
                <a className="button is-white" href={'mailto:'+data.email}>
                  <span className="icon is-medium has-text-warning">
                      <i className="fas fa-envelope"></i>
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
