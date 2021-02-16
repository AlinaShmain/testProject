import React, { useState } from "react";
import arrow from "../assets/arrow-down.svg";
import "./PostsList.css";

export const PostsList = ({ posts, setPosts }) => {
  const [isDownId, setDownId] = useState(true);
  const [isDownBody, setDownBody] = useState(true);
  const [isDownUserId, setDownUserId] = useState(true);
  const [isDownTitle, setDownTitle] = useState(true);

  const toggleDownId = () => {
    if (isDownId) {
      setDownId(false);

      sortLargeToSmall("id");
    } else {
      setDownId(true);

      sortSmallToLarge("id");
    }
  };

  const toggleDownUserId = () => {
    if (isDownUserId) {
      setDownUserId(false);

      sortLargeToSmall("userId");
    } else {
      setDownUserId(true);

      sortSmallToLarge("userId");
    }
  };

  const toggleDownBody = () => {
    if (isDownBody) {
      setDownBody(false);

      sortAlphabetically("body");
    } else {
      setDownBody(true);

      sortBackward("body");
    }
  };

  const toggleDownTitle = () => {
    if (isDownTitle) {
      setDownTitle(false);

      sortAlphabetically("title");
    } else {
      setDownTitle(true);

      sortBackward("title");
    }
  };

  const sortSmallToLarge = (col) => {
    let sortPosts = posts.sort((a, b) => a[`${col}`] - b[`${col}`]);

    setPosts(sortPosts);
  };

  const sortLargeToSmall = (col) => {
    let sortPosts = posts.sort((a, b) => b[`${col}`] - a[`${col}`]);

    setPosts(sortPosts);
  };

  const sortAlphabetically = (col) => {
    let sortPosts = posts.sort((a, b) =>
      a[`${col}`].localeCompare(b[`${col}`])
    );

    setPosts(sortPosts);
  };

  const sortBackward = (col) => {
    let sortPosts = posts.sort((a, b) =>
      b[`${col}`].localeCompare(a[`${col}`])
    );

    setPosts(sortPosts);
  };

  return (
    <div className="posts-list">
      <div className="row header">
        <div className="col id">
          <b>Id</b>
          <button onClick={toggleDownId} className="dropbtn">
            <img
              src={arrow}
              className={isDownId ? "" : "arrow-up"}
              width="12px"
              height="12px"
            />
          </button>
        </div>
        <div className="col body">
          <b>Body</b>
          <button onClick={toggleDownBody} className="dropbtn">
            <img
              src={arrow}
              className={isDownBody ? "" : "arrow-up"}
              width="12px"
              height="12px"
            />
          </button>
        </div>
        <div className="col userId">
          <b>User id</b>
          <button onClick={toggleDownUserId} className="dropbtn">
            <img
              src={arrow}
              className={isDownUserId ? "" : "arrow-up"}
              width="12px"
              height="12px"
            />
          </button>
        </div>
        <div className="col title">
          <b>Title</b>
          <button onClick={toggleDownTitle} className="dropbtn">
            <img
              src={arrow}
              className={isDownTitle ? "" : "arrow-up"}
              width="12px"
              height="12px"
            />
          </button>
        </div>
      </div>
      {posts
        ? posts.map(({ body, id, title, userId }, idx) => (
            <div key={id} className="row post">
              <div className="col id">{id}</div>
              <div className="col body">{body}</div>
              <div className="col userId">{userId}</div>
              <div className="col title">{title}</div>
            </div>
          ))
        : null}
    </div>
  );
};
