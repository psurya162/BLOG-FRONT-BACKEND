import React, { useContext } from "react";
import { Store } from "../../Store/Store";
import { NavLink } from "react-router-dom";

const Technology = () => {
  const { data } = useContext(Store);

  // Filter technology data post
  const hollywoodPosts = data.filter((item) => item.category === "TECHNOLOGY");

  // Slice the array to get 8 items for left side and 8 for right side or rightsidesmaalpost
  const leftSidePosts = hollywoodPosts.slice(0, 8);
  const rightSidePosts = hollywoodPosts.slice(8, 9);
  const rightSideSmallPosts = hollywoodPosts.slice(10, 16);

  return (
    <>
      <div className="Main">
        <div className="Left-side">
          <h2 className="Headingg">TECHNOLOGY</h2>
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
                  <p>{item.name.slice(0,20)}...</p>
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
            <img src="https://imgs.search.brave.com/5bE0bYYe-W-5oC6EOMtj7Qx0aGWa5B99u2K6SH66WPs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9leGNo/YW5nZTRtZWRpYS5n/dW1sZXQuY29tL25l/d3MtcGhvdG8vMTA1/MTM2LUhERkNTdW1t/ZXJUcmVhdHMuanBn" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
