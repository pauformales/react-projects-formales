import React from "react";

const MapSection = () => {
  return (
    <section className="w-full">
      <iframe
        className="w-full h-[500px] border-0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=frontline%20christian%20academy&t=&z=13&ie=UTF8&iwloc=&output=embed"
        allowFullScreen
        title="Google Map - Frontline Christian Academy"
      ></iframe>
    </section>
  );
};

export default MapSection;
