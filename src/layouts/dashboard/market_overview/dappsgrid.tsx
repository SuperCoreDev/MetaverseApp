/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef,GridRenderCellParams ,GridTreeNodeWithRender } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { styled , darken, lighten } from '@mui/material/styles';
import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

// const getBackgroundColor = (color: string, mode: string) =>
//   mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

// const getHoverBackgroundColor = (color: string, mode: string) =>
//   mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

// const getSelectedBackgroundColor = (color: string, mode: string) =>
//   mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

// const getSelectedHoverBackgroundColor = (color: string, mode: string) =>
//   mode === 'dark' ? darken(color, 0.4) : lighten(color, 0.4);

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .super-app-theme--Open': {
    backgroundColor : '#2B2E31',
    border:'4px solid',
    borderColor : 'transparent transparent #000 transparent',
    color:'white',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
//   '& .super-app-theme--Filled': {
//     backgroundColor: 'white',
//     '&:hover': {
//       backgroundColor: getHoverBackgroundColor(
//         theme.palette.success.main,
//         theme.palette.mode,
//       ),
//     },
//     '&.Mui-selected': {
//       backgroundColor: getSelectedBackgroundColor(
//         theme.palette.success.main,
//         theme.palette.mode,
//       ),
//       '&:hover': {
//         backgroundColor: getSelectedHoverBackgroundColor(
//           theme.palette.success.main,
//           theme.palette.mode,
//         ),
//       },
//     },
//   },
//   '& .super-app-theme--PartiallyFilled': {
//     color:'white',
//     '&:hover': {
//       backgroundColor: getHoverBackgroundColor(
//         theme.palette.warning.main,
//         theme.palette.mode,
//       ),
//     },
//     '&.Mui-selected': {
//       backgroundColor: getSelectedBackgroundColor(
//         theme.palette.warning.main,
//         theme.palette.mode,
//       ),
//       '&:hover': {
//         backgroundColor: getSelectedHoverBackgroundColor(
//           theme.palette.warning.main,
//           theme.palette.mode,
//         ),
//       },
//     },
//   },
//   '& .super-app-theme--Rejected': {
//     color:'white',
//     '&:hover': {
//       backgroundColor: getHoverBackgroundColor(
//         theme.palette.error.main,
//         theme.palette.mode,
//       ),
//     },
//     '&.Mui-selected': {
//       backgroundColor: getSelectedBackgroundColor(
//         theme.palette.error.main,
//         theme.palette.mode,
//       ),
//       '&:hover': {
//         backgroundColor: getSelectedHoverBackgroundColor(
//           theme.palette.error.main,
//           theme.palette.mode,
//         ),
//       },
//     },
//   },
}));
const rows = [
    {
      id: 1,
      name: 'Mutant Ape',
      balance: '$567.99k',
      uaw : '4',
      status : 'Open'
    },
    {
        id: 2,
        name: 'Yacth CLub',
        balance: '$567.99k',
        uaw : '4',
        status : 'Open'
    },
    {
        id: 3,
        name: 'Ape Yacth',
        balance: '$567.99k',
        uaw : '4',
        status : 'Open'
    },
    {
        id: 4,
        name: 'Mutant Yacth',
        balance: '$567.99k',
        uaw : '4',
        status : 'Open'
    }
  ];
  const NameRowContainer = ({rowID , rowImage , name}:NameProps):React.ReactNode => (
    <Stack direction='row' gap={3}>
          <Typography>{rowID}</Typography>
          <Stack direction='row' gap={1}>
              <Image src={rowImage} alt="image" width={40} height={40} />
              <Stack direction='column'>
                  <Stack direction='row'>
                      <Typography>{name}</Typography>
                      <Icon icon="solar:verified-check-bold" color="#3dfff3" />
                  </Stack>
                  <Stack direction='row' gap={1}>
                      <Box>
                          <Icon icon="logos:ethereum" color="#3dfff3" width="12" height="12" />ETH
                      </Box>
                      <Box>|</Box>
                      <Box>
                          <Icon icon="logos:ethereum" color="#3dfff3" width="12" height="12" />ETH
                      </Box>
                  </Stack>
              </Stack>
          </Stack>
      </Stack>
  )
  const getValbyName = (name:string) => rows.filter((row) => row.name === name )
  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName : 'Name',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      flex:5,
      valueGetter: (params) => getValbyName(params.value),
      renderCell: (params: GridRenderCellParams<any>) => (
        <Box>
            <NameRowContainer rowID={params.value[0].id} rowImage={`/assets/images/dapps/${params.value[0].name}.png`} name={params.value[0].name}/>
        </Box>
      ),
    },
    {
      field: 'balance',
      headerName : 'Balance',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'left',
      flex:2
    },
    {
        field: 'uaw',
        headerName : '24H UAW',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex:3,
        renderCell: (params: GridRenderCellParams<any>) => (
            <Image src="/assets/images/dapps/chart.png" alt='chart' width={120} height={40}/>
        ),
      },
  ];

  const getRowHeight = (params : any) => {
    const height = 80;
    return height;
  };

  type NameProps = {
    rowID : number,
    rowImage : string,
    name : string
  }

export default function StylingRowsGrid() {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 100,
//   });
  return (
    <Box sx={{width: '100%' ,  '& .super-app-theme--header': {
        backgroundColor: '#191919', color:'white'
      } }}>
      <StyledDataGrid
        autoHeight
        rows={rows} columns={columns}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        disableColumnMenu
        hideFooter
        getRowHeight={getRowHeight}
      />
    </Box>
  );
}