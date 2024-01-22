import React, { useContext } from "react";
import "./Home.css";
import { Store } from "../../Store/Store";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { data } = useContext(Store);

  const randomdata = data.filter((item) => item.id % 16 === 0);
  const randomdata2 = data.filter((item) => item.id % 20 === 0);
  const randomdata3 = data.filter((item) => item.id % 18 === 0);

  return (
    <>
      <div className="Parent">
        <div className="Home-Image-Container">
          <div className="Left-side-image">
            <img
              className="LeftImagee"
              src="https://imgs.search.brave.com/ayVt3d31rTTQ_1RC68bP9FCP61FS-x7aPwY84d7FMv0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/d2d1LmVkdS9jb250/ZW50L2RhbS93ZWIt/c2l0ZXMvYmxvZy1u/ZXdzcm9vbS9ibG9n/L2ltYWdlcy9uYXRp/b25hbC8yMDIwL21h/cmNoL2FydGlmaWNp/YWwtaW50ZWxsaWdl/bmNlLmpwZw"
              alt=""
            />
          </div>
          <div className="Right-side-image">
            <div className="Image-1">
              <img
                className="Rightimagee"
                src="https://imgs.search.brave.com/1itVqadBwJrv40X8T1PWnxaEcA2IZ2Sbpslwy56kdZ0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/NTc5OTA1MC9waG90/by9icmlnaHRvbi1o/b3ZlLWFsYmlvbi12/LWJyZW50Zm9yZC1m/Yy1wcmVtaWVyLWxl/YWd1ZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9M1ZwUERU/Zno5R3BiczNwSGdC/QVozc0JNM2pMTmRB/VUc0cHRjaWpzLWNm/MD0"
                alt=""
              />
            </div>
            <div className="Image-2">
              <img
                className="Rightimagee"
                src="https://imgs.search.brave.com/3U5bbfNVC7WkoSy63fPEToEu8_wwY8zGRVJNk3E0zB0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgxLzc1LzE2/LzM2MF9GXzgxNzUx/NjE4X1JrRzBpajBx/WW5ZZzhDMGlDbkFS/S3ZFS3o2alJBaUFT/LmpwZw"
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="Headingg Latest-Heading">The Latest</h2>

        <div className="Latest-Card-Container">
          {randomdata.map((item, index) => (
            <div key={index} className="Latest-card-content">
              <NavLink to={`/dynamic/${item.id}`}>
                <img src={item.image} alt="" />
              </NavLink>
              <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
                <h3>{item.name.slice(0, 15)}...</h3>
              </NavLink>
              <div className="Latest-Card">
                <p>{item.description.slice(0, 100)}</p>
              </div>
              <div className="Latest-Card">
                <h3>{item.category} : 16-12-23</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="Headingg Latest-Heading">Latest-Article</h2>
        <hr />
        <div className="Parent2">
          <div className="Child-left">
            {randomdata2.map((item, index) => (
              <div className="randomData2">
                <NavLink to={`/dynamic/${item.id}`}>
                  <img src={item.image} alt="" />
                </NavLink>
                <div className="image-content">
                  <div className="image-name">
                    <NavLink
                      className="Dynamic-navlink"
                      to={`/dynamic/${item.id}`}
                    >
                      <h3>{item.name.slice(0, 20)}...</h3>
                    </NavLink>
                    <p>{item.description.slice(0, 100)}...</p>
                    <h3>{item.category}/ Dec 23</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="right-child">
            <img
              className="advertisement1"
              src="https://imgs.search.brave.com/8vXUPa3FGOwnNoEHAIOmheT8JdEzKk5ydqrA9I30CJ4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZGl5b2phbmEu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMTAvVW50aXRs/ZWQuanBlZw"
              alt=""
            />
            <img
              className="advertisement1"
              src="https://imgs.search.brave.com/UxnW2vVOCSACvkDRLtcjMp2EHai7G9WJXuivRTCt0uo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0cv/MDEvQWRQcm9kdWN0/c1dlYnNpdGUvaW1h/Z2VzL3JlZnJlc2hD/cmVhdGl2ZS9ob21l/L0p1bmUyMDIyL2hw/QnJhbmRTaG9wRXhJ/bWcwMy5fVFRXXy5w/bmc"
              alt=""
            />
            <h3>ADVERTISEMENT : AMZON</h3>
          </div>
        </div>

        <h2 className="Headingg Latest-Heading">Latest-Stories</h2>
        <hr />
        <div className="Latast-Stories">
          {randomdata3.map((item) => (
            <div className="Latest-story">
              {/* <img src={item.image} alt="" /> */}
              <NavLink className="Dynamic-navlink" to={`/dynamic/${item.id}`}>
                <h2>{item.name.slice(0, 20)}...</h2>
              </NavLink>
              <p>{item.description.slice(0,300)}</p>
              <h4>{item.category} / Dec 23</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
