import React from 'react'
import { useState } from 'react'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

import 'react-time-picker/dist/TimePicker.css'
import 'react-clock/dist/Clock.css'

import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CRow,
  CCol,
  CFormLabel,
  CContainer,
  CFormFloating,
  CFormInput,
  CFormSelect,
} from '@coreui/react'
import './style.css'

const crewTypes = [
  'EMT-1',
  'EMT-2',
  'EMT-3',
  'EMR',
  'PCP',
  'ACP',
  'CCP',
  'RT',
  'RN',
  'MD',
  'Student',
  'Other',
]

const BreadCrumbs = () => {
  const [time, setTime] = useState('')
  const [visible, setVisible] = useState(false)

  const [state, setState] = useState({
    timeNotified: '',
    timeEnroute: '',
    timeAtScene: '',
    crewPatient: '',
    timeOutScene: '',
    timeAtDestination: '',
    available: '',
    backArea: '',
    responseToScene: '',
    responseFromScene: '',

    // driver: "",
    // attendent: "",
    // assisting: "",
    mileage: '',

    patientContact: '',
    destinationDeterminant: '',
    startDate: '',
    endDate: '',
    dateModified: '',
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
    <div className="vehicle">
      <CContainer className="m-0 mb-4">
        <CRow className="mb-3">
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time Notified
            </CFormLabel>
            <p>
              Selected Time:
              {time || '-'}
            </p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTime(e.format('LT'))}
              name="timeNotified"
              value={state.timeNotified}
              onClick={(event) => handleInputChange(event, 'timeNotified')}
              className="times"
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time En Route
            </CFormLabel>
            <p className="" sty>
              Selected Time: {time || '-'}
            </p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTime(e.format('LT'))}
              name="timeEnroute"
              value={state.timeEnroute}
              onClick={(event) => handleInputChange(event, 'timeEnroute')}
              className="times"
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time At Scene
            </CFormLabel>
            <p className="" sty>
              Selected Time: {time || '-'}
            </p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTime(e.format('LT'))}
              name="timeAtDestination"
              value={state.timeAtDestination}
              onClick={(event) => handleInputChange(event, 'timeAtDestination')}
              className="times"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time Out Of Scene
            </CFormLabel>
            <p className="" sty>
              Selected Time: {time || '-'}
            </p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTime(e.format('LT'))}
              name="timeOutScene"
              value={state.timeOutScene}
              onClick={(event) => handleInputChange(event, 'timeOutScene')}
              className="times"
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time out of Scene
            </CFormLabel>
            <p className="" sty>
              Selected Time: {time || '-'}
            </p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTime(e.format('LT'))}
              name="timeOutScene"
              value={state.timeOutScene}
              onClick={(event) => handleInputChange(event, 'timeOutScene')}
              className="times"
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time At Destination
            </CFormLabel>
            <p className="" sty>
              Selected Time: {time || '-'}
            </p>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => setTime(e.format('LT'))}
              name="timeAtDestination"
              value={state.timeAtDestination}
              onClick={(event) => handleInputChange(event, 'timeAtDestination')}
              className="times"
            />
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow className="">
          <CCol xs={4} className="">
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="crewPatient"
                value={state.crewPatient}
                onChange={(event) => handleInputChange(event, 'crewPatient')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Crew Patient</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={4}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="available"
                value={state.available}
                onChange={(event) => handleInputChange(event, 'available')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Available</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={4}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="backArea"
                value={state.backArea}
                onChange={(event) => handleInputChange(event, 'backArea')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">BackArea</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="responseToScene"
              value={state.responseToScene}
              onChange={(event) => handleInputChange(event, 'responseToScene')}
              style={{ height: '50px' }}
            >
              <option>Response To Scene</option>
              <option value="1">Type</option>
              <option value="2">Change in Response</option>
            </CFormSelect>
          </CCol>

          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="responseFromScene"
              value={state.responseFromScene}
              onChange={(event) => handleInputChange(event, 'responseFromScene')}
              style={{ height: '50px' }}
            >
              <option>Response From Scene</option>
              <option value="1">Type</option>
              <option value="2">Change in Response</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow>
          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="crewTypes"
              value={state.crewTypes}
              onChange={(event) => handleInputChange(event, 'crewTypes')}
              style={{ height: '50px' }}
            >
              <option>Crew Type</option>
              <option value="1">Driver</option>
              <option value="2">Attendant</option>
              <option value="3">Assisting Personal</option>
            </CFormSelect>
          </CCol>

          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              name="mileage"
              value={state.mileage}
              onChange={(event) => handleInputChange(event, 'mileage')}
              style={{ height: '50px' }}
            >
              <option>Mileage</option>
              <option value="1">Out</option>
              <option value="2">In</option>
              <option value="3">At Scene</option>
              <option value="4">At Destination</option>
              <option value="5">Total</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow className="">
          <CCol xs={6} className="mt-3">
            <CFormFloating className="">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="patientContact"
                value={state.patientContact}
                onChange={(event) => handleInputChange(event, 'patientContact')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Patient Contact</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mt-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="destinationDeterminant"
                value={state.destinationDeterminant}
                onChange={(event) => handleInputChange(event, 'destinationDeterminant')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Destination Determinant</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer>
        <CRow className="mt-3">
          <CCol xs={4}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="date"
                style={{ height: '50px' }}
                name="startDate"
                value={state.startDate}
                onChange={(event) => handleInputChange(event, 'startDate')}
              ></CFormInput>
              <CFormLabel htmlFor="floatingInput">Document Start Date</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={4}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="date"
                style={{ height: '50px' }}
                name="startDate"
                value={state.endDate}
                onChange={(event) => handleInputChange(event, 'endDate')}
              ></CFormInput>
              <CFormLabel htmlFor="floatingInput">Document End Date</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={4}></CCol>
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
              <CFormInput
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
      </CRow>
    </div>
  )
}

export default BreadCrumbs
