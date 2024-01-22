import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../../Store/Store";

const DynamicCompo = () => {
  const Paramid = useParams().id;

  const { data } = useContext(Store);
  const Navigatee = useNavigate();
  const randomdata = data.filter((item) => item.id % 18 === 0);

  return (
    <div>
      <div className="Dynamic-COntainer">
        {data
          .filter((item) => item.id == parseInt(Paramid))
          .map((item, index) => {
            return (
              <div key={index} className="Dynamic-2">
                <h1>{item.name}</h1>

                <div className="User-Container">
                  <div className="Right-user">
                    <div className="user-image">
                      <img
                        src="https://imgs.search.brave.com/XKckHoR9KhrYnWs7FuYPf1WNKZJCXDowf6L_V9NB28E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy91c2Vy/LWljb24tanBnL3Vz/ZXItaWNvbi1qcGct/MjcuanBn"
                        alt=""
                      />
                    </div>
                    <div className="user-content">
                      <h3>Alok Kumar</h3>
                      <p>21-Dec-2023</p>
                    </div>
                  </div>

                  <div className="Left-user">
                    <p>
                      <i class="fa-brands fa-facebook"></i>
                    </p>
                    <p>
                      <i class="fa-brands fa-twitter"></i>
                    </p>
                    <p>
                      <i class="fa-brands fa-instagram"></i>
                    </p>
                    <p>
                      <i class="fa-brands fa-github"></i>
                    </p>
                  </div>
                </div>
                <img className="dynamic-image" src={item.image} alt="" />
                <p className="Dynamic-description">{item.description}</p>
              </div>
            );
          })}
        <div className="btn-container">
          <button className="Dynamic-back-btn" onClick={() => Navigatee(-1)}>
            Back
          </button>
        </div>
      </div>
      <div className="More-From-siren-container">
        <hr />
        <h1 className="Dynaimic-more-head Headingg">MORE FROM THE SIREN</h1>
       <div className="More-Parentss">
       {randomdata.map((item, index) => (
          <div className="parenttss">
           <div className="childd">
            <img src={item.image} alt="" />
           </div>
           <div className="childd">
            <h2>{item.name.slice(0,20)}</h2>
           </div>
           <div className="childd">
            {item.description.slice(0,120)}
           </div>
          </div>
          ))}
       </div>
      </div>

      <hr />
    </div>
  );
};

export default DynamicCompo;
