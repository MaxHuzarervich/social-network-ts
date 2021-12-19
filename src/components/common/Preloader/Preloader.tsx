import preloader from '../../../assets/images/preloader.gif'
import React from "react";

export let Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader} alt={'preload'}  />
            {/*<CircularProgress />*/}
        </div>

    )
}