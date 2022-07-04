import { useRef } from "react";
import Button from "../common/Button";

function VideoPlayer() {

const videoRef = useRef(null);

  const handelplay = () => {
    videoRef.current.play();
  }
  const handelpause = () => {
    videoRef.current.pause();
  }
  return (
    <div>
      <video data-testid="video-container" width="400" controls  ref={videoRef}>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
         
        />
      </video>
      <div>
        
        <Button work={handelplay} >
          PLAY
        </Button>
        <Button work = {handelpause}>
          PAUSE
        </Button>
        <Button>
          SKIP 30 SECONDS
        </Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
