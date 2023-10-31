import { Box, Container, Stack, Typography } from "@mui/material";
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';

interface NftCardProps {
    nftImage : string,
    nftName : string,
    nftNetwork : Array<string>,
    manaVal : number,
    usdVal : number,
    island : boolean
}

const InfoBox = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    fontFamily : 'Neue Haas Grotesk Display Pro',
    color:'white'
})
export default function NftCard({nftImage,nftName,nftNetwork,manaVal,usdVal,island}:NftCardProps){
    return (
        <Container sx={{borderRadius:'18px' , border:'1px solid rgba(198, 224, 255, 0.50)',
            background: 'rgba(217, 217, 217, 0.20)' , backdropFilter:'blur(10px)',
            padding:"22.16px 13.51px 20.88px 14.41px"}}>
                <Stack direction='column' gap="14px">
                    <img src={nftImage} alt="nftitem" style={{width:'100%'}} height={242.953}/>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography color="#8BF8FF" fontSize={20} fontWeight={700}>{nftName}</Typography>
                        <Stack direction='row' gap="4px">
                            {
                                nftNetwork.map(nft => (
                                    <Box sx={{borderRadius:'1000px' , backgroundColor:'#2B2B2B', width:'32px', height:'32px' , padding:'4px'}}>
                                        {nft === 'polygon' ? <Icon icon="devicon-plain:polygon" color="#7950d0" width='24' height='24'/> :
                                        <Icon icon="logos:ethereum" width='24' height='24'/>}
                                    </Box>
                                ))
                            }
                        </Stack>
                    </Stack>
                    <Box sx={{padding:'8px' , backgroundColor:'black'}}>
                        <Stack direction='row' justifyContent='space-between'>
                            <InfoBox>
                                <Typography fontSize={14} fontWeight={600}>{manaVal}ETH </Typography>
                                <Typography fontSize={10} fontWeight={500}>MANA </Typography>
                            </InfoBox>
                            <InfoBox>
                                <Typography fontSize={14} fontWeight={600}>${usdVal} </Typography>
                                <Typography fontSize={10} fontWeight={500} color="#F75BB1">USD </Typography>
                            </InfoBox>
                            {island && (
                                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center' , backgroundColor:'#2B2B2B' , padding:'0px 8px' , borderRadius:'6px'}}>
                                    <Typography color='white' fontSize={14} fontWeight={500}>8 Land(s)</Typography>
                                </Box>
                            )}
                        </Stack>
                    </Box>
                </Stack>
        </Container>
    )
}