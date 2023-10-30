import { Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';

interface NewsItemProps {
    imageSrc : string,
    title : string,
    content : string,
    readingTime : number,
    voteCount : number,
    shareCount : number
}

export default function NewsItem({imageSrc, title , content, readingTime , voteCount , shareCount}:NewsItemProps){
    return(
        <Stack fontFamily='Neue Haas Grotesk Display Pro' color='white'
        sx={{padding:"18px 16px 18px 16px" , borderRadius:'18px',border: '1px solid #3A3D41',backgroundColor: '#2B2E31'}} 
        direction='column' gap='24px'>
            <img src={imageSrc} width='100%' height='226px' alt='newsImageItem'/>
            <Typography fontSize={32} fontWeight={900}>{title}</Typography>
            <Typography fontSize={20} fontWeight={500}>{content}</Typography>
            <Stack direction='row' gap='30px' fontFamily='Poppins' fontSize={10} fontWeight={500}>
                <Typography>{readingTime}mins Read</Typography>
                <Stack direction='row' gap="4px">
                    <Icon icon="radix-icons:heart-filled" color="red" width="18" height="16" />
                    {voteCount}
                </Stack>
                <Stack direction='row' gap="4px">
                    <Icon icon="clarity:share-line" color="white" width="16" height="16" />
                    {shareCount}
                </Stack>
                <Icon icon="teenyicons:bookmark-outline" width="10" height="16" />
            </Stack>
        </Stack>
    )
}