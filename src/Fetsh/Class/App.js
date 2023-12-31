import React, { Component } from "react";
import ListUser from "./ListUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

  const utilisateurs = await response.json();
      this.setState({ utilisateurs });
    
  };

  render() {
    const { utilisateurs } = this.state;
    {
      console.log(utilisateurs);
    }
    return (
      <div>
        {utilisateurs.length ? (
          <div>
            <ListUser utilisateurs={utilisateurs} />
          </div>
        ) : (
          "pas d'utilisateurs!!!!"
        )}
      </div>
    );
  }
}

export default App;
