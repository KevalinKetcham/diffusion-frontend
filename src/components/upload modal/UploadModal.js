import React from 'react';

// CSS
import './UploadModal.css'

class UploadModal extends React.Component {
  render() {
    return (
      <>
      <div className="modal">
        <div className="modal__content">
          <p className="modal__p" onClick={this.props.defaultContent}>back</p>
          <h1>Upload</h1>
          <form className="upload__form">
            <label id="upload" className="label--file" for="file">Add file</label>
            <input className="form__file" id="file" type="file"></input>
            <label className="form__label" for="title">Title</label>
            <input className="form__text" id="title" placeholder="Harry Potter and the Sorcerer's Stone" type="text" autocomplete="off"></input>
            <label className="form__label" for="desc">Description</label>
            <textarea className="form__textarea" placeholder="Describe the piece here..."></textarea>
            <label className="form__label" for="tags">Tags</label>
            <input className="form__text" id="tags" placeholder="Fantasy, Adventure, Narrative" type="text" autocomplete="off"></input>
            <label className="form__label" for="pname">Pen name</label>
            <input className="form__text" id="pname" placeholder="J.K. Rowling" type="text" autocomplete="off"></input>
            <button className="publishBtn" onClick={this.props.formatting}>Submit</button>
            <p className="modal__p">Takes a few hours to process. We'll email you when your piece is ready to publish!</p>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default UploadModal;
