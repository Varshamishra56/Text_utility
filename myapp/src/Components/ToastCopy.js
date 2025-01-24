import React, { useEffect, useRef } from "react";
import { Toast } from "bootstrap";

export default function ToastCopy(props) {
  const toastRef = useRef();

  useEffect(() => {
    if (props.toast) {
      const toastElement = toastRef.current;
      if (toastElement) {
        const toast = new Toast(toastElement);
        toast.show();
      }
    }
  }, [props.toast]);

  return (
    <div
      className="toast position-fixed bottom-0 end-0 m-3 bg-light border border-info shadow"
      ref={toastRef}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header bg-info text-white">
        <img
          src="./src/ImageFolder/Copy_icon_image.jpg"
          className="rounded me-2"
          alt="Icon"
          width="20"
          height="20"
        />
        <strong className="me-auto">
          {props.toast?.text || "Notification"}
        </strong>
        <small>Just now</small>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body text-dark">
        {props.toast?.message || "Your action was successful."}
      </div>
    </div>
  );
}
