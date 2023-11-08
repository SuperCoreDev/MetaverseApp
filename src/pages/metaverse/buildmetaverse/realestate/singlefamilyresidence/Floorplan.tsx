import { useRef, useEffect } from "react";

export default function Floorplan ()  {
    const mainRef= useRef<HTMLDivElement>(null);
  useEffect(() => {
      if(mainRef.current)
      {
          const currentRef = mainRef.current;
          requestAnimationFrame(() => {
              currentRef.style.opacity = '1';
          });
      }
      //opacity:0 , transition:'opacity 1s ease'
  },[])
    return (
        <div ref={mainRef} style={{opacity:0 , transition:'opacity 1s ease',display: 'flex', flexDirection: 'column', gap:'48px', overflow: 'hidden', width: '100%'}}>
            <div style={{fontSize: '32px', fontWeight: '600'}}>Main Floor Plan</div>
            <div style={{backgroundBlendMode: 'screen'}}>
                <img src="/assets/nfts/MetaverseCards/RealEstate/Floorplanmain.png" />
            </div>
        </div>
    )
}
