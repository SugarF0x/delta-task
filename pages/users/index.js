import Head from 'next/head'
import Link from 'next/link'

import Container  from '@material-ui/core/Container'
import Box        from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';

import styles from "../../styles/Home.module.css";

export default function Users() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/icon.jpg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <header className={styles.header}>
        <Typography variant="h3">
          Users page
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
        <Container>

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
