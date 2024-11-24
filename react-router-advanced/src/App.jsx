import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = true;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/blog/:id" element={<BlogPost />} />

      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuth={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default App;