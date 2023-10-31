/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef,ReactNode,useState } from 'react';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack } from '@mui/material';
// layouts
import DashboardLayout from '../../layouts/dashboard';
// components





MetaverseMarketPlace.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------
export default function MetaverseMarketPlace() {

  return (
    <>
      <Head>
        <title> Metaverse Marketplace </title>
      </Head>
      <Stack sx={{width:'100%' , height:'100vh' , boxShadow: '0px 6px 12px 0px #00000033',
        background: '#202324'}}>
            Metaverse Marketplace
      </Stack>
    </>)
}
