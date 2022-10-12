import { Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react'

 const Home = () => {
  return (
    <>
      <Head>
        <title>E-commerce Sanity</title>
        <meta name="description" content="the website build by next js and sanity"/>
        <line ref='icon' href='/favicon.ico'/>
      </Head>
      <Typography variant='h3'>Hello Sanity</Typography>
    </>
  )
}
export default Home;