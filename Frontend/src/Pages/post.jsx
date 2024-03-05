import React, { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/post/getpost", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  if (!posts || posts.length === 0) {
    return <div>Loading...</div>;
  }

  // Render the posts if available
  return (
    <div className="gallery d-flex justify-content-around align-items-center flex-wrap gap-5" style={{padding:"5vw"}}>
      {posts.map((note, key) => (
        <div className="card" key={key} style={{ width: "18rem" }}>
          <div
            className="card-body"
            style={{ backgroundColor: "antiquewhite" }}
          >
            <h5 className="card-title">Title : {note.title}</h5>
            <p className="card-text">Description : {note.content}</p>
            <p className="card-text">Author : {note.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
