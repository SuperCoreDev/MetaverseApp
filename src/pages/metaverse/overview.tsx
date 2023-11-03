/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// next
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRef, ReactNode, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
  Container,
  Typography,
  Stack,
  Grid,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
// layouts
import DashboardLayout from '../../layouts/dashboard';
import styled from '@emotion/styled';
import Scrollbar from 'src/components/scrollbar/Scrollbar';
// components

const LeftCircle = styled('div')({
  position: 'absolute',
  width: '700px',
  height: '700px',
  borderRadius: '100%',
  background: 'rgba(104, 204, 235, 0.40)',
  filter: 'blur(150px)',
});

const RightCircle = styled('div')({
  position: 'absolute',
  top: '-50px',
  right: '-100px',
  width: '700px',
  height: '700px',
  borderRadius: '100%',
  background: 'rgba(235, 104, 198, 0.40)',
  filter: 'blur(150px)',
});

const CategoryButton = styled('div')(({ ...props }) => {
  return {
    background: props.bg,
    color: props.color,
    borderRadius: '10px',
    padding: '8px 14px',
    width: '120px',
    textAlign: 'center',
    fontSize: '12px',
    '@media (max-width:700px)': {
      fontSize: '13px',
    },
  };
});

const Title = styled('div')({
  color: 'white',
  fontSize: '24px',
});

const MetaverseItem = styled('div')(({ ...props }) => {
  return {
    display: 'flex',
    transition: '1s',
    width: `${props.global == true ? '33%' : props.state == false ? '300px' : '800px'}`,
    background: '#1e1e1e',
    padding: '10px',
    flex: 'none',
    borderRadius: '10px',
    justifyContent: 'space-between',
    height: '300px',
  };
});

const RightPart = styled('div')({
  display: 'flex',
  flex: 'none',
  flexDirection: 'column',
  color: 'white',
  width: '300px',
  padding: '20px',
  height: '300px',
  justifyContent: 'space-between',
});

const ViewButton = styled('div')({
  color: 'black',
  background: '#d96bff',
  textAlign: 'center',
  padding: '10px 40px 10px 40px',
  borderRadius: '10px',
});

const PopularItem = styled('div')(({ ...props }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    transition: 'width 0.3s ease-in-out',
    //width: `${props.state == true ? }`,
    // width: `${props.state == true ? '500px' : 'auto'}`,
    zIndex: `${props.state == true ? '5' : '1'}`,
    position: `${props.state == true ? 'absolute' : 'relative'}`,
    top: `${props.state == true ? `${props.height * Math.floor(props.index / 4) - 50}px` : '0px'}`,
    marginLeft: `${props.state == true ? '-50px' : '0px'}`,
    width:`${props.state == true ? '400px' : '200px'}`,
    background: '#1e1e1e',
    padding: '10px',
    borderRadius: '20px',
    border: 'solid 1px gray',
    justifyContent: 'space-between',
  };
});

const CustomPagination = styled('div')({
  color: 'white',
});

const PageButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  border: 'solid 1px gray',
  padding: '5px',
  borderRadius: '5px',
});

const NumberButton = styled('div')({
  display: 'flex',
  fontSize: '10px',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '5px',
});

const popularArray = [1, 2, 3, 4, 5, 6, 7, 8];

