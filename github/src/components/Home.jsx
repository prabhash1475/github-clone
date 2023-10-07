import React from "react";
import "../styles/Home.css";
import { RiBookMarkLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="Home">
      <div className="Sidebar">
        <div className="Toprepo">
          <p>Top Repositories</p>
          <button>
            <RiBookMarkLine style={{ fontSize: "20px", background: "none" }} />
            {""} New
          </button>
        </div>
        <div className="Input">
            <input type="text" placeholder="Find a repositories" />
        </div>
      </div>
      <div className="Middlespace"> kya</div>
      <div className="Rishtsidebar">Aur</div>
    </div>
  );
};

export default Home;
