import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Post.css"


export default function Post() {
  const [postData, setData ] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const handleTitle = (event) =>{ 
    setTitle(event.target.value);
  }

  const handleContent = (event) => {
    setContent(event.target.value);
  }

  const handleSubmit = (event) => { 
    event.preentDefaul();
    console.log(event);
  }
  return (
    <>
      <div className='form_component'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Title:
            <input type="text" value={title} onChange={handleTitle}/>
          </label>
          <label htmlFor="">Title:
            <input type="text" value={content} onChange={handleContent}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {
        postData.map((item) => { 
        return (
        <div className="post_component" key={item.id}>
          <div className="title">
              <h2>Title: {item.title}</h2>
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