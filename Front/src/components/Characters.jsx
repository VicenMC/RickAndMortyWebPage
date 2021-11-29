import React from "react";
import Character from "./Character";
import "./Characters.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="charCards">
      {posts.map((post, index) => (

          <Character key={index}
            name={post.name}
            status={post.status}
            species={post.species}
            origin={post.origin.name}
            image={post.image}
          />

      ))}
    </ul>
  );
};

export default Posts;
