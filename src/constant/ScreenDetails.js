import React from 'react'
import { Dimensions ,Platform} from "react-native"


export default ScreenDetails = () => {

        const [screenInfo,setScreenInfo] = React.useState(Dimensions.get('screen'));

        React.useEffect(() => {
            
            const onChange = (result) =>{
                setScreenInfo(result.screen);
            }

            const event=Dimensions.addEventListener('change',onChange);

            return () =>event.remove();

        }, []);
        const baseWidth = 360;
        const baseHeight = 700;
        const scaleWidth = screenInfo.width / baseWidth;
        const scaleHeight = screenInfo.height / baseHeight;
        const scale = Math.min(scaleWidth, scaleHeight);
        
        
        const Details={
            platform:Platform.OS,
            isPotraite:screenInfo.height>screenInfo.width,
            height:screenInfo.height,
            width:screenInfo.width,
            scale:scale,
            unit:screenInfo.width*0.00138+ screenInfo.height *0.0006830
            
        }

        return Details;  

}