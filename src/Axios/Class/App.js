import React, { Component } from "react";
import axios from "axios";
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

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ utilisateurs: response.data });
  };

  render() {
    const { utilisateurs } = this.state;
    {console.log(utilisateurs)}
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
