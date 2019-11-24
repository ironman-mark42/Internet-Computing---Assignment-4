import React, { Component } from 'react';


class Blog1 extends Component {
  render() {
    return (
      <div className="item1">
      <table>
      <tr><td className="date2" ><h1>Boston Dynamics</h1></td><td className="date1">Date : 21/11/19</td></tr>
      <tr ><td colspan="2"><p>With its viral videos, Boston Dynamics will always be a robotics company to keep an eye on. But that is not why we will be watching in 2019. During his keynote at the Robotics Summit & Expo, Boston Dynamics founder Marc Raibert announced plans to commercialize SpotMini in 2019. This is the first robot Boston Dynamics will commercialize in its 27-year history. We already saw a glimpse of SpotMini inspecting construction sites in Japan, providing insight into potential real-world applications. Not only is 2019 an important year for Boston Dynamics, it is for legged robots in general. ANYbotics and Ghost Robotics are two other companies trying to find real-world homes for legged robots.
  </p></td></tr>

  <tr><td className="date2"><h1>Waymo</h1></td><td className="date1" >Date : 21/11/19</td></tr>
      <tr><td colspan="2"><p>The plan for all self-driving companies has always been to initially roll out services in geo-fenced areas. If you believed anything other than that, your expectations were out of whack. But a lot of folks are disappointed with the rollout of Waymo’s self-driving taxi service near Phoenix, Ariz. There are multiple reports about the limited drop-off and pick-up locations, limitations of the technology, and the fact Waymo’s self-driving vehicles still have safety drivers on board. Perhaps Waymo has lost confidence in its technology, or it is being extra cautious due to the fatal Uber self-driving car accident in 2018. Either way, this has played a role in curtailing the self-driving hype as people are re-setting their expectations. How will that impact funding in 2019? We will see. Waymo is still by far the autonomous vehicle leader, and the growth, or lack thereof, of its self-driving taxi service will give us a good barometer of where the industry is at.</p></td></tr>
<tr><td className="date2"><h1>UBTech</h1></td><td className="date1">Date : 21/11/19</td></tr>
      <tr><td colspan="2"><p > Building capable humanoid robots is extremely difficult. And it does not help that Boston Dynamics has set the bar so incredibly high with Atlas. UBTech, a Chinese company known for its toy robots that has raised nearly $1 billion with a $5 billion valuation, turned its Walker bipedal robot, which was introduced at CES 2018, into a full-blown humanoid this week at CES 2019. UBTech said its Walker robot “has the intelligence and capabilities to make a helpful impact in any home or business in the very near future.” That is unrealistic, of course, but it is good to see a well-backed consumer robotics company working on a humanoid robot.
</p></td></tr>
</table>


      </div>
    );
  }
}

export default Blog1;