MetaverseOverview.getLayout = (page: React.ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

const labels = [
  'All Categories',
  'Games',
  'Gambling',
  'Social',
  'Collectibles',
  'Marketplace',
  'Real Estate',
];

// ----------------------------------------------------------------------
export default function MetaverseOverview() {
  const [category, setCategory] = useState(0);
  // const [url1, setUrl1] = useState('/assets/images/metaverse/trending1.png');
  const [current, setCurrent] = useState(-1);
  const [popularIndex, setPopularIndex] = useState(-1);
  const [itemperPage, setItemperPage] = useState('8');
  const elementRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(0);
  console.log(itemHeight);
  const handleChange = (event: SelectChangeEvent) => {
    setItemperPage(event.target.value as string);
  };

  useEffect(() => {
    if (!elementRef.current) return;
    const func = new ResizeObserver(() => {
      setItemHeight(elementRef.current.clientHeight);
    });
    func.observe(elementRef.current);
    return () => func.disconnect();
  }, []);
  return (
    <>
      <Head>
        <title> Metaverse </title>
      </Head>
      <Stack
        sx={{
          width: '100%',
          height: 'auto',
          boxShadow: '0px 6px 12px 0px #00000033',
          background: '#202324',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
        gap={4}
      >
        <LeftCircle />
        <RightCircle />
        <Grid container spacing={2} style={{ position: 'relative', zIndex: '2', width: 'full' }}>
          {labels.map((x, index) => (
            <Grid item sm={1.5}>
              <CategoryButton
                bg={`${category === index ? '#d96bff' : 'black'}`}
                color={`${category === index ? '#black' : 'white'}`}
              >
                {x}
              </CategoryButton>
            </Grid>
          ))}
          <Grid item sm={1.5}>
            <CategoryButton
              bg={`black`}
              color={'white'}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              More
              <Icon icon="mingcute:down-line" color="white" />
            </CategoryButton>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="ion:filter" color="gray" />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              placeholder="Filter"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: 'black',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="iconamoon:search-light" color="gray" />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              placeholder="Search Metaverse"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: 'black',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item sm={2}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="mingcute:down-fill" />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              placeholder="Newly Listed"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: 'black',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item sm={2}>
            <TextField
              variant="standard"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon icon="mingcute:down-fill" />
                  </InputAdornment>
                ),
                style: { color: 'white' },
              }}
              placeholder="All Chains"
              style={{
                color: 'white',
                borderRadius: '15px',
                padding: '5px 10px 5px 10px',
                background: 'black',
                width: '100%',
              }}
            />
          </Grid>
        </Grid>
        <Title>Trending Metaverses</Title>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flex: 'none',
            width: 'auto',
            gap: '10px',
          }}
        >
          <MetaverseItem
            onMouseEnter={() => setCurrent(0)}
            onMouseLeave={() => setCurrent(-1)}
            url={
              current == 0
                ? '/assets/images/metaverse/trending1-hover.png'
                : '/assets/images/metaverse/trending1.png'
            }
            state={current == 0}
            global={current == -1}
          >
            <img
              src={
                current == 0
                  ? '/assets/images/metaverse/trending1-hover.png'
                  : '/assets/images/metaverse/trending1.png'
              }
              style={{ width: '470px', height: 'auto', transition: '1s' }}
            />
            {current == 0 && (
              <RightPart>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex' }}>
                    <img
                      src="/assets/images/metaverse/illuvium.png"
                      style={{ width: '64px', height: '64px' }}
                    />
                    <span>Illuvium</span>
                  </div>
                  <div>
                    Decentraland is a decentralized virtual reality platform powered by blockchain
                    technology. Within the Decentraland
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ViewButton>View Metaverse</ViewButton>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/images/metaverse/illuvium-1.png" />
                    <img src="/assets/images/metaverse/illuvium-2.png" />
                  </div>
                </div>
              </RightPart>
            )}
          </MetaverseItem>
          <MetaverseItem
            onMouseEnter={() => setCurrent(1)}
            onMouseLeave={() => setCurrent(-1)}
            url={
              current == 1
                ? '/assets/images/metaverse/trending1-hover.png'
                : '/assets/images/metaverse/trending1.png'
            }
            state={current == 1}
            global={current == -1}
          >
            <img
              src={
                current == 1
                  ? '/assets/images/metaverse/trending2-hover.png'
                  : '/assets/images/metaverse/trending2.png'
              }
              style={{ width: '470px', height: 'auto' }}
            />
            {current == 1 && (
              <RightPart>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex' }}>
                    <img
                      src="/assets/images/metaverse/illuvium.png"
                      style={{ width: '64px', height: '64px' }}
                    />
                    <span>Illuvium</span>
                  </div>
                  <div>
                    Decentraland is a decentralized virtual reality platform powered by blockchain
                    technology. Within the Decentraland
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ViewButton>View Metaverse</ViewButton>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/images/metaverse/illuvium-1.png" />
                    <img src="/assets/images/metaverse/illuvium-2.png" />
                  </div>
                </div>
              </RightPart>
            )}
          </MetaverseItem>
          <MetaverseItem
            onMouseEnter={() => setCurrent(2)}
            onMouseLeave={() => setCurrent(-1)}
            url={
              current == 2
                ? '/assets/images/metaverse/trending1-hover.png'
                : '/assets/images/metaverse/trending1.png'
            }
            state={current == 2}
            global={current == -1}
          >
            <img
              src={
                current == 2
                  ? '/assets/images/metaverse/trending1-hover.png'
                  : '/assets/images/metaverse/trending1.png'
              }
              style={{ width: '470px', height: 'auto' }}
            />
            {current == 2 && (
              <RightPart>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex' }}>
                    <img
                      src="/assets/images/metaverse/illuvium.png"
                      style={{ width: '64px', height: '64px' }}
                    />
                    <span>Illuvium</span>
                  </div>
                  <div>
                    Decentraland is a decentralized virtual reality platform powered by blockchain
                    technology. Within the Decentraland
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ViewButton>View Metaverse</ViewButton>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/assets/images/metaverse/illuvium-1.png" />
                    <img src="/assets/images/metaverse/illuvium-2.png" />
                  </div>
                </div>
              </RightPart>
            )}
          </MetaverseItem>
        </div>
        <Title>Most Popular</Title>
        <Grid container sx={{ position: 'relative' }}>
          {popularArray.map((x) => (
            <Grid item sm={3}>
              <PopularItem
                onMouseEnter={() => setPopularIndex(x)}
                onMouseLeave={() => setPopularIndex(-1)}
                ref={x == 1 ? elementRef : null}
                state={popularIndex == x}
                height={itemHeight}
                index={x - 1}
              >
                <img
                  src={`${
                    popularIndex == x
                      ? '/assets/images/metaverse/popular-hover.png'
                      : `/assets/images/metaverse/popular${x}.png`
                  }`}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <img src={'/assets/images/metaverse/popular-item1.png'} />
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                      Decentralland
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={'/assets/images/metaverse/popular-item2.png'} />
                    <img src={'/assets/images/metaverse/popular-item3.png'} />
                  </div>
                </div>
                {popularIndex == x && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ width: '480px', color: 'white' }}>
                      Decentraland is a decentralized virtual reality platform powered by blockchain
                      technology. Within the Decentraland platform.
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '20px',
                      }}
                    >
                      <ViewButton>View Metaverse</ViewButton>
                      <div style={{ display: 'flex' }}>
                        <img src="/assets/images/metaverse/popular-item4.png" />
                        <img src="/assets/images/metaverse/popular-item5.png" />
                      </div>
                    </div>
                  </div>
                )}
              </PopularItem>
            </Grid>
          ))}
        </Grid>
        <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <CustomPagination>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">items</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={itemperPage}
                  label="items"
                  onChange={handleChange}
                  sx={{ color: 'white' }}
                >
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                </Select>
              </FormControl>
            </CustomPagination>
            <div>Showing 1 - {itemperPage} of 1534</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <PageButton>
              <Icon icon="ri:arrow-left-double-fill" color="gray" />
            </PageButton>
            <PageButton>
              <Icon icon="iconamoon:arrow-left-2" color="gray" />
            </PageButton>

            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <NumberButton>...</NumberButton>
            <NumberButton>1534</NumberButton>

            <PageButton>
              <Icon icon="iconamoon:arrow-right-2" color="gray" />
            </PageButton>
            <PageButton>
              <Icon icon="ri:arrow-right-double-fill" color="gray" />
            </PageButton>
          </div>
        </div>
      </Stack>
    </>
  );
}
