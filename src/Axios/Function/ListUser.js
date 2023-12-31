import React, { useState } from "react";
import User from "./User";
export default function ListUser(props) {
  const [activeId, setActiveId] = useState(false);
  const users = props.utilisateurs;
  function handleChangeActiveId(id) {
    setActiveId((oldActiveId) => {
      console.log(oldActiveId, id)
      return id === oldActiveId ? false : id;
    });
  }
  return (
    <div className="App">
      <h1>nombre d'utilisateurs: {props.utilisateurs.length}</h1>
      {users.map((user) => {
        return (
          <User
            user={user}
            activeId={activeId}
            handleChangeActiveId={handleChangeActiveId}
          />
        );
      })}
    </div>
  );
}
