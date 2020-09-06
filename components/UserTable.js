import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { Component } from "react";
import { observer }  from 'mobx-react';
import store         from '../store/index.js'
import UserTableRow  from './UserTableRow.js';

class UserTable extends Component {
  // componentDidMount() {
  //   // TODO: replace fetch with Store distpatch
  //
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         users: res
  //       })
  //     })
  // }

  render() {
    const { users } = store;
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

export default observer(UserTable)