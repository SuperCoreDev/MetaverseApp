import { useRef,useEffect } from "react";


export default function MonthlyCost ()  {
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
        <div ref={mainRef} style={{display: 'flex', flexDirection: 'column', gap:'24px', width: '100%' , opacity:0 , transition:'opacity 1s ease'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', width:'100%'}}>
                <div style={{color: '#8D8E8D', fontSize: '32px', fontWeight: '500'}}>Principal Interest</div>
                <div style={{color: 'white', fontSize: '32px', fontWeight: '600'}}>$1,345</div>
            </div>
            <div style={{width: '100%', height: '1px', backgroundColor: '#4A4D52'}}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', width:'100%'}}>
                <div style={{color: '#8D8E8D', fontSize: '32px', fontWeight: '500'}}>Mortgage Insurance</div>
                <div style={{color: 'white', fontSize: '32px', fontWeight: '600'}}>$5.4</div>
            </div>
            <div style={{width: '100%', height: '1px', backgroundColor: '#4A4D52'}}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', width:'100%'}}>
                <div style={{color: '#8D8E8D', fontSize: '32px', fontWeight: '500'}}>Property Taxes</div>
                <div style={{color: 'white', fontSize: '32px', fontWeight: '600'}}>$495</div>
            </div>
            <div style={{width: '100%', height: '1px', backgroundColor: '#4A4D52'}}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', width:'100%'}}>
                <div style={{color: '#8D8E8D', fontSize: '32px', fontWeight: '500'}}>Home Insurance</div>
                <div style={{color: 'white', fontSize: '32px', fontWeight: '600'}}>$63</div>
            </div>
            <div style={{width: '100%', height: '1px', backgroundColor: '#4A4D52'}}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', width:'100%'}}>
                <div style={{color: '#8D8E8D', fontSize: '32px', fontWeight: '500'}}>Rental Value</div>
                <div style={{color: 'white', fontSize: '32px', fontWeight: '600'}}>$2,587</div>
            </div>
            <div style={{width: '100%', height: '1px', backgroundColor: '#4A4D52'}}></div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch', width:'100%'}}>
                <div style={{color: '#EA8AE0', fontSize: '32px', fontWeight: '500'}}>Total Cost</div>
                <div style={{color: '#EA8AE0', fontSize: '32px', fontWeight: '600'}}>$2,587</div>
            </div>
        </div>
    )
}
