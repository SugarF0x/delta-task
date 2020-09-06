import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import UserTableRow         from './UserTableRow.js';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class UserTable extends Component {
  static async getInitialProps({ mobxStore }) {
    await mobxStore.usersStore.fetchUsers();
    return { users: mobxStore.usersStore.users };
  }

  componentDidMount() {
    this.props.usersStore.fetchUsers();
  }

  render() {
    const { users } = this.props.usersStore;
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>id</TableCell>
              <TableCell>email</TableCell>
              <TableCell>buttons</TableCell>
              <TableCell>status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(entry => (
              <UserTableRow user={entry} key={entry.id}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default inject('usersStore')(observer(UserTable));
