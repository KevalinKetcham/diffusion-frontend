import React, { useState } from 'react';

import uploadIllustration from '../../assets/illustrations/uploadIllustrationYellow.svg';

import UploadModal from '../../components/upload/UploadModal';

const Preupload = () => {
    const [modal, setModal] = useState(false);

    if(true) {
        return (
            < UploadModal />
            
        )
    } else {
        return (
            <>
                <div className="container1">
                    <div>
                        <h1>Simply start by uploading a book</h1>
                        <p>Upload a piece (however much you want to start with) of your book and we’ll handle distribution, monetization, and guide you along the way.</p>
                        <p>This will start the auto formating process. You will be able to proceed when your book has finished formating. Again, you can upload a small peice or the entire thing.</p>
                        <button className="shadow--orange hover unhover" onClick={()=>this.uploadModal()}>Get Started!</button>
                    </div>
                    <img src={uploadIllustration} alt="question illustration"></img>
                  </div>
            </>
            )
    }
}

export default Preupload;