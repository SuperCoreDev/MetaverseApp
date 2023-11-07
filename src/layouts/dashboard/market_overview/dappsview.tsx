import { Stack , Typography , Button} from "@mui/material"
import { useRef , useEffect } from "react"
import StylingRowsGrid from "./dappsgrid"


export default function DappsView() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(ref.current)
        {ref.current.style.opacity = '1';
        ref.current.style.transition = 'opacity 2s ease';}
    } , [])
    return (
        <Stack ref={ref} sx={{opacity:'0' , transition:'none'}} direction="column" gap={4}>
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
            <StylingRowsGrid/>
        </Stack>
    )
}