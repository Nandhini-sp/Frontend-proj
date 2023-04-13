import React, { useEffect } from 'react'
import { useState } from 'react'

import { CButton, CContainer } from '@coreui/react'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CRow,
  CCol,
  CFormFloating,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify'
import AuthAxios from 'src/Interceptors/AuthAxios'

const ButtonGroups = () => {
  const [visible, setVisible] = useState(false)
  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [state, setState] = useState({
    userId: '1',
    neroResponse: '',
    bodySystem: '',
    glasGlow: '',
    generalAssessment: '',
    airway: '',
    symptoms: '',
    email: '',
  })
  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const users = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    setState((prevProps) => ({
      ...prevProps,
      userId: users.result._id,
    }))
  }, [])

  const submitHandler = () => {
    AuthAxios.post('PrimaryAssessment', state)
      .then((res) => {
        console.log(res.data)
        success(res.data.message)
        setVisible(false)
        setTimeout(() => {
          setState((prevProps) => ({
            ...prevProps,
            userId: '1',
            neroResponse: '',
            bodySystem: '',
            glasGlow: '',
            generalAssessment: '',
            airway: '',
            symptoms: '',
            email: '',
          }))
        }, 1000)
      })
      .catch((err) => {
        failure('Internal Server Error')
        console.error(err.message)
      })
  }

  return (
    <div>
      <CContainer>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="neroResponse"
                value={state.neroResponse}
                onChange={(event) => handleInputChange(event, 'neroResponse')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Nero Response</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="bodySystem"
                value={state.bodySystem}
                onChange={(event) => handleInputChange(event, 'bodySystem')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Body System</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="glasGlow"
                value={state.glasGlow}
                onChange={(event) => handleInputChange(event, 'glasGlow')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Glasgow and pupil</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="generalAssessment"
                value={state.generalAssessment}
                onChange={(event) => handleInputChange(event, 'generalAssessment')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">General Assessment</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="airway"
                value={state.airway}
                onChange={(event) => handleInputChange(event, 'airway')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Airway</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="symptoms"
                value={state.symptoms}
                onChange={(event) => handleInputChange(event, 'symptoms')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Symbtoms</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CRow>
        <CCol xs={12}>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success" onClick={() => setVisible(!visible)}>
              Submit
            </button>
          </div>
        </CCol>
      </CRow>

      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>DOTTY CARE</CModalTitle>
        </CModalHeader>

        <div class="modal-body mx-3">
          <div class="md-form mb-4">
            <i class="fas fa-envelope prefix grey-text"></i>
            <input
              type="email"
              id="form2"
              value={state.email}
              onChange={(event) => handleInputChange(event, 'email')}
              class="form-control validate"
            />
            <label data-error="wrong" data-success="right" for="form2">
              Hospital EMail-Id
            </label>
          </div>
        </div>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary" onClick={() => submitHandler()}>
            Submit
          </CButton>
        </CModalFooter>
      </CModal>
      <ToastContainer />
    </div>
  )
}

export default ButtonGroups
