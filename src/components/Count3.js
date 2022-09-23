import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Componentsは useSelector Hooks で redux の state を取得

function Count3() {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  const count = useSelector((state) => state.countReducer.count);
  const posts = useSelector((state) => state.postsReducer.posts);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      dispatch({
        type: "GET_POST_DATA",
        payload: data,
      });
    };
    getPosts();
  }, [dispatch]);

  return (
    <div>
      <div className="App">
        <h1>Redux Learn</h1>
        <p>Count2: {count}</p>
        <button onClick={increase}>Up</button>
        <button onClick={decrease}>Down</button>
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
