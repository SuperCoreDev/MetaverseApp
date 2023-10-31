/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
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
        nftName: 'Light Jacket',
        imageSrc : '/assets/nfts/landnfts/1.png',
        lasttime: '7 Hours ago',
        price: [{'price': '$567.99k'}, {'manacost':'196.87MANA'}],
        manacost: '196.87MANA',
        from:'oxafer...bbbde',
        to:'oxrfh...cbdte'
    },
    {
        id: 2,
        nftName: 'Shiba Stock',
        imageSrc : '/assets/nfts/shibastock.png',
        lasttime: '7 Hours ago',
        price: [{'price': '$567.99k'}, {'manacost':'196.87MANA'}],
        manacost: '196.87MANA',
        from:'oxafer...bbbde',
        to:'oxrfh...cbdte'
    },
    {
        id: 3,
        nftName: 'Southam Li...',
        imageSrc : '/assets/nfts/southamli1.png',
        lasttime: '7 Hours ago',
        price: [{'price': '$567.99k'}, {'manacost':'196.87MANA'}],
        manacost: '196.87MANA',
        from:'oxafer...bbbde',
        to:'oxrfh...cbdte'
    },
    {
        id: 4,
        nftName: 'Southam Li..',
        imageSrc : '/assets/nfts/southamli4.png',
        lasttime: '7 Hours ago',
        price: [{'price': '$567.99k'}, {'manacost':'196.87MANA'}],
        from:'oxafer...bbbde',
        to:'oxrfh...cbdte'
    },
    {
        id: 5,
        nftName: 'Land2',
        imageSrc : '/assets/nfts/landnfts/2.png',
        lasttime: '7 Hours ago',
        price: [{'price': '$567.99k'}, {'manacost':'196.87MANA'}],
        from:'oxafer...bbbde',
        to:'oxrfh...cbdte'
    },
    {
        id: 6,
        nftName: 'Hallowe Mas',
        imageSrc : '/assets/nfts/hallowemas.png',
        lasttime: '7 Hours ago',
        price: [{'price': '$567.99k'}, {'manacost':'196.87MANA'}],
        from:'oxafer...bbbde',
        to:'oxrfh...cbdte'
    },
];
type NFTProps = {
    name : string;
    imagesrc : string;
}
const NftColContainer = ({ name , imagesrc }: NFTProps): React.ReactNode => (
    <Stack direction='row' gap={3} >
        <img src={imagesrc} alt="nft" width={80} height={80}/>
        <Typography>{name}</Typography>
    </Stack>
)
type NftPriceProps = {
    price : string,
    manacost:string
}
const fontfamily = "Neue Haas Grotesk Display Pro"
const NftPriceBox = ({price,manacost}:NftPriceProps): React.ReactNode => (
    <Stack direction='row' gap="8px" sx={{padding:"16px 0px",alignItems:'flex-start',alignSelf:'stretch'}}>
        <img src="/assets/nfts/marketplace_price.png" alt="pricenft" width={24} height={24}/>
        <Stack direction='column' gap="2px" flex='1 0 0' justifyContent='center' alignItems='flex-start'>
            <Typography color="white" fontFamily={fontfamily} fontSize={16} fontWeight={700}>{price}</Typography>
            <Stack direction='row' gap="4px" alignItems='center'>
                <img src="/assets/nfts/marketplace_mana_cost.png" alt="manacost" width={12} height={12}/>
                <Typography color="#1FDD00" fontFamily={fontfamily} fontSize={12} fontWeight={500}>{manacost}</Typography>
            </Stack>
        </Stack>
    </Stack>
)
const getValbyName = (name: string) => rows.filter((row) => row.nftName === name)
const columns: GridColDef[] = [
    {
        field: 'nftName',
        headerName: 'NFT',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 3,
        valueGetter: (params) => getValbyName(params.value),
        renderCell: (params: GridRenderCellParams<any>) => (
            <Box sx={{ width: '100%' }}>
                <NftColContainer name={params.value[0]?.nftName} imagesrc={params.value[0]?.imageSrc} />
            </Box>
        ),
    },
    {
        field: 'lasttime',
        headerName: 'Time',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 1
    },
    {
        field: 'price',
        headerName: 'Price',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 2,
        valueGetter: ({row}) => ({
                price: row.price[0].price,
                manacost: row.price[1].manacost,
        }),
        renderCell: (params: GridRenderCellParams<any>) => (
            <Box sx={{ width: '100%' }}>
                <NftPriceBox price={params.value?.price} manacost={params.value?.manacost} />
            </Box>
        ),
    },
    {
        field: 'from',
        headerName: 'TRANSFER FROM',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 2,
        valueGetter : (params) => params.value,
        renderCell: (params: GridRenderCellParams<any>) => (
            <Stack direction='row' gap={6} sx={{ width: '100%' }}>
                <Typography fontFamily={fontfamily}>{params.value}</Typography>
                <Icon icon="ph:arrow-right-bold" color="#3dfff3" width="24" height="24" />
            </Stack>
        ),
    },
    {
        field: 'to',
        headerName: 'TRANSFER TO',
        headerClassName: 'super-app-theme--header',
        headerAlign: 'left',
        flex: 2,
    },

];

const getRowHeight = (params: any) => {
    const height = 112;
    return height;
};


export default function MarketPlaceGrid() {
    //   const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //   });
    return (
        <Box sx={{
            width: '100%', '& .super-app-theme--header': {
                backgroundColor: '#1E2121', color: '#3DFFF3'
            },
            minWidth:'900px'
        }}>
            <StyledDataGrid
                autoHeight
                rows={rows} columns={columns}
                getRowClassName={(params) => `super-app-theme--${params.row.status}`}
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
                    "& .MuiDataGrid-virtualScroller":{
                        color:'white',
                    },
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
