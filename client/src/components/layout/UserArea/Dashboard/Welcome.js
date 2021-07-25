import React, { useContext, useEffect } from "react";

import TaskView from "./TaskView";

import AuthContext from "../../../../context/auth/authContext";
import PageChooser from "./PageChooser";

import "./TaskView.css"

// This is a landing page that the users arrive on when users first log in
const Welcome = () => {
  const userContext = useContext(AuthContext);

  const {
    loadUser,
    user,
    loading: userLoading,
  } = userContext;

  useEffect(() => {
    loadUser();
  }, [loadUser]);


  return (
    <div className="container-fluid px-4 h-100">
      {!userLoading && user !== null ? (
        <div className="d-flex py-5 flex-column ">
          <div
            className="card shadow mb-3 p-2 mx-auto mx-lg-0 mr-lg-auto"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body py-1 px-3">
              <h3 className="text-center m-0 font-weight-bold">
                Welcome, {user.name}.
              </h3>
            </div>
          </div>
          <div className="d-flex flex-row w-100 h-100 align-items-stretch justify-content-center">

            <div
              className="d-none d-lg-block card taskView flex-shrink-0 shadow mr-lg-4"
              style={{ borderRadius: "15px" }}
            >
              <div className=" card-body p-4">
                <TaskView />
              </div>
            </div>

            <div className="flex-shrink-1 choose">
              <PageChooser />
            </div>

          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
