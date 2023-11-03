/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
import NextLink from 'next/link'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { Container, Typography, Stack, TextField, InputAdornment, Link } from '@mui/material';
import NextBreadcrumbs from 'src/components/NextBreadCrumbs';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
import MetaverseCard from '../MetaverseCard';


// components

const MetaverseItem = [
  {
    'image': '/assets/nfts/MetaverseCards/Real Estate.png',
    'name': 'Real Estate',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/ECommerce.png',
    'name': 'ECommerce',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Entertainments.png',
    'name': 'Entertainments',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Automobile.png',
    'name': 'Automobile',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Sport & Nutrition.png',
    'name': 'Sport & Nutrition',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Education.png',
    'name': 'Education',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Gaming.png',
    'name': 'Gaming',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Dispensary.png',
    'name': 'Dispensary',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Cryptocurrency.png',
    'name': 'Cryptocurrency',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Hotel.png',
    'name': 'Hotel',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Restaurant.png',
    'name': 'Restaurant',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  },
  {
    'image': '/assets/nfts/MetaverseCards/Marketplace.png',
    'name': 'Marketplace',
    'content': `With Metaverse Estates, you have the power to design, customize, and inhabit your dream home in the metaverse. Want a castle in the clouds or a beachfront villa surrounded by digital waves....`,
  }
]

BuildMetaverse.getLayout = (page: React.ReactElement) => <DashboardLayout>{page}</DashboardLayout>;

const Bar = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  // Media query for responsive mode
  '@media (min-width: 1069px)': {
    flexDirection: 'row',
  },
})

const Comp = styled('div')({
  display: 'flex',
  gap: '20px',
  flexDirection: 'column',

  // Media query for responsive mode
  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
})

// ----------------------------------------------------------------------
const MakeLowerStipeSpace = (url: string): string => url.toLowerCase().replace(' ', '');

export default function BuildMetaverse() {
  return (
    <>
      <Head>
        <title> Build Metaverse </title>
      </Head>
      <Stack sx={{
        width: '100%', boxShadow: '0px 6px 12px 0px #00000033',
        background: '#202324', color: 'white', fontFamily: "Neue Haas Grotesk Display Pro", padding: '32px', gap: '20px'
      }}>
        <Bar>
          <div style={{ fontSize: '20px', fontWeight: '600' }}>Please select a metaverse area to build in</div>
          <Comp>
            <TextField
              variant='standard'
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position='end'>
                    <Icon icon="octicon:search-16" />
                  </InputAdornment>
                ),
                style: { color: 'white' }
              }}
              placeholder='Search Metaverse'
              style={{ color: 'white', borderRadius: '15px', border: 'solid 1px gray', padding: '5px 10px 5px 10px', width: '100%' }}
            />
            <TextField
              variant='standard'
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position='end'>
                    <Icon icon="formkit:down" />
                  </InputAdornment>
                ),
                style: { color: 'white' }
              }}
              placeholder='Newly Listed'
              style={{ color: 'white', borderRadius: '15px', border: 'solid 1px gray', padding: '5px 10px 5px 10px' }}
            />
          </Comp>
        </Bar>
        <div style={{ display: 'flex', alignItems: 'flex-start', alignContent: 'flex-start', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>

          {MetaverseItem.map(item => (
            <Link component={NextLink} href={`/metaverse/buildmetaverse/${MakeLowerStipeSpace(item.name)}`} underline="none">
              <MetaverseCard image={item.image} name={item.name} content={item.content} />
            </Link>
          ))
          }

        </div>
      </Stack>
    </>)
}
