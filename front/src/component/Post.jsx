import React, { useEffect, useState } from 'react';
import axios from "axios";
import ".Post.css"
export default function Post() {
  const [postData, setData ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => { 
    try {
      const response = await axios.get("/posts/");
      setData(response.data);
      console.log("dataを取得したよ");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {
        postData.map((item) => { 
        return (
        <div className="post_component" key={item.id}>
          <div className="title">
            <h2>{ item.title }</h2>
            <div className="content">
              <h3>{ item.content }</h3>
            </div>
          </div>
          </div>
        )
      })
    }
    </>
  );
}