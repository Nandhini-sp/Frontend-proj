import React from 'react'
import { useState } from 'react'

import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CRow,
  CCol,
  CFormLabel,
  CFormFloating,
  CFormInput,
} from '@coreui/react'

import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'

const Select = () => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState('')

  const [state, setState] = useState({
    assessmentTime: '',
    consciousnessLevel: '',
    pulseRate: '',
    siteOfPulseCheck: '',
    temperature: '',
    siteOfTemperatureCheck: '',
    skinColor: '',
    moisture: '',
    bloodPressure: '',
    systolic: '',
    diastolic: '',
    respiration: '',
    bloodGlucose: '',
    oxygenSaturation: '',
    preOxygen: '',
    postOxygen: '',
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
      <CRow>
        <CCol xs={12} className="h5" style={{ position: 'relative', left: '400px' }}>
          <CFormLabel htmlFor="floatingInput" className="h4">
            Time Of Assessment
          </CFormLabel>
          <p>Selected Time: {time || '-'}</p>
          <TimePicker
            placeholder="Select Time"
            use12Hours
            showSecond={false}
            focusOnOpen={true}
            format="hh:mm A"
            style={{ height: '50px' }}
            onChange={(e) => setTime(e.format('LT'))}
            name="assessmentTime"
            value={state.assessmentTime}
            onClick={(event) => handleInputChange(event, 'assessmentTime')}
          />
        </CCol>
      </CRow>

      <CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="consciousnessLevel"
                value={state.consciousnessLevel}
                onChange={(event) => handleInputChange(event, 'consciousnessLevel')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Level Of Consciousness</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="pulseRate"
                value={state.pulseRate}
                onChange={(event) => handleInputChange(event, 'pulseRate')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Pulse Rate</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="siteOfPulseCheck"
                value={state.siteOfPulseCheck}
                onChange={(event) => handleInputChange(event, 'siteOfPulseCheck')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Site Of Pulse Check</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="temperature"
                value={state.temperature}
                onChange={(event) => handleInputChange(event, 'temperature')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Temperature</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="skinColor"
                value={state.skinColor}
                onChange={(event) => handleInputChange(event, 'skinColor')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">skinColor</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="siteOfPulseCheck"
                value={state.siteOfPulseCheck}
                onChange={(event) => handleInputChange(event, 'siteOfPulseCheck')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Site Of Temperature Check</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="skinColor"
                value={state.skinColor}
                onChange={(event) => handleInputChange(event, 'skinColor')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">SkinColor</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="moisture"
                value={state.moisture}
                onChange={(event) => handleInputChange(event, 'moisture')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Moisture</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="bloodPressure"
                value={state.bloodPressure}
                onChange={(event) => handleInputChange(event, 'bloodPressure')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Blood Pressure</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="systolic"
                value={state.systolic}
                onChange={(event) => handleInputChange(event, 'systolic')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Systolic</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="diastolic"
                value={state.diastolic}
                style={{ height: '50px' }}
                onChange={(event) => handleInputChange(event, 'diatolic')}
              />
              <CFormLabel htmlFor="floatingInput">Diastolic</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="respiration"
                value={state.respiration}
                onChange={(event) => handleInputChange(event, 'respiration')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Respiration</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="bloodGlucose"
                value={state.bloodGlucose}
                onChange={(event) => handleInputChange(event, 'bloodGlucose')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Blood Glucose</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="oxygenSaturation"
                value={state.oxygenSaturation}
                onChange={(event) => handleInputChange(event, 'oxygenSaturation')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Oxygen Saturtion</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="preOxygen"
                value={state.preOxygen}
                onChange={(event) => handleInputChange(event, 'preOxygen')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Pre Oxygen</CFormLabel>
            </CFormFloating>
          </CCol>
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="Surname"
                name="postOxygen"
                value={state.postOxygen}
                onChange={(event) => handleInputChange(event, 'postOxygen')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Post Oxygen</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
      </CRow>

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
    </div>
  )
}

export default Select
