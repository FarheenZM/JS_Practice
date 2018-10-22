import React, {Component} from "react";

class Contact extends Component{

  clearContent(){
    document.getElementById('main-content').innerHTML = "";
  }

  componentDidMount(){
    this.clearContent();
  }

  render(){
    return(
      <h1>Contact here</h1>
    )
  }
}

// const Contact = () => (
//     <h1>Contact here</h1>
// )

export default Contact;
