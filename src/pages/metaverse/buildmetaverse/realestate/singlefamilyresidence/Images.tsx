const imageArray=[
    "/assets/nfts/MetaverseCards/RealEstate/image_1.png",
    "/assets/nfts/MetaverseCards/RealEstate/image_1.png",
    "/assets/nfts/MetaverseCards/RealEstate/image_1.png",
]

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e : any) => e.preventDefault();

const items = [
  <img src={imageArray[0]} onDragStart={handleDragStart} role="presentation" />,
  <img src={imageArray[1]} onDragStart={handleDragStart} role="presentation" />,
  <img src={imageArray[2]} onDragStart={handleDragStart} role="presentation" />,
];

const Images = () => {
  return (
    <AliceCarousel mouseTracking items={items} />
  );
}

export default Images;