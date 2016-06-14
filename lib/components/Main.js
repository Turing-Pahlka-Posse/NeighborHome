import React from 'react';

export default class Main extends React.Component {

  render() {
    return (
      <div id="menu">
        <div id="input-addresses">
          <h1 id="main-title">NeighborHome</h1>
            <div className="ui icon input">
              <i className="marker icon"></i>
              <input type="text" name="Address 1" id="Address_1" defaultValue="1510 Blake st. Denver CO" className="item" ></input>
            </div>
            <div className="ui icon input">
              <i className="marker icon"></i>
              <input type="text" name="Address 2" id="Address_2" defaultValue="Elkhart Elementary Aurora CO" className="item" ></input>
            </div>
            <div className="ui icon input">
              <i className="marker icon"></i>
              <input type="text" name="Address 3" id="Address_3" defaultValue="Denver Art Museum" className="item" ></input>
            </div>
            <div className="ui disabled icon input">
              <i className="dollar icon"></i>
              <input type="text" name="Max Price" id="Max_Price" defaultValue="Coming soon" className="price" ></input>
            </div>

            <div className="ui icon buttons segment">
              <button className="ui button"><i className="fa fa-bus"></i></button>
              <button className="ui button"><i className="fa fa-bicycle"></i></button>
              <button className="ui button"><i className="fa fa-car"></i></button>
            </div>
            <input type="submit" className="ui teal basic button" id="submit-button" defaultValue="Find neighborhoods" ></input>
        </div>
      </div>
    );
  }
}
