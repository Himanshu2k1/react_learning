import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setidFromButton] = useState(1);

  const handleclick = () => {
    setidFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [idFromButton]);

  return (
    <div className="App">
      <h3>Enter any Id between 1 to 100</h3>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleclick}>Enter</button>
      <div className="post">
        <em>Post Title is: </em> {post.title}
      </div>
      <p>
        Description : This Website uses useState and useEffect to fetch data
        from jsonplaceholder <br /> corresponding to the given id value
      </p>
    </div>
  );
}
