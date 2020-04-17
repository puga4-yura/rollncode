import React, {Component} from 'react';
import * as axios from 'axios'

class Clients extends Component {

  componentDidMount() {
      this.props.fetchData("https://randomuser.me/api/?results=100");
  };

  render() {

    debugger;
    console.log(this.props);


    if (typeof this.props.state.clients !== "undefined" && typeof this.props.state.clients.results !== "undefined") {
      return (
        <div>
          {this.props.state.clients.results.map((person, index) => {
            return <div key={index}>
              <div>{index+1}</div>
              <img src={person.picture.medium}/>
              <div>{person.name.first}</div>
              <div>{person.name.last}</div>
            </div>
          })}
        </div>
      )
    }
    else {
      return 'Loading...';
    }
  }

}

export default Clients;