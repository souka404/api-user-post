import React, { useEffect, useState } from "react";
import ListUser from "./ListUser";

export default function App() {
  const [utilisateurs, setUtilisateurs] = useState([]);

  useEffect(() => {
    const getData = async () => {
    
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();
        setUtilisateurs(users);
      
    };

    getData();
  }, []);

  return (
    <div>
      {utilisateurs.length > 0 ? (
        <div>
          <ListUser utilisateurs={utilisateurs} />
        </div>
      ) : (
        "pas d'utilisateurs!!!!"
      )}
    </div>
  );
}
