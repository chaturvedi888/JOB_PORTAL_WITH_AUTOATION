// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearAllUserErrors, logout } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { LuMoveRight } from "react-icons/lu";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import MyJobs from "../components/MyJobs";
import JobPost from "../components/JobPost";
import Applications from "../components/Applications";
import MyApplications from "../components/MyApplications";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [componentName, setComponentName] = useState("My Profile");

  const { isAuthenticated, error, user } = useSelector((state) => ({
    loading: state.user.loading,
    isAuthenticated: state.user.isAuthenticated,
    error: state.user.error,
    user: state.user.user,
  }));

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully.");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, isAuthenticated, navigateTo]);

  const renderComponent = () => {
    switch (componentName) {
      case "My Profile":
        return <MyProfile />;
      case "Update Profile":
        return <UpdateProfile />;
      case "Update Password":
        return <UpdatePassword />;
      case "Job Post":
        return <JobPost />;
      case "My Jobs":
        return <MyJobs />;
      case "Applications":
        return <Applications />;
      case "My Applications":
        return <MyApplications />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <section className="account">
      <div className="component-header">
        <p>Dashboard</p>
        <p>
          Welcome! <span>{user?.name}</span>
        </p>
      </div>
      <div className="container">
        <div className={show ? "sidebar showSidebar" : "sidebar"}>
          <ul className="sidebar_links">
            <h4>Manage Account</h4>
            {["My Profile", "Update Profile", "Update Password"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    setComponentName(item);
                    setShow(!show);
                  }}
                  aria-label={`Go to ${item}`}
                >
                  {item}
                </button>
              </li>
            ))}
            {user?.role === "Employer" && (
              <>
                <li>
                  <button
                    onClick={() => {
                      setComponentName("Job Post");
                      setShow(!show);
                    }}
                    aria-label="Post New Job"
                  >
                    Post New Job
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setComponentName("My Jobs");
                      setShow(!show);
                    }}
                    aria-label="View My Jobs"
                  >
                    My Jobs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setComponentName("Applications");
                      setShow(!show);
                    }}
                    aria-label="View Applications"
                  >
                    Applications
                  </button>
                </li>
              </>
            )}
            {user?.role === "Job Seeker" && (
              <li>
                <button
                  onClick={() => {
                    setComponentName("My Applications");
                    setShow(!show);
                  }}
                  aria-label="View My Applications"
                >
                  My Applications
                </button>
              </li>
            )}
            <li>
              <button onClick={handleLogout} aria-label="Logout">
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className="banner">
          <div
            className={
              show ? "sidebar_icon move_right" : "sidebar_icon move_left"
            }
          >
            <LuMoveRight
              onClick={() => setShow(!show)}
              className={show ? "left_arrow" : "right_arrow"}
            />
          </div>
          {renderComponent()}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
