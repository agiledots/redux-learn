import React from "react";
import { connect } from "react-redux";

// Componentsは mapStateToProps で redux の state を取得

function Count2({ count, posts }) {
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

const mapStateToProps = (state) => {
  return {
    count: state.count,
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Count2);
