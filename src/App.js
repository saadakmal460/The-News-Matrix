import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={6}
                  country="us"
                  catogary="general"
                />
              }
            ></Route>
            <Route
              path="/buisness"
              element={
                <News
                  key="buisness"
                  pageSize={6}
                  country="us"
                  catogary="buisness"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={6}
                  country="us"
                  catogary="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={6}
                  country="us"
                  catogary="technology"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={6}
                  country="us"
                  catogary="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={6}
                  country="us"
                  catogary="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={6}
                  country="us"
                  catogary="science"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
