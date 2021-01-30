import React from 'react';
import AuthorNavbar from '../../components/navbars/AuthorNavbar';

// Share btns
import ShareBtns from '../../components/share btns/ShareBtns';

// Illustration
import uploadIllustration from '../../assets/illustrations/uploadIllustrationYellow.svg';

// Help Btn
import HelpBtn from '../../components/help btn/HelpBtn';

import Background from '../../components/background/Background';

// Upload process
import UploadModal from '../../components/upload modal/UploadModal';
import Formatting from '../../components/Formatting';

import './Write.css';

class Write extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultContent: true,
      uploadModal: false,
      formatting: false
    }
    this.defaultContent = this.defaultContent.bind(this);
    this.uploadModal = this.uploadModal.bind(this);
    this.formatting = this.formatting.bind(this);
  }

  defaultContent() {
    this.setState({ defaultContent: true });
    this.setState({ uploadModal: false });
    this.setState({ formatting: false });
  }

  uploadModal() {
    this.setState({ defaultContent: false });
    this.setState({ uploadModal: true });
    this.setState({ formatting: false });
  }

  formatting() {
    this.setState({ defaultContent: false });
    this.setState({ uploadModal: false });
    this.setState({ formatting: true });
  }

  render() {
    let { defaultContent, uploadModal, formatting } = this.state;
    return (
    <>
      <AuthorNavbar></AuthorNavbar>
      {
        defaultContent
        &&
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
          <ShareBtns></ShareBtns>
          <HelpBtn></HelpBtn>
        </>
      }
      {
        uploadModal
        &&
        <UploadModal defaultContent={this.defaultContent} formatting={this.formatting}></UploadModal>
      }
      {
        formatting
        &&
        <>
          <Formatting></Formatting>
          <ShareBtns></ShareBtns>
          <HelpBtn></HelpBtn>
        </>
      }
      <Background></Background>
    </>
    );
  }
}

export default Write;
