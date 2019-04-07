import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState("posts");

  //'posts' is initial value, resource is current data, setResource is function to update our data

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
