import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
