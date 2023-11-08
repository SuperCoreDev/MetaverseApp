/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';

import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { styled, darken, lighten } from '@mui/material/styles';
import { ReactNode , useRef , useEffect} from 'react';
import { Stack, Typography } from '@mui/material';
import Scrollbar from 'src/components/scrollbar/Scrollbar';

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
    backgroundColor: '#2B2E31',
    border: '4px solid',
    borderColor: 'transparent transparent #000 transparent',
    color: 'white',
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
    date: 'Sep.09,2023',
    pricesqft: '$2587',
    value: '+$1287',
    action: 'Listed',
  },
  {
    id: 2,
    date: 'Sep.09,2023',
    pricesqft: '$2587',
    value: '+$1287',
    action: 'Sold',
  },
  {
    id: 3,
    date: 'Sep.09,2023',
    pricesqft: '$2587',
    value: '+$1287',
    action: 'Sold',
  },
  {
    id: 4,
    date: 'Sep.09,2023',
    pricesqft: '$2587',
    value: '+$1287',
    action: 'Sold',
  },
  {
    id: 5,
    date: 'Sep.09,2023',
    pricesqft: '$2587',
    value: '+$1287',
    action: 'Sold',
  }
];

const columns: GridColDef[] = [
  {
    field: 'date',
    headerName: 'Date',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'left',
    flex: 2,
  },
  {
    field: 'pricesqft',
    headerName: 'PRICE/SQFT',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'left',
    flex: 3,
    renderCell: (params: GridRenderCellParams<any>) => (
        <Typography fontFamily='Neue Haas Grotesk Display Pro' 
            fontSize={16} fontWeight={700} color='#3DFFF3'>{params.value}</Typography>
    )
  },
  {
    field: 'value',
    headerName: 'Value',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'left',
    flex: 3,
    renderCell: (params: GridRenderCellParams<any>) => (
        <Stack direction='column' justifyContent='flext-start' fontFamily='Neue Haas Grotesk Display Pro'>
          <Typography fontSize={16} fontWeight={700}>{params.value}</Typography>
          <Typography fontSize={14} fontWeight={500} color='#1FDD00'>+50%</Typography>
        </Stack>
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'left',
    flex: 2,
    renderCell: (params: GridRenderCellParams<any>) => (
        <Box sx={{width:'120px' , borderRadius:'24px' , border:'1px solid' , padding:'8px 16px', textAlign:'center',
        borderColor:`${params.value === 'Listed' ? '#3DFFF3' : '#1FDD00'}`}}>
          <Typography fontFamily='Neue Haas Grotesk Display Pro' fontSize={16} fontWeight={500}>{params.value}</Typography>
        </Box>
    ),
  }
];

const getRowHeight = (params: any) => {
  const height = 80;
  return height;
};

type NameProps = {
  rowID: number,
  rowImage: string,
  name: string
}

export default function PriceHistory() {
  //   const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 100,
  //   });
  const mainRef= useRef<HTMLDivElement>(null);
  useEffect(() => {
      if(mainRef.current)
      {
          const currentRef = mainRef.current;
          requestAnimationFrame(() => {
              currentRef.style.opacity = '1';
          });
      }
      //opacity:0 , transition:'opacity 1s ease'
  },[])
  return (
    <Scrollbar>
      <Box ref={mainRef} sx={{
        width: '100%', opacity:0 , transition:'opacity 1s ease','& .super-app-theme--header': {
          backgroundColor: '#191919', color: 'white'
        }
      }}>
        <StyledDataGrid
          autoHeight
          rows={rows} columns={columns}
          getRowClassName={(params) => `super-app-theme--${params.row.status}`}
          disableColumnMenu
          hideFooter
          getRowHeight={getRowHeight}
          sx={{ minWidth:'500px', '& .MuiDataGrid-cell': { background: '#2B2E31', color: 'white' } }}
        />
      </Box>
    </Scrollbar>
  );
}