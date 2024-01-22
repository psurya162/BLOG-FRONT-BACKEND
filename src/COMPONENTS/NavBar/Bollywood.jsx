import React, { useContext } from "react";
import { Store } from "../../Store/Store";
import { NavLink } from "react-router-dom";

const Bollywood = () => {
  const { data } = useContext(Store);

  // Filter Bollywood data post
  const hollywoodPosts = data.filter((item) => item.category === "BOLLYWOOD");

  // Slice the array to get 8 items for left side and 8 for right side
  const leftSidePosts = hollywoodPosts.slice(0, 8);
  const rightSidePosts = hollywoodPosts.slice(8, 9);
  const rightSideSmallPosts = hollywoodPosts.slice(10, 16);

  return (
    <>
      <div className="Main">
        <div className="Left-side">
          <h2 className="Headingg">BOLLYWOOD</h2>
          {leftSidePosts.map((item, index) => (
            <div key={index} className="Post">
              <div className="Image-Container">
                <NavLink to={`/dynamic/${item.id}`}>
                  <img src={item.image} alt="" />
                </NavLink>
              </div>
              <div className="Content-Container">
                <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
                  <h3>{item.name.slice(0, 20)}...</h3>
                </NavLink>
                <p>{item.description.slice(0, 150)}...</p>
                <p className="Category-name">{item.category}:16-12-23</p>
              </div>
            </div>
          ))}
        </div>

        <div className="Right-side">
          <h2 className="Headingg">TOP POSTS</h2>
          {rightSidePosts.map((item, index) => (
            <div key={index} className="Top-Post-bottom-Big-image">
              <div className="Top-Post-bottom-BigImage">
                <NavLink to={`/dynamic/${item.id}`}>
                  <img src={item.image} alt="" />
                </NavLink>
              </div>
              <div className="Top-Post-bottom-name">
                <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
                  <p>{item.name.slice(0, 20)}...</p>
                </NavLink>
                <p>
                  <span className="Top-post-small-category">
                    {item.category}
                  </span>{" "}
                  :December 21 2023
                </p>
              </div>
            </div>
          ))}
          <hr />
          {rightSideSmallPosts.map((item, index) => (
            <div key={index} className="Top-Post-Small-Container">
              <div className="Top-Post-Small-Content-image">
                <NavLink to={`/dynamic/${item.id}`}>
                  <img className="Small-Image-Mobile" src={item.image} alt="" />
                </NavLink>
              </div>
              <div className="Top-Post-Small-Content-Name">
                <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
                  <p>{item.name.slice(0, 20)}...</p>
                </NavLink>
                <p>
                  <span className="Top-post-small-category">
                    {item.category}
                  </span>{" "}
                  :Dec 21 23
                </p>
              </div>
              <p className="indexNumber">{index + 2}</p>
            </div>
          ))}
          <hr />

          <div className="Advertisement-Card">
            <img src="https://imgs.search.brave.com/OcqN8f7pkz6jan4xXtQdSBoBLIeKIWbrX6YlaPpkieg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3L2Jh/L2YxL2E3YmFmMTJl/Yzc3Y2VlNjViY2Iz/NWY1Y2VmMjcyZDZi/LmpwZw" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bollywood;
