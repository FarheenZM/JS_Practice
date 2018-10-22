import React, {Component} from "react";

class About extends Component{

  clearContent(){
    document.getElementById('main-content').innerHTML = "";
  }

  componentDidMount(){
    this.clearContent();
  }

  render(){
    return(
      <h1>About details here</h1>
    )
  }
}


// const About = () => (
//     <h1>About page</h1>
// )

export default About;
