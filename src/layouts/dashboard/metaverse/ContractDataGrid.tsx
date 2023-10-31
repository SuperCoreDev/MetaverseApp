/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams,gridClasses } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { styled, darken, lighten } from '@mui/material/styles';
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
        [`& .${gridClasses.row}.even`]: {
            backgroundColor : 'black'
        },
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
    '&.MuiPagination-root':{
        color:'white'
    }
    
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
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 2,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 3,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 4,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 5,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 6,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 7,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 8,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 9,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 10,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 11,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 12,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 13,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 14,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
    {
        id: 15,
        address: '0x0baBda04f62C549A09EF3313Fe187f29c099FF3C',
        blockchain: '7 Hours ago',
        uaw: '$567.99k',
        status: 'Open'
    },
];
type AddressRowProps = {
    address: string
}
const AddressRowContainer = ({ address }: AddressRowProps): React.ReactNode => (
    <Stack direction='row' justifyContent='space-between' gap={3} >
        <Typography>{address}</Typography>
        <Icon icon="ph:copy" color="gray" width="24" height="24" />
    </Stack>
)
const getValbyName = (address: string) => rows.filter((row) => row.address === address)
const columns: GridColDef[] = [
    {
        field: 'address',
        headerName: 'Address',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 6,
        valueGetter: (params) => getValbyName(params.value),
        renderCell: (params: GridRenderCellParams<any>) => (
            <Box sx={{ width: '100%' }}>
                <AddressRowContainer address={params.value[0].address} />
            </Box>
        ),
    },
    {
        field: 'blockchain',
        headerName: 'Blockchain',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 2
    },
    {
        field: 'uaw',
        headerName: 'UAW',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 2,
    },
];

const getRowHeight = (params: any) => {
    const height = 80;
    return height;
};


export default function ContractDataGrid() {
    //   const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //   });
    return (
        <Box sx={{
            width: '100%', '& .super-app-theme--header': {
                backgroundColor: '#1E2121', color: '#3DFFF3'
            },
            minWidth:'850px'
        }}>
            <StyledDataGrid
                autoHeight
                rows={rows} columns={columns}
                getRowClassName={(params) => `super-app-theme--${params.row.status} , ${params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'} `}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                getRowHeight={getRowHeight}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                paginationMode='server'
                pagination
                sx={{
                    "& .MuiDataGrid-footerContainer": {
                    //    backgroundColor: "#000000",
                        color: "white",
                    },
                    "& .MuiTablePagination-root": {
                        // backgroundColor: "#ED1D24",
                        color: "white",
                    },
                }}
            />
        </Box>
    );
}

//https://github.com/mui/mui-x/issues/7030
