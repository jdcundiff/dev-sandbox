import React from "react";
import PropTypes from "prop-types";

class Bio extends React.Component {
  render() {
    const data = this.props.data[0];
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29313431_10208932088419947_7848933161550479360_n.jpg?_nc_cat=109&oh=95b7253dcb0802d30dbd06835c562f44&oe=5C3EB190" alt="Bio image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{data.first_name + ' ' + data.last_name}</p>
            <p className="subtitle is-6">{data.title}</p>
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
