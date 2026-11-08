import React, { useEffect, useRef } from "react";

// Three.js is loaded on demand so the page text paints before the 3D does.
function Scene3D({ name, input, className = "" }) {
  const host = useRef(null);

  useEffect(() => {
    let stop;
    let gone = false;
    Promise.all([import("./scenes"), document.fonts.ready]).then(([{ mount }]) => {
      if (!gone) stop = mount(host.current, name, input);
    });
    return () => {
      gone = true;
      if (stop) stop();
    };
  }, [name, input]);

  return <div ref={host} className={`scene ${className}`} aria-hidden="true" />;
}

export default Scene3D;
