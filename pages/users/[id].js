import Head          from 'next/head'
import Link          from 'next/link'
import { useRouter } from 'next/router'

import UserProfile from '../../components/UserProfile.js'

import {
  Container,
  Box,
  Typography
} from '@material-ui/core';

import layout from "../../styles/Home.module.css";

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
          <UserProfile id={id}/>
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
