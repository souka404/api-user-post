import React, { Component } from "react";
import User from "./User";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: false,
    };
  }

  handleChangeActiveId = (id) => {
    this.setState((oldState) => {
      console.log(oldState);
      return { activeId: id === oldState.activeId ? false : id };
    });
  };

  render() {
    const { utilisateurs } = this.props;
    const { activeId } = this.state;
    return (
      <div className="App">
        <h1>nombre d'utilisateurs: {utilisateurs.length}</h1>
        {utilisateurs.map((user) => (
          <User
            key={user.id}
            user={user}
            activeId={activeId}
            handleChangeActiveId={() => this.handleChangeActiveId(user.id)}
          />
        ))}
      </div>
    );
  }
}

export default ListUser;
