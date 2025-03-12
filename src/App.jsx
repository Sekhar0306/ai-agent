import React, { useState } from 'react'; // Correct import
import Home from './pages/home'; // Ensure the path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
