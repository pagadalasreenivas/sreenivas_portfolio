import React from "react";
import TypewriterComponent from "typewriter-effect";
export default function Type(){
    return(
        <TypewriterComponent  options={{strings:["Software Developer","Mern Stack"]
            ,autoStart:true,loop:true,deleteSpeed:50}} />
    );
}