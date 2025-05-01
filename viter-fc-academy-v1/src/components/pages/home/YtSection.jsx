import React from "react";

const YtSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 mt-[200px] mb-10">
      <div className="w-full max-w-[1380px] px-4">
        <div className="w-full h-0 mb-[200px]">
          <iframe
            className="w-full h-[500px] shadow-lg"
            src="https://www.youtube.com/embed/IfZIR11Zdn4?si=MW_srv6zj9Eb7v6C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YtSection;
