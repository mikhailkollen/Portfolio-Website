import React from "react";

import InfiniteLooper from "../InfiniteLooper/InfiniteLooper";
import WhiteCircleIcon from "../../assets/WhiteCircleIcon";
import "./SkillsHorizontalLoop.css";

const marqueeTexts = [
  "React",
  "JavaScript",
  "Redux",
  "TypeScript",
  "HTML",
  "CSS",
  "Git",
  "Styled Components",
  "Node.js",
  "MongoDB",
];

const SkillsHorizontalLoop = () => {
  return (
    <InfiniteLooper speed={30} direction="left">
      <div className="contentBlock">
        {marqueeTexts.map((text, index) => (
          <React.Fragment key={text + index}>
            <div className="marquee-container">
              <p
                className={`horizontal-technology-text text${
                  index % 2 === 0 ? 1 : 2
                }`}
                style={{ width: `${100 / marqueeTexts.length}%` }}
              >
                {text}
              </p>

              <WhiteCircleIcon key={index}></WhiteCircleIcon>
            </div>
          </React.Fragment>
        ))}
      </div>
    </InfiniteLooper>
  );
};

export default SkillsHorizontalLoop;
