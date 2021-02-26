import React from 'react';
import loading from '../../assets/illustrations/loadingIllustrationOrange.svg';

const Preupload = () => {
    document.title = 'Write | Diffusion'

    return (
    <>
        <div className="container1">
        <div>
            <h1>Formatting</h1>
            <p>This can take some time. Feel free to contact hello@diffusionapp.com for any reason. Once this process is complete you'll be live!</p>
        </div>
        <img src={loading} alt="question illustration"></img>
    </div>
    </>
    )
}

export default Preupload;