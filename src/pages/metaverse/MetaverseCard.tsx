import { Box, Container, Stack, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import { useState } from "react";

interface NftCardProps {
    image : string,
    name : string,
    content : string,
}

export default function MetaverseCard({image, name, content}:NftCardProps){
    const [hover, setHover]=useState(false);
    return (
        <div style={{background: '#202324', borderRadius: '16px', color: 'white'}} onMouseEnter={()=>setHover(!hover)} onMouseLeave={()=>setHover(!hover)}>
            <Card sx={{background: '#202324', width: '267px', height: '318px' }}>
                <img src="/assets/nfts/MetaverseCards/focus.png" style={{position:'absolute', right: '28px', top: '28px'}} />
                <CardActionArea style={{display: 'flex', flexDirection:'column', gap: '4px'}}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt="green iguana"
                        width='267px'
                        height={hover ? '120px' : '240px'}
                        style={{objectFit: 'fill', transition: 'height  0.3s', padding:'15px', paddingBottom:'0px'}}
                    />
                    <CardContent style={{fontFamily: ' Neue Haas Grotesk Display Pro', display:'flex', flexDirection:'column', height: '50%'}}>
                        <Typography gutterBottom variant="h5" component="div" color="white" style={{display: 'inline-flex', gap:'12px', fontSize:'20px', fontWeight: '600'}}>
                            <img src="/assets/nfts/mv_home.png" />
                            {name}
                        </Typography>
                        <Typography variant="body2" color="white" style={{fontSize:'12px', fontWeight: '500', display: hover ? '':'none'}}>
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}