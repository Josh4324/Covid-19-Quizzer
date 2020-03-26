import React, { useEffect, useRef, useState } from "react";
import Data from "../../data.json";
let score = 0;

const Quiz = () => {
  const shuffle = function(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  let refs = [ref1, ref2, ref3, ref4];
  const newData = Data.Data;
  console.log(newData);
  const data = shuffle(newData);
  let [stateData, setStateData] = useState(data);

  const subRef = useRef(null);

  let datapop = stateData.pop();
  console.log(stateData);

  useEffect(() => {
    console.log("render");
    return () => {};
  }, []);

  let answers = datapop.Answers;
  let wrong = datapop.Wrong;
  let all = shuffle([...answers, wrong]);

  const onSubmit = evt => {
    let check = false;
    refs.map(item => {
      let circle = item.current.firstElementChild;

      if (circle.classList.contains("blue")) {
        check = true;
      }
    });

    if (check === true) {
      refs.map(item => {
        let circle = item.current.firstElementChild;
        if (
          circle.classList.contains("blue") &&
          item.current.textContent === wrong
        ) {
          score++;
          console.log(score);
          circle.classList.remove("blue");
          circle.classList.add("green");
        } else if (item.current.textContent === wrong) {
          circle.classList.add("green");
        }
      });
      evt.target.classList.add("none");
      evt.target.nextElementSibling.classList.remove("none");
    }
  };

  const onSelect = evt => {
    let arr = Array.from(evt.target.parentElement.children);
    arr.forEach(item => {
      item.children[0].classList.remove("blue");
    });
    evt.target.firstElementChild.classList.add("blue");
  };

  const onNext = evt => {
    evt.target.classList.add("none");
    evt.target.previousElementSibling.classList.remove("none");
    setStateData([...stateData]);
    refs.map(item => {
      let circle = item.current.firstElementChild;
      circle.classList.remove("blue");
      circle.classList.remove("green");
    });
  };

  return (
    <div>
      {stateData.length !== 0 ? (
        <div className="quiz">
          <div className="question">{datapop.Question}</div>
          <div className="options">
            <div ref={ref1} className="option" onClick={onSelect}>
              <div className="circle"></div>
              {all[0]}
            </div>
            <div ref={ref2} className="option" onClick={onSelect}>
              <div className="circle"></div>
              {all[1]}
            </div>
            <div ref={ref3} className="option" onClick={onSelect}>
              <div className="circle"></div>
              {all[2]}
            </div>
            <div ref={ref4} className="option" onClick={onSelect}>
              <div className="circle"></div>
              {all[3]}
            </div>
          </div>
          <button ref={subRef} onClick={onSubmit} className="button">
            Submit
          </button>
          <button ref={subRef} onClick={onNext} className="button none">
            Next
          </button>
        </div>
      ) : score > 2 ? (
        <div className="congrat">
          <h2>Congratulations</h2>
          <h5>You scored {(score / 5) * 100}% score</h5>
          <h3>Your quiz was completed successfully</h3>
          <a href="/quiz" className="pbutton">
            Play Again
          </a>
        </div>
      ) : (
        <div className="congrat">
          <h3>
            Hello please read the corona virus guidelines on the
            <a href="https://www.cdc.gov/coronavirus" className="cdc">
              &nbsp; CDC website
            </a>
          </h3>
          <h5>You scored {(score / 5) * 100}% score</h5>
          <h3>Your quiz was completed successfully</h3>
          <a href="/quiz" className="pbutton">
            Play Again
          </a>
        </div>
      )}
    </div>
  );
};

export default Quiz;
