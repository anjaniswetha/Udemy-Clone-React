import React from "react";
import "./headerPrimary.css";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function HeaderPrimary() {
  return (
    <div className="headerPrimary">
      <div className="left part">
        <div className="udemyLogo">
          <img src="..//logo.jpg" className="logo" alt="logo"></img>
        </div>
        <div className="categoriesDiv">
          <span className="categories">Categories</span>
        </div>
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input className="searchBar" placeholder="Search for anything"></input>
      </div>
      <div className="right part">
        <div className="businessDiv">
          <span className="business">Udemy for Business</span>
        </div>
        <div className="teachDiv">
          <span className="teach">Teach on Udemy</span>
        </div>
        <div className="myCoursesDiv">
          <span className="myCourses">My courses</span>
        </div>
        <div className="wishlistDiv">
          <FavoriteBorderOutlinedIcon className="icon" />
        </div>
        <div className="cartDiv">
          <ShoppingCartOutlinedIcon className="icon" />
        </div>
        <div className="notificationDiv">
          <NotificationsNoneOutlinedIcon className="icon" />
        </div>
        <div className="avatarDiv">
          <img src="..//avatar.jpg" className="avatar" alt="avatar"></img>
        </div>
      </div>
    </div>
  );
}

export default HeaderPrimary;