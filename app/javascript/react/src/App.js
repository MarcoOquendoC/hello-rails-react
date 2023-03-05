import React, { lazy, Suspense } from 'react'; 
import { Route, Routes } from 'react-router-dom';
const Message = lazy(() => import('./components/Message.js'));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Message />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
