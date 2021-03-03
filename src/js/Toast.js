import React from "react";

export default function Toast({ time, setStatus }) {
  const handleCloseToast = () => {
    setStatus(false);
  };
  // useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     }
  // }, [input])
  return (
    <div className="success-toast">
      <div className="toast-control">
        <button onClick={handleCloseToast} className="close-btn">
          &#10006;
        </button>
      </div>
      <div className="toast-wrapper">
        <div className="toast-msg-icon-wrapper">
          <div className="toast-msg-icon">&#10004;</div>
        </div>
        <div className="toast-msg-wrapper">
          <div className="title">Success!</div>
          <div className="description">
            The task has been finished. Close button or wait for timer.
          </div>
        </div>
      </div>
      <div className="toast-time-left-indicator">
        <div className="toast-time-done"></div>
      </div>
    </div>
  );
}
