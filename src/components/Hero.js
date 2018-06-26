import React from "react";

import {Grid, Header} from "semantic-ui-react";



const styles = {

  background: "url('/assets/images/spring.png') repeat",

  backgroundBlendMode: "multiply"

}



const Hero = () => (

  <Grid.Row color={"violet"} style={styles} verticalAlign={"middle"} centered >

    <Grid.Column width={12} textAlign={"center"} style={{margin: "50px 0"}}>

      <Header color={"yellow"} as={"h1"} style={{fontSize: "50px"}}>Clicky Game!</Header>
      
      <Header sub color={"yellow"} style={{fontSize: "24px"}}>Test your memory, click to earn points, but don't click on any more than once!</Header>

      <Header sub color={"yellow"} style={{fontSize: "24px"}}>Incorrect guess restarts the game.</Header>

    </Grid.Column>



  </Grid.Row>



);



export default Hero;