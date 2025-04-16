import React from "react";

const Associates = () => {
  return (
    <section className="mt-[154px] sm:mt-[110px]">
      <div className="container">
        <div className="py-20 text-center">
          <small className="uppercase text-accent text-xs">
            Trusted Affiliates
          </small>
          <h2 className="text-header text-balance leading-snug mb-4 text-primary">
            Our Advocacy Associates
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <img src="./src/image/logo-fwc.png" alt="logo-fwc" />
            <img src="./src/image/logo-fbs.png" alt="logo-fbs" />
            <img src="./src/image/logo-fca.png" alt="logo-fca" />
            <img src="./src/image/logo-ftw.png" alt="logo-ftw" />
            <img src="./src/image/logo-pfm.png" alt="logo-pfm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Associates;
