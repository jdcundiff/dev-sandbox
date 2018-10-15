import React from "react";
import Sidebar from "./Sidebar";
import CenterPage from "./CenterPage";

class App extends React.Component {
  render() {
    {/*
      * Each component uses DataProvider to fetch data
      * using Django Apps as the backend to serve the data
    */}
    return (
      <React.Fragment>
        <div className="columns is-mobile">
          <Sidebar/>
          <CenterPage/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
