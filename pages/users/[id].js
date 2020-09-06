import Head          from 'next/head'
import Link          from 'next/link'
import { useRouter } from 'next/router'
import { Component } from 'react'

import {
  Container,
  Box,
  Typography,
  Card,
  CardContent
} from '@material-ui/core';

import store from "../../store/index.js"

import layout from "../../styles/Home.module.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: props.id
      },
      posts: []
    }
  }

  async componentDidMount() {
    // fetch('http://jsonplaceholder.typicode.com/users')
    //   .then(res => res.json())
    //   .then(res => res.filter(el => el.id == this.state.user.id))
    //   .then(res => {
    //     this.setState({
    //       user: res[0]
    //     });
    //   });
    //
    // fetch('http://jsonplaceholder.typicode.com/posts')
    //   .then(res => res.json())
    //   .then(res => res.filter(el => el.userId == this.state.user.id))
    //   .then(res => {
    //     this.setState({
    //       posts: res.slice(0,5)
    //     })
    //   })

    let user = await store.users.filter(el => el.id     == this.state.user.id);
    let post = await store.posts.filter(el => el.userId == this.state.user.id);
    this.setState({
      user:  user[0],
      posts: post.slice(0,5)
    })
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            { this.state.user.name }
          </Typography>
          {this.state.posts.map(entry => {
              return (
                <Container key={entry.id}>
                  <Typography variant="h5">{entry.title}</Typography>
                  <p>{entry.body}</p>
                </Container>
              )
            }
          )}
        </CardContent>
      </Card>
    );
  }
}

export default function User() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <div className={layout.container}>
      <Head>
        <title>DST - User</title>
        <link rel="icon" href="/icon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <header className={layout.header}>
        <Typography variant="h3">
          Specific user page
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
          <UserProfile key={id} id={id}/>
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
