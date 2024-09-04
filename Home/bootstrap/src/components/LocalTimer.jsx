import { useEffect, useState } from "react";
import { AppName } from "./todo_components";

const Timer = () => {

  let [currentTime,setCurrentTime] = useState();


  useEffect(()=>{
    let IntervalId = setInterval(
      () => {
        setCurrentTime(Date())
      },1000
    );

    return () => {
      clearInterval(IntervalId);
    }
  },[]);

  return (
    <>
      <div className="Clock">
        <AppName content="Bharat Clock"></AppName>
        <p className="lead">
          This is the Clock that shows the time in Bharat at all times.
        </p>
        <p className="lead">
         {currentTime}
        </p>
      </div>
    </>
  );
};
export default Timer;
