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
  const [time, setTime] = useState(null)
  const [time2, setTime2] = useState(null)
  const [time3, setTime3] = useState(null)
  const [time4, setTime4] = useState(null)
  const [time5, setTime5] = useState(null)
  const [visible, setVisible] = useState(false)

  const [state, setState] = useState({
    userId: '',
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
    crewType: '',
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
    // AuthAxios.post('VehicleCallDetails', state)
    //   .then((res) => {
    //     console.log(res.data)
    //     setTimeout(() => {
    //       location.href = '/'
    //     }, 2000)
    //   })
    //   .catch((err) => console.error(err.message))
    console.log(state)
  }
  return (
    <div className="vehicle">
      <CContainer className="m-0 mb-4">
        <CRow className="mb-3">
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time Notified
            </CFormLabel>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  timeNotified: e.format('LT'),
                }))
                setTime(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time En Route
            </CFormLabel>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  timeEnroute: e.format('LT'),
                }))
                setTime2(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
          <CCol xs={4}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time At Scene
            </CFormLabel>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  timeAtScene: e.format('LT'),
                }))
                setTime3(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time Out Of Scene
            </CFormLabel>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  timeOutScene: e.format('LT'),
                }))
                setTime4(e.format('LT'))
              }}
              className="times"
            />
          </CCol>
          <CCol xs={6}>
            <CFormLabel htmlFor="floatingInput" className="h3">
              Time At Destination
            </CFormLabel>
            <TimePicker
              placeholder="Select Time"
              use12Hours
              showSecond={false}
              focusOnOpen={true}
              format="hh:mm A"
              onChange={(e) => {
                setState((prevProps) => ({
                  ...prevProps,
                  timeAtDestination: e.format('LT'),
                }))
                setTime5(e.format('LT'))
              }}
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
                placeholder="Crew Patien"
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
                placeholder="Available"
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
                placeholder="BackArea"
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
              value={state.responseToScene}
              onChange={(event) => handleInputChange(event, 'responseToScene')}
              style={{ height: '50px' }}
            >
              <option>Response To Scene</option>
              <option value="Type">Type</option>
              <option value="Change in Response">Change in Response</option>
            </CFormSelect>
          </CCol>

          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              value={state.responseFromScene}
              onChange={(event) => handleInputChange(event, 'responseFromScene')}
              style={{ height: '50px' }}
            >
              <option>Response From Scene</option>
              <option value="Type">Type</option>
              <option value="Change in Response">Change in Response</option>
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
              value={state.crewType}
              onChange={(event) => handleInputChange(event, 'crewType')}
              style={{ height: '50px' }}
            >
              <option>Crew Type</option>
              <option value="Driver">Driver</option>
              <option value="Attendant">Attendant</option>
              <option value="Assisting Personal">Assisting Personal</option>
            </CFormSelect>
          </CCol>

          <CCol xs={6}>
            <CFormSelect
              size="sm"
              className="mt-3"
              aria-label="Large select example"
              value={state.mileage}
              onChange={(event) => handleInputChange(event, 'mileage')}
              style={{ height: '50px' }}
            >
              <option>Select Mileage</option>
              <option value="Out">Out</option>
              <option value="In">In</option>
              <option value="At Scene">At Scene</option>
              <option value="At Destination">At Destination</option>
              <option value="Total">Total</option>
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
                placeholder="Patient Contact"
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
                placeholder="Destination Determinant"
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
                value={state.endDate}
                onChange={(event) => handleInputChange(event, 'endDate')}
              ></CFormInput>
              <CFormLabel htmlFor="floatingInput">Document End Date</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={4}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="date"
                style={{ height: '50px' }}
                value={state.dateModified}
                onChange={(event) => handleInputChange(event, 'dateModified')}
              ></CFormInput>
              <CFormLabel htmlFor="floatingInput">Date Modified</CFormLabel>
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
