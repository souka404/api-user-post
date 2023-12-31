import React, { useState } from "react";

export default function User(props) {
  const [posts, setPosts] = useState([]);

  async function HandelPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
  
      const postsData = await response.json();
      const userPosts = postsData.filter(
        (post) => post.userId === props.user.id
      );
      setPosts(userPosts);

      props.handleChangeActiveId(props.user.id);
    } 
  

  return (
    <div className="child" key={props.user.id}>
      <h3>
        nom: {props.user.name} {props.user.username}
      </h3>
      <p>email:{props.user.email}</p>
      <p>
        {" "}
        ville:{props.user.address.city}
        rue:{props.user.address.street}{" "}
      </p>
      <button onClick={HandelPosts}>details posts</button>
      {props.activeId === props.user.id && (
        <div>
          <h5 style={{ color: "green" }}>nombre des posts: {posts.length}</h5>
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
