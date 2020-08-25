import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postsform";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm></PostForm>
        <hr />
        <Posts></Posts>
      </div>
    </Provider>
  );
}

export default App;
