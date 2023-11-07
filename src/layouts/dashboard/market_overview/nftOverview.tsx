import Scrollbar from "src/components/scrollbar/Scrollbar"
import useResponsive from "src/hooks/useResponsive"
import { useRef , useEffect } from "react"
import { Stack, Typography, Button } from "@mui/material"
import nftItems from "./nftItemsConfig"
import NftItem from "./nftItem"



export default function NftOverView() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(ref.current)
        {ref.current.style.opacity = '1';
        ref.current.style.transition = 'opacity 2s ease';}
    } , [])
    const isDown = useResponsive('down', 1456)
    return (
        <Stack ref={ref} direction="column" sx={{opacity:'0' , transition:'none'}}>
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
                    color: '#BEBCBE'

                }}> View More </Button>
            </Stack>
            <Scrollbar sx={{ height: 1 }}>
                <Stack direction='row' gap='24px' justifyContent='space-between' alignItems='center' sx={{ minWidth: '730px' }}>
                    {
                        nftItems.map((item) => <NftItem item={item} />)
                    }
                </Stack>
            </Scrollbar>
        </Stack>
    )
}