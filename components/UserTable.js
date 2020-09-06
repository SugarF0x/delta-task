import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Component } from "react";
import { observer }  from 'mobx-react';
import UserTableRow  from './UserTableRow.js';

import store from '../store/users.js'

class UserTable extends Component {
  render() {
    store.fetchUsers();
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
            {store.users.map(entry => (
              <UserTableRow user={entry} key={entry.id}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default observer(UserTable)
