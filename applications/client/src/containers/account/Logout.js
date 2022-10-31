import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../../App";
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/auth/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        // dispatch({ type: "USER", payload: false });
        navigate("/login", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
