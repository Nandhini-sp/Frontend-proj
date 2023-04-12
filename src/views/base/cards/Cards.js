import React from 'react'
import { useState } from 'react'

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CContainer,
  CRow,
  CCol,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react'

import { CButton } from '@coreui/react'

import { Input } from 'reactstrap'

const Cards = () => {
  const [visible, setVisible] = useState(false)

  const [state, setState] = useState({
    userId: '',
    serviceCode: '',
    serviceType: '',
    dateOfIncident: '',
    timeOfIncident: '',
    incidentLocation_street: '',
    incidentLocation_city: '',
    incidentLocation_state: '',
    incidentLocation_postalCode: '',
    destinationDeterminant: '',
    graphicLocator: '',
    sceneLocationType: '',
    destinationFacility: '',
    sceneFacility: '',
    destinationLocationAddress: '',
    destinationLocation_street: '',
    destinationLocation_city: '',
    destinationLocation_state: '',
    destinationLocation_postalCode: '',
    servicePayment_responsibility: '',
    servicePayment_number: '',
    EMS: '',
    patientDisposition: '',
    destinationLocationType: '',
    email1: '',
    email2: '',
  })
  const handleInputChange = (event, name) => {
    const { value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }
  const submitHandler = () => {
    const item = {
      userId: '1',
      serviceCode: state.serviceCode,
      serviceType: state.serviceType,
      dateOfIncident: state.dateOfIncident,
      timeOfIncident: state.timeOfIncident,
      incidentLocation: {
        street: state.incidentLocation_street,
        city: state.incidentLocation_city,
        state: state.incidentLocation_state,
        postalCode: state.incidentLocation_postalCode,
      },
      destinationDeterminant: state.destinationDeterminant,
      graphicLocator: state.graphicLocator,
      sceneLocationType: state.sceneLocationType,
      destinationFacility: state.destinationFacility,
      sceneFacility: state.sceneFacility,
      destinationLocationType: state.destinationLocationType,
      destinationLocation: {
        street: state.destinationLocation_street,
        city: state.destinationLocation_city,
        state: state.destinationLocation_state,
        postalCode: state.destinationLocation_postalCode,
      },
      servicePayment: {
        responsibility: state.servicePayment_responsibility,
        number: state.servicePayment_number,
      },
      EMS: state.EMS,
      patientDisposition: state.patientDisposition,
      email1: state.email1,
      email2: state.email2,
    }
    // AuthAxios.post('IncidentCallDetails', item)
    //   .then((res) => {
    //     console.log(res.data)
    //     setTimeout(() => {
    //       location.href = '/'
    //     }, 2000)
    //   })
    //   .catch((err) => console.error(err.message))
    console.log(item)
  }

  return (
    <div>
      <CContainer>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                value={state.serviceCode}
                onChange={(event) => handleInputChange(event, 'serviceCode')}
                style={{ width: '490px', height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Service Code</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="serviceType"
                value={state.serviceType}
                onChange={(event) => handleInputChange(event, 'serviceType')}
                style={{ width: '490px', height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Service Type</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow className="mb-3">
          <CCol xs={6}>
            <Input
              type="Date"
              name="dateOfIncident"
              value={state.dateOfIncident}
              onChange={(event) => handleInputChange(event, 'dateOfIncident')}
              style={{ width: '490px', height: '50px' }}
            ></Input>
          </CCol>
          <CCol xs={6}>
            <Input
              type="Time"
              name="timeOfIncident"
              value={state.timeOfIncident}
              onChange={(event) => handleInputChange(event, 'timeOfIncident')}
              style={{ width: '490px', height: '50px' }}
            ></Input>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer className="">
        <CRow>
          <p>Incident Location</p>
          <CCol xs={6}>
            <CRow>
              <CCol xs={6}>
                <CFormFloating className="mb-3">
                  <CFormInput
                    type="text"
                    id="floatingInput"
                    placeholder="FirstName"
                    name="incidentLocation_street"
                    value={state.incidentLocation_street}
                    onChange={(event) => handleInputChange(event, 'incidentLocation_street')}
                    style={{ height: '50px' }}
                  />
                  <CFormLabel htmlFor="floatingInput">Street</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol xs={6}>
                <CFormFloating className="mb-3">
                  <CFormInput
                    type="text"
                    id="floatingInput"
                    placeholder="Surname"
                    name="incidentLocation_city"
                    value={state.incidentLocation_city}
                    onChange={(event) => handleInputChange(event, 'incidentLocation_city')}
                    style={{ height: '50px' }}
                  />
                  <CFormLabel htmlFor="floatingInput">city</CFormLabel>
                </CFormFloating>
              </CCol>
            </CRow>
          </CCol>
          <CCol xs={6}>
            <CRow>
              <CCol xs={6}>
                <CFormFloating className="mb-3">
                  <CFormInput
                    type="text"
                    id="floatingInput"
                    placeholder="FirstName"
                    name="incidentLocation_state"
                    value={state.incidentLocation_state}
                    onChange={(event) => handleInputChange(event, 'incidentLocation_state')}
                    style={{ height: '50px' }}
                  />
                  <CFormLabel htmlFor="floatingInput">State</CFormLabel>
                </CFormFloating>
              </CCol>
              <CCol xs={6}>
                <CFormFloating className="mb-3">
                  <CFormInput
                    type="text"
                    id="floatingInput"
                    placeholder="Surname"
                    name="incidentLocation_postalCode"
                    value={state.incidentLocation_postalCode}
                    onChange={(event) => handleInputChange(event, 'incidentLocation_postalCode')}
                    style={{ height: '50px' }}
                  />
                  <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
                </CFormFloating>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mt-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Destination Determinant"
                value={state.destinationDeterminant}
                onChange={(event) => handleInputChange(event, 'destinationDeterminant')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Destination Determinant</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mt-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Destination Determinant"
                value={state.destinationLocationType}
                onChange={(event) => handleInputChange(event, 'destinationLocationType')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Destination Location Type</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mt-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="graphicLocator"
                value={state.graphicLocator}
                onChange={(event) => handleInputChange(event, 'graphicLocator')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Geographic Locator</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mt-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="sceneFacility"
                value={state.sceneFacility}
                onChange={(event) => handleInputChange(event, 'sceneFacility')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Scene Facility</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer className="">
        <CRow className="mt-3">
          <p>Destination Location</p>
          <CCol xs={3}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="destinationLocation_street"
                value={state.destinationLocation_street}
                onChange={(event) => handleInputChange(event, 'destinationLocation_street')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Street</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={3}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="destinationLocation_city"
                value={state.destinationLocation_city}
                onChange={(event) => handleInputChange(event, 'destinationLocation_city')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">city</CFormLabel>
            </CFormFloating>
          </CCol>

          <CCol xs={3}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="destinationLocation_state"
                value={state.destinationLocation_state}
                onChange={(event) => handleInputChange(event, 'destinationLocation_state')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">State</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={3}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="destinationLocation_postalCode"
                value={state.destinationLocation_postalCode}
                onChange={(event) => handleInputChange(event, 'destinationLocation_postalCode')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Patient Disposition"
                value={state.patientDisposition}
                onChange={(event) => handleInputChange(event, 'patientDisposition')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Disposition</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Factors Affecting EMS"
                value={state.EMS}
                onChange={(event) => handleInputChange(event, 'EMS')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Factors Affecting EMS</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>
      <CContainer className="">
        <CRow>
          <p className="mt-3">Service Payment</p>
          <CRow>
            <CCol xs={6}>
              <CFormFloating className="mb-3">
                <CFormInput
                  type="text"
                  id="floatingInput"
                  placeholder="FirstName"
                  name="servicePayment_responsibility"
                  value={state.servicePayment_responsibility}
                  onChange={(event) => handleInputChange(event, 'servicePayment_responsibility')}
                  style={{ height: '50px' }}
                />
                <CFormLabel htmlFor="floatingInput">Response</CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol xs={6}>
              <CFormFloating className="mb-3">
                <CFormInput
                  type="text"
                  id="floatingInput"
                  placeholder="Surname"
                  name="servicePayment_number"
                  value={state.servicePayment_number}
                  onChange={(event) => handleInputChange(event, 'servicePayment_number')}
                  style={{ height: '50px' }}
                />
                <CFormLabel htmlFor="floatingInput">Number</CFormLabel>
              </CFormFloating>
            </CCol>
          </CRow>
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
              value={state.email1}
              onChange={(event) => handleInputChange(event, 'email1')}
              class="form-control validate"
            />
            <label data-error="wrong" data-success="right" for="form2">
              Hospital EMail-Id
            </label>
          </div>

          <div class="md-form mb-4">
            <i class="fas fa-envelope prefix grey-text"></i>
            <input
              type="email"
              id="form2"
              value={state.email2}
              onChange={(event) => handleInputChange(event, 'email2')}
              class="form-control validate"
            />
            <label data-error="wrong" data-success="right" for="form2">
              Ambulance EMail-Id
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
    </div>
  )
}

export default Cards
