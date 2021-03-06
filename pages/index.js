import Head from 'next/head'
import Link from 'next/link'

import Container  from '@material-ui/core/Container'
import Box        from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';

import styles from "../styles/Home.module.css";

import { inject, observer } from 'mobx-react'

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Delta Solutions Task</title>
        <link rel="icon" href="/icon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <header className={styles.header}>
        <Typography variant="h3">
          Home page
        </Typography>

        <Box className={styles.nav}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <span style={{margin: '0 .3rem'}}>|</span>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </Box>
      </header>

      <main className={styles.main}>
        <Container style={{textAlign: 'center'}}>
          <h1>This is the Home page</h1>
          <h2>
            Please, proceed to <Link href="/users"><a style={{color: 'lightgreen'}}><u>Users</u></a></Link> page</h2>
        </Container>
      </main>

      <footer className={styles.footer}>
        <span style={{color: '#002060'}}><b>/</b></span>
        <span style={{color: '#CC0000'}}><b>/\</b></span>
        <span style={{marginLeft: '.2rem'}}>Delta Solutions entry task</span>
      </footer>
    </div>
  )
}

export default inject('usersStore')(observer(Home));
