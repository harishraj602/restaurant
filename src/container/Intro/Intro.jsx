import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {

  const vidRef = useRef();
  const [palyVideo,setPlayVideo]=useState(false)
  
  const handleVideo=()=>{
    setPlayVideo((prevPlayVideo)=>!prevPlayVideo)
    if(palyVideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        ref={vidRef}
        loop
        controls={false}
        muted
      ></video>

      <div className="app__video-overlay flex__center">
        <div 
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
        >
        {palyVideo
        ?(<BsPauseFill color="#fff" fontSize={30}/>)
        :<BsFillPlayFill color="#fff" fontSize={30}/>}
        </div>
      </div>
      
    </div>
  );
};
export default Intro;
