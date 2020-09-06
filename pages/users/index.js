import Head          from 'next/head';
import Link          from 'next/link';

import {
  Container,
  Box,
  Typography
} from '@material-ui/core';

import store from '../../store/index.js';

import layout from "../../styles/Home.module.css";

import UserTable from '../../components/UserTable.js';

  //

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
