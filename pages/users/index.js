import Head from 'next/head'
import Link from 'next/link'
import { Component } from 'react'

import {
  Container,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core'

import layout from "../../styles/Home.module.css";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: res
        })
      })
  }

  render() {
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
            {this.state.users.map(entry => (
              <UserTableRow user={entry} key={entry.id}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

class UserTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      status: 'standby'
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
        <TableCell>{this.state.status}</TableCell>
      </TableRow>
    )
  }
}

export default function Users() {
  return (
    <div className={layout.container}>
      <Head>
        <title>DST - Users</title>
        <link rel="icon" href="/icon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <header className={layout.header}>
        <Typography variant="h3">
          Users page
        </Typography>

        <Box className={layout.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span style={{margin: '0 .3rem'}}>|</span>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </Box>
      </header>

      <main className={layout.main}>
        <Container>
          <UserTable/>
        </Container>
      </main>

      <footer className={layout.footer}>
        <span style={{color: '#002060'}}><b>/</b></span>
        <span style={{color: '#CC0000'}}><b>/\</b></span>
        <span style={{marginLeft: '.2rem'}}>Delta Solutions entry task</span>
      </footer>
    </div>
  )
}
