import { TableCell, TableRow } from "@material-ui/core";
import { Component }           from "react";
import Link                    from "next/link";
import { inject, observer }    from 'mobx-react';

class UserTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      status: 'standby',
      styles: {
        success: {
          color: 'lightgreen'
        },
        pending: {
          color: 'yellowgreen'
        },
        standby: {
          color: 'gray'
        }
      }
    };

    this.dummyApiCall = this.dummyApiCall.bind(this);
  }

  dummyApiCall() {
    this.setState({
      status: 'pending'
    });
    fetch('/api/dummy')
      .then(res => res.json())
      .then(res => {
        if (res.result) {
          this.setState({
            status: 'success'
          })
        } else {
          this.setState({
            status: 'failed'
          })
        }
      })
  }

  render() {
    return (
      <TableRow key={this.state.user.name}>
        <TableCell>{this.state.user.name}</TableCell>
        <TableCell>{this.state.user.id}</TableCell>
        <TableCell>{this.state.user.email}</TableCell>
        <TableCell >
          <button onClick={this.dummyApiCall}>edit</button>
          <button onClick={this.dummyApiCall}>delete</button>
          <Link href={`users/${this.state.user.id}`}>
            <button>inspect</button>
          </Link>
        </TableCell>
        <TableCell style={this.state.styles[this.state.status]}>{this.state.status}</TableCell>
      </TableRow>
    )
  }
}

export default inject('usersStore')(observer(UserTableRow))
