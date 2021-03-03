import React, { useState } from "react";
import Toast from "./Toast";

export default function ToastEx() {
  const [status, setStatus] = useState(false);
  const handleComplete = () => {
    setStatus(true);
  };
  return (
    <div className="exercise">
      <div className="toast-ex">
        {status ? (
          <Toast time={2000} setStatus={setStatus} />
        ) : (
          <button onClick={handleComplete} className="btn toast-open-btn">
            Click to complete
          </button>
        )}
      </div>
    </div>
  );
}
