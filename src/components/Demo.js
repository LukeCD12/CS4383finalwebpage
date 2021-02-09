import React from "react";
import { NavLink } from "react-router-dom";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player"

function Demo() {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
    tl.to(screen, {
      duration: 1.2,
      height: "100%",
      ease: Power3.easeInOut,
    });
    tl.to(screen, {
      duration: 1,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });
    tl.set(screen, { left: "-100%" });
    TweenMax.to(body, .3, {css: {
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut
    }}).delay(2);
    return () => {
      TweenMax.to(body, 1, {css: {
        opacity: "0",
        pointerEvents: 'none'
      }});
  }
  });
  return (
    <React.Fragment>
      <div className="load-container">
        <div className="load-screen2" ref={(el) => (screen = el)}></div>
      </div>
      <div data-barba="container" className="Contact">
        <div ref={(el) => (body = el)} className="Headd">
          <div>Demo Here</div>
          <div className="video"><ReactPlayer url="https://www.youtube.com/watch?v=SNvDUO42Hys" /></div>
          <p className="info">Lorem ipsum dolor sit amet</p>
          <NavLink to="/" className="button">Home</NavLink>
          <NavLink to="/report" className="button">Report</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Demo;
