import React from 'react'
import { useState } from 'react'
import './style.css'
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
import AuthAxios from 'src/Interceptors/AuthAxios'
import { ToastContainer, toast } from 'react-toastify'

const Select = () => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState('')

  const success = (e) => toast.success(e)
  const failure = (e) => toast.error(e)

  const [state, setState] = useState({
    assessmentTime: '',
    consciousnessLevel: '',
    pulseRate: '',
    siteOfPulseCheck: '',
    temperature: '',
    siteOfTemperatureCheck: '',
    skinColor: '',
    moisture: '',
    systolic: '',
    diastolic: '',
    respiration: '',
    bloodGlucose: '',
    preOxygen: '',
    postOxygen: '',
    diatolic: '',
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

  const submitHandler = () => {
    const item = {
      userId: users.result._id,
      assessmentTime: state.assessmentTime,
      consciousnessLevel: state.consciousnessLevel,
      pulseRate: state.pulseRate,
      siteOfPulseCheck: state.siteOfPulseCheck,
      temperature: state.temperature,
      siteOfTemperatureCheck: state.siteOfTemperatureCheck,
      skinColor: state.skinColor,
      moisture: state.moisture,
      bloodPressure: {
        systolic: state.systolic,
        diastolic: state.diastolic,
      },
      respiration: state.respiration,
      bloodGlucose: state.bloodGlucose,
      oxygenSaturation: {
        preOxygen: state.preOxygen,
        postOxygen: state.postOxygen,
      },
      email: state.email,
    }
    AuthAxios.post('VitalSignTreatment', item)
      .then((res) => {
        console.log(res.data)
        success(res.data.message)
        setVisible(false)
        setTimeout(() => {
          setState((prevProps) => ({
            ...prevProps,
            assessmentTime: '',
            consciousnessLevel: '',
            pulseRate: '',
            siteOfPulseCheck: '',
            temperature: '',
            siteOfTemperatureCheck: '',
            skinColor: '',
            moisture: '',
            systolic: '',
            diastolic: '',
            respiration: '',
            bloodGlucose: '',
            preOxygen: '',
            postOxygen: '',
            diatolic: '',
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
      <CRow className="mb-3 vehicle">
        <CCol xs={4}>
          <CFormLabel htmlFor="floatingInput" className="h3">
            Time Of Assessment
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
                assessmentTime: e.format('LT'),
              }))
              setTime(e.format('LT'))
            }}
            className="times"
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
                value={state.siteOfTemperatureCheck}
                onChange={(event) => handleInputChange(event, 'siteOfTemperatureCheck')}
                style={{ height: '50px' }}
              />
              <CFormLabel htmlFor="floatingInput">Site Of Temperature Check</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs={12}>
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
          <CFormLabel htmlFor="floatingInput" className="h5">
            Blood Pressure
          </CFormLabel>
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
          <CCol xs={6}>
            <CFormFloating className="mb-3">
              <CFormInput
                type="text"
                id="floatingInput"
                placeholder="FirstName"
                name="diastolic"
                value={state.diastolic}
                style={{ height: '50px' }}
                onChange={(event) => handleInputChange(event, 'diastolic')}
              />
              <CFormLabel htmlFor="floatingInput">Diastolic</CFormLabel>
            </CFormFloating>
          </CCol>
        </CRow>
        <CRow>
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
        </CRow>
        <CRow>
          <CFormLabel htmlFor="floatingInput" className="h5">
            Oxygen Saturation
          </CFormLabel>
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
      <ToastContainer />
    </div>
  )
}

export default Select
