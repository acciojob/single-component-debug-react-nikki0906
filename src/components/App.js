//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

import React from 'react';

// Define the App component as a functional component
const App = () => {
  return (
    <div id="main">
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
    </div>
  );
}

// Export the App component as the default export
export default App;
