import React from "react";

const PageTitle = ({ img, title, link }) => {
  return (
    <div className="lg:w-[1137px] mb-10 pt-20 mx-auto">
      <div
        className="hero lg:h-[250px]  "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="  text-neutral-content">
          <div className="   p-3 rounded-lg ">
            <h1 className="mb-5 text-3xl font-bold">{title}</h1>
            <div className="btn-group ">
              <button className="btn btn-active">Home </button>
              <button className="btn">{link}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
