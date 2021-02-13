import React from 'react';
import CachedIcon from '@material-ui/icons/Cached';

import './LoadingScreen.css'

class LoadingScreen extends React.Component {
    render() {
        return(
        <>
            <div className="modal LoadingScreen">
                <CachedIcon className="loadingIcon" style={{ fontSize: 120 }}></CachedIcon>
            </div>
        </>
        )
    }
}

export default LoadingScreen;
