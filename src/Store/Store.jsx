// DataCompo.js
import React, { createContext, useEffect, useState  } from "react";
import axios from 'axios'
export const Store = createContext();

const DataCompo = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
          const response = await axios.get("https://back-w2cx.onrender.com/api/blog")
          setData(response.data)
      }
      catch(err){
        console.log("Error Fetching ")
      }
    }
    fetchData();
  },[])

  return <Store.Provider value={{ data }}>
    {children}
    </Store.Provider>;
};

export default DataCompo;
