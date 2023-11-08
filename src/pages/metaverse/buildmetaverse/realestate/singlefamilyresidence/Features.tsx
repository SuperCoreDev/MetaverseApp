import { useRef , useEffect } from "react"

export default function Features ()  {
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
        <div ref={mainRef} style={{display: 'flex', flexDirection: 'column', gap:'48px', overflow: 'hidden', width: '100%',
        opacity:0 , transition:'opacity 1s ease'}}>
            <div style={{fontSize: '32px', fontWeight: '600'}}>Interior Details</div>
            <div style={{display: 'flex', alignItems: 'flex-end', gap: '48px', alignSelf: 'stretch'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', flex: '1 0 0'}}>
                    <div style={{padding: '8px 16px 8px 16px', alignSelf: 'stretch', fontSize: '32px', fontWeight: '500'}}>Bedrooms & Bathrooms</div>
                    <div style={{paddingLeft: '36px'}}>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Visitor Toilet: 1</li>    
                            <li>2 garage spaces</li>
                        </ul>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', flex: '1 0 0'}}>
                    <div style={{padding: '8px 16px 8px 16px', alignSelf: 'stretch', fontSize: '32px', fontWeight: '500'}}>Bedrooms & Bathrooms</div>
                    <div style={{paddingLeft: '36px'}}>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Visitor Toilet: 1</li>    
                            <li>2 garage spaces</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end', gap: '48px', alignSelf: 'stretch'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', flex: '1 0 0'}}>
                    <div style={{padding: '8px 16px 8px 16px', alignSelf: 'stretch', fontSize: '32px', fontWeight: '500'}}>Bedrooms & Bathrooms</div>
                    <div style={{paddingLeft: '36px'}}>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Visitor Toilet: 1</li>    
                            <li>2 garage spaces</li>
                        </ul>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', flex: '1 0 0'}}>
                    <div style={{padding: '8px 16px 8px 16px', alignSelf: 'stretch', fontSize: '32px', fontWeight: '500'}}>Bedrooms & Bathrooms</div>
                    <div style={{paddingLeft: '36px'}}>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Visitor Toilet: 1</li>    
                            <li>2 garage spaces</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{widows: '100%', height: '1px', backgroundColor: '#4A4D52'}}></div>
            <div style={{fontSize: '32px', fontWeight: '600'}}>Other Features</div>
            <div style={{display: 'flex', alignItems: 'flex-end', gap: '48px', alignSelf: 'stretch'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', flex: '1 0 0'}}>
                    <div style={{padding: '8px 16px 8px 16px', alignSelf: 'stretch', fontSize: '32px', fontWeight: '500'}}>Bedrooms & Bathrooms</div>
                    <div style={{paddingLeft: '36px'}}>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Visitor Toilet: 1</li>    
                            <li>2 garage spaces</li>
                        </ul>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px', flex: '1 0 0'}}>
                    <div style={{padding: '8px 16px 8px 16px', alignSelf: 'stretch', fontSize: '32px', fontWeight: '500'}}>Bedrooms & Bathrooms</div>
                    <div style={{paddingLeft: '36px'}}>
                        <ul>
                            <li>Bedrooms: 3</li>
                            <li>Bathrooms: 2</li>
                            <li>Visitor Toilet: 1</li>    
                            <li>2 garage spaces</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
