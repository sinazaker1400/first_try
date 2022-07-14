import React, { useState } from "react";
import Button from "./Button";

const StyleChanger = () => {
  


    return (
      <div className="clearFix App clearFix">
       <h1>A simple react component</h1>
    <SomeButtons />
       </div>
    )
  };
  function SomeButtons(){
    const [color, setColor] = useState("without color");
    const [font, setFont] = useState({first: "& with default font"});
    const [backgroundColor, setBackgroundColor] = useState("without backgroundColor");
    const [size, setSize] = useState("13");
   
return(
  <>
  <p style={{color:color, backgroundColor:backgroundColor, fontSize:size + "px"}} className={font}>
 The style is</p>
 <Button 
type="button" 
eventHandler={() => setColor("blue")}
text="blue text" color="blue" />

<Button 
type="button" 
eventHandler={() => setFont("Rock3D")} 
className="Rock3D"  
text="Rock 3D" 
color="Black" />

<Button 
type="button" 
eventHandler={() => setBackgroundColor("AntiqueWhite")}
text="AntiqueWhite background" backgroundColor="AntiqueWhite" />

<Button 
type="button" 
eventHandler={() => setSize("37")} 
text="37" 
color="Black" 
width="150px"
margin="9px"
fontSize="37"
padding="15px"/>
</>
)

  }

    export default StyleChanger;
    