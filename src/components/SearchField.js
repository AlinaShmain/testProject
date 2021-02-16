import { useState } from "react";
import loupe from "../assets/loupe.svg";
import "./SearchField.css";

export const SearchField = ({ posts, setPosts }) => {
  const [input, setInput] = useState("");

  const onInputChange = (event) => {
    let value = event.target.value;

    setInput(value);

    if (value) {
      // console.log(value);

      value = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      const regexp = new RegExp(value, "g");

      let foundPosts = [];

      if (posts.length !== 0) {
        posts.forEach((post) => {
          if (
            post.id.toString().match(regexp) ||
            post.body.match(regexp) ||
            post.userId.toString().match(regexp) ||
            post.title.match(regexp)
          ) {
            foundPosts.push(post);
          }
        });
      }

      setPosts(foundPosts);
    }
  };

  return (
    <div className="search">
      <input
        placeholder="Search..."
        type="text"
        className="search-input"
        onChange={onInputChange}
        value={input}
      />
      <button type="submit" className="searchButton">
        <img src={loupe}/>
      </button>
    </div>
  );
};
