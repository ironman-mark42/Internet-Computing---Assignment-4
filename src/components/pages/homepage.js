import React, { Component } from 'react';



class Homepage extends Component {
  render() {
    return (
      <div className="item1">
      <p id="opening">
       <h1>Three Top tier Robotics Companies to watch for in 2019:</h1>
       Oh yes! Its happening! Robotics made a huge leap. Check out out subscribers on the right and Click on the images to watch full blog post -
      </p>

<a href="./blog1"><img src={require('./Boston.jpg')} width='400' height='340' alt=''/></a>
<a href="./blog1"><img src={require('./Waymo.png')} width='400' height='340' alt=''/></a>
<a href="./blog1"><img src={require('./UBTech.jpg')} width='400' height='340' alt=''/></a>


      </div>
    );
  }
}

export default Homepage;
