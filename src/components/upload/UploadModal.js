import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userEmailState } from '../../state/Atoms';

import './Upload.css'

const UploadModal = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [signedRequest, setSignedRequest] = useState(null);
  const userEmail = useRecoilValue(userEmailState);
  
  const handleInputChange = (e) => {
    if(e.target.type === 'text') {
      setInputs(inputs => ({
        ...inputs,
        [e.target.name]: e.target.value
      }))
    } else {
      let selectedFile = e.target.files[0];
      setFile(selectedFile);
      let fileName = selectedFile.name;
      let fileType = selectedFile.type;
  
      fetch('http://localhost:3001/upload/sreq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fileName: fileName,
          fileType: fileType
        })
      })
      .then(response => response.json())
      .then(res => {
          setSignedRequest(res.signedRequest);
      })
    }
  }

  const upload = (e) => {
    e.preventDefault();

    let uploadData = {
      ...inputs,
      email: userEmail,
      s3File: file.name
    }

    fetch('http://localhost:3001/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadData)
      })
      .then(response => response.json())
      .then(res => {
          console.log(res);
      })

    fetch(`${signedRequest}`, {
      method: 'PUT',
      body: file
    })
    .then(response => response)
    .then(res => console.log(res))
  }



  return (
  <>


    <form onSubmit={upload}>
      <label id="upload" className="label--file" for="file">Add file</label>
      <input onChange={handleInputChange} className="form__file" id="file" type="file"></input>

      <label>Title</label>
      <input onChange={handleInputChange} name='title'></input>

      <label>Description</label>
      <input onChange={handleInputChange} name='description'></input>

      <label>Tags</label>
      <input onChange={handleInputChange} name='tags'></input>

      <label>Pen name</label>
      <input onChange={handleInputChange} name='penName'></input>

      <button>Upload</button>
    </form>

    {/* <div className="modal">
      <div className="modal__content">
        <p className="modal__p" onClick={backHandler()}>back</p>
        <h1>Upload</h1>

        <form onSubmit={handleSubmit} lassName="upload__form">
          <label id="upload" className="label--file" for="file">Add file</label>
          <input className="form__file" id="file" type="file" multiple></input>
          <label className="form__label" for="title">Title</label>
          <input className="form__text" id="title" placeholder="Harry Potter and the Sorcerer's Stone" type="text" autocomplete="off"></input>
          <label className="form__label" for="desc">Description</label>
          <textarea className="form__textarea" placeholder="Describe the piece here..."></textarea>
          <label className="form__label" for="tags">Tags</label>
          <input className="form__text" id="tags" placeholder="Fantasy, Adventure, Narrative" type="text" autocomplete="off"></input>
          <label className="form__label" for="pname">Pen name</label>
          <input className="form__text" id="pname" placeholder="J.K. Rowling" type="text" autocomplete="off"></input>
          <button className="publishBtn">Submit</button>
          <p className="modal__p">Takes a few hours to process. We'll email you when your piece is ready to publish!</p>
        </form>

      </div>
    </div> */}
  </>
  )
}

export default UploadModal;

// submit --> show loading screen for 3 seconds --> reload write page
