import preloader from '../../../assets/images/preloader.gif'
import React from "react";
import {CircularProgress} from "@material-ui/core";

export let Preloader = () => {
    return (
        <div style={{backgroundColor: '#f3d73e', textAlign: 'center'}}>
            {/*<img src={preloader} alt={'preload'}  />*/}
            <CircularProgress/>
        </div>

    )
}