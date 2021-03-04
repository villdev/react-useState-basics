import React, { useState } from "react";
import avatarLink from "../images/avatar.jpeg";
import attachLink from "../images/attachment.svg";

export default function TwitterPost() {
  const [characterCount, setCharacterCount] = useState([0, 280]);
  const updateCharacterCount = (e) => {
    const count = e.target.value.length;
    setCharacterCount([count, 280]);
  };
  return (
    <div className="exercise">
      <div className="twiter-post">
        <div className="tweet-template">
          <div className="avatar-wrapper">
            <img src={avatarLink} alt="" />
          </div>
          <textarea
            onChange={updateCharacterCount}
            className="tweet"
            name="tweet"
            id=""
            placeholder="Write..."
          ></textarea>
        </div>
        <div className="tweet-actions">
          <button
            className="tweet-btn"
            disabled={characterCount[0] > characterCount[1]}
          >
            Tweet
          </button>

          <div className="circular-progress">
            <div className="circular-track">
              <div className="circle">
                <div
                  className="progress"
                  style={
                    characterCount[0] > characterCount[1]
                      ? { color: "red" }
                      : {}
                  }
                >
                  {characterCount[0]} / {characterCount[1]}
                </div>
              </div>
            </div>
          </div>
          <img className="attachIcon pointing-cursor" src={attachLink} alt="" />
          {/* <img className="attachIcon" src={attachLink} alt="" />
          <div className="circular-progress">
            <div className="circular-track">
              <div className="circle">
                <div
                  className="progress"
                  style={
                    characterCount[0] > characterCount[1]
                      ? { color: "red" }
                      : {}
                  }
                >
                  {characterCount[0]}/{characterCount[1]}
                </div>
              </div>
            </div>
          </div>
          <button
            className="tweet-btn"
            disabled={characterCount[0] > characterCount[1]}
          >
            Tweet
          </button> */}
        </div>
      </div>
    </div>
  );
}
