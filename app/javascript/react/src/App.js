import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import Message from './components/Message.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Message />} />
    </Routes>
  );
}

export default App;
