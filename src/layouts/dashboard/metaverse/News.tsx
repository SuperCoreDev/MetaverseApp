import { Container, Box, TextField, Typography, Switch, Stack, Button } from '@mui/material';
import { Icon } from '@iconify/react'
import { styled } from '@mui/material/styles';

import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import NewsItem from './NewsItem';
import useResponsive from 'src/hooks/useResponsive';


const LeftComp = styled('div')({
    width: '100%',
    backgroundColor: '#1E2121',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    borderRadius: '18px',
    padding: '24px',
    border: '1px solid #2B2E31'
})

const fontName = 'Neue Haas Grotesk Display Pro'

const decentralizedNews = [
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/bbc.png',
        'title' : 'BBC host Asia verse on Decentraland th...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/expensiveland.png',
        'title' : 'Macron Shows Up on Decentraland Firs...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/macron.png',
        'title' : 'Most Expensive Land in the metaverse...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/bbc.png',
        'title' : 'BBC host Asia verse on Decentraland th...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/expensiveland.png',
        'title' : 'Macron Shows Up on Decentraland Firs...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/macron.png',
        'title' : 'Most Expensive Land in the metaverse...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/bbc.png',
        'title' : 'BBC host Asia verse on Decentraland th...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/expensiveland.png',
        'title' : 'Macron Shows Up on Decentraland Firs...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    },
    {
        'imageSrc' : '/assets/images/metaverse/decentralized_news/macron.png',
        'title' : 'Most Expensive Land in the metaverse...',
        'content' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, entum tellus...',
        'readingTime' : 2,
        'voteCount' : 28,
        'shareCount' : 72
    }
]


export default function News() {
    const isdesktop = useResponsive('up',1200)
    const ismini = useResponsive('down',870);
    return (
        <LeftComp>
            <Typography color='white' fontSize={32} fontWeight={600} textAlign='left'>Decentralized News</Typography>
            <Grid container wrap='wrap' justifyContent='space-evenly' gap='24px'>
                {
                    decentralizedNews.map(d => (
                        <Grid item sx={{width:`${isdesktop? '30%' : ismini? '90%' : '45%'}`}}>
                            <NewsItem imageSrc={d.imageSrc} title={d.title} content={d.content} readingTime={d.readingTime} 
                            voteCount={d.voteCount} shareCount={d.shareCount}/>
                        </Grid>
                    ))
                }
            </Grid>
        </LeftComp>
        )
}