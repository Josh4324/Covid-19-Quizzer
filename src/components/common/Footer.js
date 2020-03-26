import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        All questions were extracted from
        <a href="https://www.cdc.gov/coronavirus" className="cdc">
          &nbsp; CDC website
        </a>
        <p className="foot"> Designed by Joshua Adesanya | Copyright 2020 </p>{" "}
      </footer>
    </div>
  );
};

export default Footer;
