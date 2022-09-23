import React from "react";
import { useSelector } from "react-redux";

// Componentsは useSelector Hooks で redux の state を取得

function Count3() {
  const count = useSelector((state) => state.count);
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      <div className="App">
        <h1>Redux Learn</h1>
        <p>Count2: {count}</p>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Count3;
