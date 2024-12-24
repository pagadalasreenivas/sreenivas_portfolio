import React from "react";
import TypewriterComponent from "typewriter-effect";
export default function Type(){
    return(
        <TypewriterComponent  options={{strings:["Software Developer","Java and React Full-Stack Developer"]
            ,autoStart:true,loop:true,deleteSpeed:50}} />
    );
}