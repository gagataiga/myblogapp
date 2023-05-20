import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Post() {
  const [postData, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => { 
    try {
      const response = await axios.get("/posts/");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {
      postData.map((item) => {
        <div className="post_component">
          <div className="title">
            <div className="content">
              {item}
            </div>
          </div>
        </div>
      })
    }
    </>
  );
}