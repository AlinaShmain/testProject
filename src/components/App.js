import "./App.css";
import { useHttp } from "../hooks/http";
import React, { useEffect, useState } from "react";
import { PostsList } from "./PostsList";
import { SearchField } from "./SearchField";
import Info from "./Info";

export const App = () => {
  const { request } = useHttp();
  const [posts, setPosts] = useState([]);
  const [outPuts, setOutputs] = useState([]);

  const getAllResources = async () => {
    try {
      const data = await request(
        "https://jsonplaceholder.typicode.com/posts",
        "GET"
      );
      console.log(data);

      setPosts(data);
      setOutputs(data);
    } catch (e) {}
  };

  useEffect(() => {
    getAllResources();
  }, []);

  return (
    <div className="App">
      <SearchField posts={posts} setPosts={setOutputs} />
      <PostsList posts={outPuts} setPosts={setPosts} />
      <Info />
    </div>
  );
};

export default App;
