import React from "react";
import { connect } from "react-redux";

// Componentsは mapStateToProps で redux の state を取得

function Count2({ dispatch, count, posts }) {
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

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

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
    posts: state.postsReducer.posts,
  };
};

export default connect(mapStateToProps)(Count2);
