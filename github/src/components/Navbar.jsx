import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { GoIssueOpened } from "react-icons/go";
import { BiGitPullRequest } from "react-icons/bi";
import { GoInbox } from "react-icons/go";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-left">
        <div>
          <RxHamburgerMenu
            style={{
              fontSize: "25px",
              border: ".5px solid white",
              padding: "1px",
            }}
          />
        </div>
        <div>
          <BsGithub style={{ fontSize: "35px" }} />
        </div>
        <div>
          <p style={{ fontSize: "20px" }}>Dashbord</p>
        </div>
      </div>
      <div className="Navbar-right">
        <div className="Search-bar">
          <BsSearch style={{ fontSize: "20px" }} />
          <input
            type="text"
            style={{ width: "90%", height: "100%", border: "none" }}
          />
        </div>
        <div style={{ height: "50%", margin: "auto" }}>
          <MdAdd
            style={{
              color: "white",
              fontSize: "20px",
              margin: "auto",
              padding: "4px",
            }}
          />
        </div>
        <div style={{ height: "50%", margin: "auto" }}>
          <GoIssueOpened
            style={{
              color: "white",
              fontSize: "20px",
              margin: "auto",
              padding: "4px",
            }}
          />
        </div>
        <div style={{ height: "50%", margin: "auto" }}>
          <BiGitPullRequest
            style={{
              color: "white",
              fontSize: "20px",
              margin: "auto",
              padding: "4px",
            }}
          />
        </div>
        <div style={{ height: "50%", margin: "auto" }}>
          <GoInbox
            style={{
              color: "white",
              fontSize: "20px",
              margin: "auto",
              padding: "4px",
            }}
          />
        </div>
        <div style={{ height: "50%", margin: "auto" ,width:"40px",borderRadius:"50%" }}>
          <img
            src="https://avatars.githubusercontent.com/u/99678086?v=4"
            alt=""
            style={{ maxWidth: "100%",borderRadius:"50%" }}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
