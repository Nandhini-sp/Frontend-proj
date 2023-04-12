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
} from '@coreui/react'
import { email } from 'react-admin'

const Buttons = () => {
  const [visible, setVisible] = useState(false)

  const [state, setState] = useState({
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
    //  AuthAxios.post('Users', state)
    //   .then((res) => {
    //     console.log(res.data)
    //     location.href = '/#/callDetails'
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
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="coResponders"
              value={state.coResponders}
              onChange={(event) => handleInputChange(event, 'coResponders')}
              style={{ height: '50px' }}
            >
              <option>Co-Respondars</option>
              <option value="1">Law Enforcement</option>
              <option value="2">Fire</option>
              <option value="3">Other Fire Respondars</option>
              <option value="4">None</option>
            </CFormSelect>
          </CCol>
          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="treatmentsProvided"
              value={state.treatmentsProvided}
              onChange={(event) => handleInputChange(event, 'treatmentsProvided')}
              style={{ height: '50px' }}
            >
              <option>Treatment Provided by Co-Respondars</option>
              <option value="1">Yes</option>
              <option value="2">NO</option>
              <option value="3">Unknown</option>
              <option value="4">Not applicable</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow className="mt-3">
          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="patientCondition"
              value={state.patientCondition}
              onChange={(event) => handleInputChange(event, 'patientCondition')}
              style={{ height: '50px' }}
            >
              <option>Patient Condition at Destination</option>
              <option value="1">Stable</option>
              <option value="2">Improved</option>
              <option value="3">Deteriorated</option>
              <option value="4">None</option>
            </CFormSelect>
          </CCol>
          <CCol xs={6} className="">
            <CFormLabel
              htmlFor="floatingInput"
              name="patientDisplacement"
              value={state.patientDisplacement}
              onChange={(event) => handleInputChange(event, 'patientDisplacement')}
              // style={{height:"10px"}}
            >
              Patient Displacement
            </CFormLabel>

            <div>
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox1"
                value="option1"
                label="Yes"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                label="No"
              />
              <CFormCheck
                inline
                type="radio"
                name="inlineRadioOptions"
                id="inlineCheckbox2"
                value="option2"
                label="Other"
              />
            </div>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow>
          <CCol xs={12}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="suspectedIntoxication"
              value={state.suspectedIntoxication}
              onChange={(event) => handleInputChange(event, 'suspectedIntoxication')}
              style={{ height: '50px' }}
            >
              <option>Suspected Intoxication</option>
              <option value="1">Yes As Reported by Patient</option>
              <option value="2">Yes As Reported bystander </option>
              <option value="3">Yes As Reported byProvider</option>
              <option value="4">Not suspected</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer>
        <CRow>
          <CCol xs={12}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="chiefComplaint"
              value={state.chiefComplaint}
              onChange={(event) => handleInputChange(event, 'chiefComplaint')}
              style={{ height: '50px' }}
            >
              <option>Chief Complaint</option>
              <option value="1">Chest Pain</option>
              <option value="2">Yes As Reported bystander </option>
              <option value="3">Yes As Reported byProvider</option>
              <option value="4">Not suspected</option>
            </CFormSelect>
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
