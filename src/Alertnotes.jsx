import React, { useEffect } from "react";

export default function Alert({ msg, type, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
return () => clearTimeout (timeout);
  }, [list , removeAlert]);
  return <p className={`text-white text-center  alert alert-${type}`}>{msg}</p>;
}

