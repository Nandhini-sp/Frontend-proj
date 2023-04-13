import React, { useEffect } from 'react'
import { useState } from 'react'
import {
  // CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CContainer,
  CRow,
  CCol,
  CFormFloating,
  CFormInput,
  CFormLabel,
} from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify'
import { CButton } from '@coreui/react'
import AuthAxios from 'src/Interceptors/AuthAxios'

const ComplainBased = () => {
  const [visible, setVisible] = useState(false)
  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [state, setState] = useState({
    userId: '1',
    respiration: '',
    seizure: '',
    toxicExposure: '',
    cardiacArrest: '',
    chestPain: '',
    neonatal: '',
    obstetric: '',
    trauma: '',
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
    AuthAxios.post('PatientAssessment', state)
      .then((res) => {
        console.log(res.data)
        success(res.data.message)
        setVisible(false)
        setTimeout(() => {
          setState((prevProps) => ({
            ...prevProps,
            userId: '1',
            respiration: '',
            seizure: '',
            toxicExposure: '',
            cardiacArrest: '',
            chestPain: '',
            neonatal: '',
            obstetric: '',
            trauma: '',
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
                name="respiration"
                value={state.respiration}
                onChange={(event) => handleInputChange(event, 'respiration')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Respiration</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="seizure"
                value={state.seizure}
                onChange={(event) => handleInputChange(event, 'seizure')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Seizure</CFormLabel>
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
                name="toxicExposure"
                value={state.toxicExposure}
                onChange={(event) => handleInputChange(event, 'toxicExposure')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Toxic Exposure</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="cardiacArrest"
                value={state.cardiacArrest}
                onChange={(event) => handleInputChange(event, 'cardiacArrest')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">CardiacArrest</CFormLabel>
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
                name="chestPain"
                value={state.chestPain}
                onChange={(event) => handleInputChange(event, 'chestPain')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Chest Pain</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="neonatal"
                value={state.neonatal}
                onChange={(event) => handleInputChange(event, 'neonatal')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Neonatal</CFormLabel>
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
                name="obstetricc"
                value={state.obstetric}
                onChange={(event) => handleInputChange(event, 'obstetric')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Obstetric</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol lg={6} md={6} sm={12}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="trauma"
                value={state.trauma}
                onChange={(event) => handleInputChange(event, 'trauma')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Trauma</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CRow item xs={12}>
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
              <CFormInput
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
      </CRow>
      <ToastContainer />
    </div>
  )
}

export default ComplainBased
