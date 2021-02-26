import React from 'react';

import { useRecoilState } from 'recoil';
import { uploadModalDisplayState } from '../../state/Atoms';

import uploadIllustration from '../../assets/illustrations/uploadIllustrationYellow.svg';
import UploadModal from '../../components/upload/UploadModal';

const Preupload = () => {
    document.title = 'Write | Diffusion'

    const [uploadModalDisplay, setUploadModalDisplay] = useRecoilState(uploadModalDisplayState);

    const toggleModal = () => {
        setUploadModalDisplay(true)
    }

    if(uploadModalDisplay) {
        return (
            < UploadModal />
        )
    } else {
        return (
        <>
            <div className="container1">
            <div>
                <h1>Simply start by uploading a book</h1>
                <p>This will start the formatting process. You'll be able to proceed when your book has finished formatting. You can upload a small piece or the entire thing.</p>
                <button className="shadow--orange hover unhover" onClick={toggleModal}>Get Started!</button>
            </div>
            <img src={uploadIllustration} alt="question illustration"></img>
            </div>
        </>
        )
    }
}

export default Preupload;