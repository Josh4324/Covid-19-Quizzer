import React from "react";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h2>COVID 19 AWARENESS QUIZZER</h2>
        <a className="play" href="/quiz">
          Play
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
