import React from "react";
import PropTypes from "prop-types";

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/29313431_10208932088419947_7848933161550479360_n.jpg?_nc_cat=109&oh=95b7253dcb0802d30dbd06835c562f44&oe=5C3EB190" alt="Bio image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
          </div>
        </div>
      </div>
    );
  }
}

Bio.propTypes = {
  data: PropTypes.array.isRequired
};

export default Bio;
