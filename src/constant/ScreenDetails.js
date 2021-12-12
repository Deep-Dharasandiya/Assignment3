import React from 'react'
import { Dimensions ,Platform} from "react-native"

export default function ScreenDetails  (){

        const [screenInfo,setScreenInfo] = React.useState(Dimensions.get('screen'));

        React.useEffect(() => {
            
            const onChange = (result) =>{
                setScreenInfo(result.screen);
            }

            const event=Dimensions.addEventListener('change',onChange);

            return () =>event.remove();

        }, []);
        let unit=screenInfo.width*0.00138+ screenInfo.height *0.0006830;
        let landscapeUnit=unit;
        if(screenInfo.height<screenInfo.width){
            unit = unit * 0.65;
        }
        
         const Details={
            platform:Platform.OS,
            isPotraite:screenInfo.height>screenInfo.width,
            height:screenInfo.height,
            width:screenInfo.width,
            unit:unit,
            landscapeUnit:landscapeUnit,
            
        }
        return Details;  

}