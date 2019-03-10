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
      <div>
        <div className="columns is-multiline is-mobile">
          <Sidebar/>
        </div>
        <div className="columns is-multiline is-mobile">
          <CenterPage/>
        </div>
      </div>
    );
  }
}

export default App;
