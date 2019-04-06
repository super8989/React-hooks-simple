import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState('posts');

  //'posts' is initial value, resource is current data, setResource is function to update our data

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>
          Posts
        </button>
        <button onClick={() => setResource('todos')}>
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
