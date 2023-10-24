import useResponsive from "src/hooks/useResponsive"
import { Stack , Typography , Button} from "@mui/material"
import nftItems from "./nftItemsConfig"
import NftItem from "./nftItem"


export default function NftOverView() {
    const isDown = useResponsive('down',1456)
    return (
        <Stack direction="column">
            <Stack direction="row" justifyContent='space-between' width='100%'>
                <Typography fontSize={20} fontWeight={600} color='white'>Top  And Trending NFTs</Typography>
                <Button sx={{
                    width: '99px',
                    height: '40px',
                    padding: '12px, 18px, 12px, 18px',
                    borderRadius: '32px',
                    gap: '4px',
                    border: '1px solid #2B2928',
                    background: 'linear-gradient(0deg, #191919, #191919) linear-gradient(0deg, #2B2928, #2B2928)',
                    color:'#BEBCBE'

                }}> View More </Button>
            </Stack>
            <Stack direction='row' gap='24px' justifyContent='center' alignItems='center' sx={{overflowX:'scroll' , maxWidth : isDown ? '730px' : '100%'}}>
                {
                    nftItems.map((item) => <NftItem item={item}/>)
                }
            </Stack>
        </Stack>
    )
}