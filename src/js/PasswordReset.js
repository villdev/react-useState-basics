import React, { useState, useCallback } from "react";
import showPwIcon from "../images/view-show.svg";
import hidePwIcon from "../images/view-hide.svg";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
}

export default function PasswordReset() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({
    pwError: false,
    confirmPwError: false,
  });

  const delayedCheckPassword = useCallback(
    debounce((pw) => {
      if (confirmPassword !== "") {
        if (confirmPassword === password) {
          setErrors((e) => {
            return { ...e, confirmPwError: false };
          });
        } else {
          setErrors((e) => {
            return { ...e, confirmPwError: true };
          });
        }
      }
      if (!/\d/.test(pw) || pw.length < 8) {
        setErrors((e) => {
          return { ...e, pwError: true };
        });
      } else if (pw.length >= 8 && /\d/.test(pw)) {
        setErrors((e) => {
          return { ...e, pwError: false };
        });
      }
    }, 500),
    []
  );
  //   const checkPassword = (pw) => {
  //       if(/^\d/.test(pw) || pw.length < 8) {
  //           setErrors(e => {return {...e, pwError: true }})
  //       }
  //   }
  const updatePassword = (e) => {
    setPassword(e.target.value);
    delayedCheckPassword(e.target.value);
  };
  const checkConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    // delayedCheckPassword(e.target.value);
  };
  return (
    <div className="exercise">
      <div className="password-reset">
        <div className="password-reset-header">
          <div className="password-reset-header__title">
            Create new password
          </div>
          <div className="password-reset-header__desc">
            Your new password must be different from previous used passwords.
          </div>
        </div>

        <form className="password-reset-form">
          <div className="new-password-wrapper">
            <label htmlFor="new-password">Password</label>
            <div className="new-password-input-wrapper">
              <input
                className="new-password-input"
                type="password"
                name="new-password"
                id="new-password"
                onChange={updatePassword}
                // onKeyDown={updatePassword}
              />
              <img src={hidePwIcon} alt="" />
            </div>
            <div
              className="new-password-details"
              style={errors.pwError ? { color: "red" } : {}}
            >
              Must be at least 8 characters with at least 1 number.
            </div>
          </div>
          <div className="confirm-password-wrapper">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="confirm-password-input-wrapper">
              <input
                className="confirm-password-input"
                type="password"
                name="confirm-password"
                id="confirm-password"
                onChange={checkConfirmPassword}
              />
              <img src={hidePwIcon} alt="" />
            </div>
            <div
              className="confirm-password-details"
              style={errors.confirmPwError ? { color: "red" } : {}}
            >
              Both passwords must match.
            </div>
          </div>
          <button type="submit" className="password-reset-btn">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
