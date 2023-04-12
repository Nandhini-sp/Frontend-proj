import React from 'react'
import { useState } from 'react'

import { CButton } from '@coreui/react'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CContainer,
  CRow,
  CCol,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormCheck,
  CFormFloating,
} from '@coreui/react'
import { email } from 'react-admin'

const Buttons = () => {
  const [visible, setVisible] = useState(false)

  const [state, setState] = useState({
    userId: '',
    dateOfInjury: '',
    timeOfInjury: '',
    coResponders: '',
    treatmentRendered: '',
    patientCondition: '',
    patientDisplacement: '',
    suspectedIntoxication: '',
    chiefComplaint: '',
    email: '',
  })
  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const submitHandler = () => {
    // AuthAxios.post('PatientHistoryAssessment', state)
    //   .then((res) => {
    //     console.log(res.data)
    //     setTimeout(() => {
    //       location.href = '/'
    //     }, 2000)
    //   })
    //   .catch((err) => console.error(err.message))
    console.log(state)
    // location.href = '/#/login'
  }

  return (
    <div>
      <CContainer>
        <CRow className="mb-3">
          <CCol xs={6}>
            <p>Date Of Injury</p>
            <CFormInput
              type="Date"
              name="dateOfInjury"
              value={state.dateOfInjury}
              onChange={(event) => handleInputChange(event, 'dateOfInjury')}
              style={{ height: '50px' }}
            ></CFormInput>
          </CCol>
          <CCol xs={6}>
            <p>Time Of Injury</p>
            <CFormInput
              type="Time"
              name="timeOfInjury"
              value={state.timeOfInjury}
              onChange={(event) => handleInputChange(event, 'timeOfInjury')}
              style={{ height: '50px' }}
            ></CFormInput>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Co-Respondars"
                value={state.coResponders}
                onChange={(event) => handleInputChange(event, 'coResponders')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Co-Respondars</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Treatment Rendered"
                value={state.treatmentRendered}
                onChange={(event) => handleInputChange(event, 'treatmentRendered')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Treatment Rendered</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow className="mt-3">
          <CCol xs={6}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Patient Condition at Destination"
                value={state.patientCondition}
                onChange={(event) => handleInputChange(event, 'patientCondition')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Condition at Destination</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6} className="">
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Patient Displacement"
                value={state.patientDisplacement}
                onChange={(event) => handleInputChange(event, 'patientDisplacement')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Displacement</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow className="mt-3 mb-4">
          <CCol xs={6}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Suspected Intoxication"
                value={state.suspectedIntoxication}
                onChange={(event) => handleInputChange(event, 'suspectedIntoxication')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Suspected Intoxication</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol xs={6}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Chief Complaint"
                value={state.chiefComplaint}
                onChange={(event) => handleInputChange(event, 'chiefComplaint')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Chief Complaint</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
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
      </CContainer>
    </div>
  )
}

export default Buttons
