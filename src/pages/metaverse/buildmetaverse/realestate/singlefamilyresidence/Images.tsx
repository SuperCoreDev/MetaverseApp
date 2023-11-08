import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { useRef,useEffect } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Box } from '@mui/material';

const imageArray = [
  "/assets/nfts/MetaverseCards/RealEstate/image_1.png",
  "/assets/nfts/MetaverseCards/RealEstate/image_1.png",
  "/assets/nfts/MetaverseCards/RealEstate/image_1.png",
]

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <img src={imageArray[0]} alt='img' onDragStart={handleDragStart} role="presentation" style={{ width: '100%' }} />,
  <img src={imageArray[1]} alt='img' onDragStart={handleDragStart} role="presentation" style={{ width: '100%' }} />,
  <img src={imageArray[2]} alt='img' onDragStart={handleDragStart} role="presentation" style={{ width: '100%' }} />,
];

const Images = () => {
  const mainRef= useRef<HTMLDivElement>(null);
  useEffect(() => {
      if(mainRef.current)
      {
          const currentRef = mainRef.current;
          requestAnimationFrame(() => {
              currentRef.style.opacity = '1';
          });
      }
      
  },[])
  return (
    <Box ref={mainRef} sx={{opacity:0 , transition:'opacity 1s ease'}}>
      <AliceCarousel mouseTracking items={items} />
    </Box>
  )
}

export default Images;