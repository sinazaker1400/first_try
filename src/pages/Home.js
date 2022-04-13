import React, { useState , useEffect } from "react";
import Button from "./Button";

const Home = () => {
  


    return (
      <div className="clearFix">
       <h1>Home</h1>
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





//<Styling />
  
  
  /*const Styling = () => {
    const [color, setColor] = useState("without color");
    const [font, setFont] = useState({first: "& with default font"});
    const [size, setSize] = useState("13");
    const [time, setTime] = useState(-1);
    const [backgroundColor, setBackgroundColor] = useState("without backgroundColor");

  

    useEffect(() => {
      setTime((time) => time + 1)},[color,font,size,backgroundColor]);


    return (
      <>
        <p className={font} style={{color:color,backgroundColor:backgroundColor, fontSize :`${size}px`}}>
          The style is {size}px {color} {font}.</p>
          <h1 className={font} style={{color:color, backgroundColor:backgroundColor, fontSize :`${size}px`}}>Here is it in bold</h1>
          <p>You have maked a change {time} times.</p>
          <Button 
type="button" 
eventHandler={() => setColor("blue")}
text="blue text" color="blue" />
 
 <Button 
type="button" 
eventHandler={() => setColor("red")}
text="red text" color="red" />
    <Button 
type="button" 
eventHandler={() => setBackgroundColor("AntiqueWhite")}
text="AntiqueWhite background" backgroundColor="AntiqueWhite" />

<Button 
type="button" 
eventHandler={() => setBackgroundColor("DarkSalmon")}
text="DarkSalmon background" backgroundColor="DarkSalmon" />

<Button 
type="button" 
eventHandler={() => setFont("Rock3D")} 
className="Rock3D"  
text="Rock 3D" 
color="Black" />

<Button 
type="button" 
eventHandler={() => setFont("PaletteMosaic")} 
className="PaletteMosaic"  
text="Palette Mosaic" 
color="Black" />
<input type="number"  title="enter size"  value={size} onChange={(e) => setSize(e.target.value)}></input>
</>
    );
    }
    */
    export default Home;
    