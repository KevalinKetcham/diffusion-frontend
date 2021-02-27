import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userEmailState, alertState, uploadModalDisplayState } from '../../state/Atoms';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import './Upload.css'

const UploadModal = () => {
  let ORIGIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://diffusion-backend-development.up.railway.app';

  const [file, setFile] = useState(null);
  const [signedRequest, setSignedRequest] = useState(null);
  const userEmail = useRecoilValue(userEmailState);
  const setAlert = useSetRecoilState(alertState);
  const setUploadModalDisplay = useSetRecoilState(uploadModalDisplayState);

  const toggleModal = () => {
    setUploadModalDisplay(false)
  }
  
  const handleInputChange = (e) => {
    let selectedFile = e.target.files[0];
    setFile(selectedFile);
    let fileName = selectedFile.name;
    let fileType = selectedFile.type;

    console.log(fileName, fileType)

    fetch(`${ORIGIN}/upload/sreq`, {
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

  return (
  <>
    <p onClick={toggleModal} className="auth__p">back</p>
    <Formik
      initialValues={{ title: '', description: '', tags: '', penName: '' }}
      validationSchema={yup.object({
        title: yup.string()
          .required('Required'),
        description: yup.string()
          .required('Required'),
        tags: yup.string()
          .required('Required'),
        penName: yup.string()
          .required('Required'),
      })}
      onSubmit={(values) => {
        if(file === null) {
          setAlert({ display: true, message: 'File missing!' })
        } else {
          let uploadData = {
            ...values,
            email: userEmail,
            s3File: file.name
        }

        const sendMetadata = () => {
          fetch(`${ORIGIN}/upload`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
          })
          .then(response => response.json())
          .then(res => {
            if(res.status === 200) {
              setAlert({ display: true, message: res.message })
              setTimeout(() => {
                window.location.reload()
              }, 3000)
            } else {
              setAlert({ display: true, message: res.err })
            }
          })
        }

        fetch(`${signedRequest}`, {
          method: 'PUT',
          body: file
        })
          .then(response => response)
          .then(res => {
            if(res.status === 200) {
              sendMetadata();
            } else {
              setAlert({ display: true, message: 'Error uploading file! Server problem, email: hello@diffusionapp.com' })
            }
          })
        }
      }}
    >
      <Form className="upload__form">
        <label id="upload" className="label--file" for="file">Add file</label>
        <input onChange={handleInputChange} className="form__file" id="file" type="file"></input>

        <label className="form__label" htmlFor="title">Title</label>
        <Field className="form__text" id="title" name="title" type="text" placeholder="Harry Potter and the Sorcerer's Stone" />
        <ErrorMessage name="title">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

        <label className="form__label" htmlFor="description">Description</label>
        <Field as="textarea" className="form__textarea" id="description" name="description" type="text" placeholder="Describe the piece here..." />
        <ErrorMessage name="description">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

        <label className="form__label" htmlFor="tags">Tags</label>
        <Field className="form__text" id="tags" name="tags" type="text" placeholder="Separate by commas (Ex. fantasy, adventure, etc.)" />
        <ErrorMessage name="tags">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

        <label className="form__label" htmlFor="penName">Pen name</label>
        <Field className="form__text" id="penName" name="penName" type="text" placeholder="J.K. Rowling" />
        <ErrorMessage name="penName">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

        <button className="publishBtn" type="submit">Submit</button>
      </Form>
    </Formik>
  </>
  )
}

export default UploadModal;
