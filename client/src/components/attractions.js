import React, {Component} from 'react';

class Attractions extends Component{

  clearContent(){
    document.getElementById('main-content').innerHTML = "";
  }

  componentDidMount(){
    this.clearContent();
  }

  render(){
    return(
      <h1>Attractions will come here</h1>
    )
  }
}

// const Attractions = () => (
//   <h1>Attractions</h1>
// )

export default Attractions;
