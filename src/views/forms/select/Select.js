import React from 'react'
import { useState } from 'react'

import{
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
}from '@coreui/react'

import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
 

const Select = () => {

	const [visible, setVisible] = useState(false)
	const [time, setTime] = useState('');	

	const [state, setState] = useState({
    assessmentTime: "",
    consciousnessLevel: "",
    pulseRate: "",
    siteOfPulseCheck: "",
    temperature: "",
    siteOfTemperatureCheck: "",
    skinColor: "",
    moisture: "",
    bloodPressure: "",
      systolic: "",
    diastolic: "",
    respiration: "",
      bloodGlucose: "",
    oxygenSaturation: "",
    preOxygen: "",
    postOxygen: ""
  })

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setState((prevProps) => ({
		  ...prevProps,
		  [name]: value
		}));
	  };
	
	  const submitHandler = (event) => {
		event.preventDefault();
		console.log(state);
	  };

	

	return (

		<form onSubmit={submitHandler} method="post" encType="multipart/form-data" className="form-horizontal">

	<CRow>
       	 <CCol xs={12} className='h5' style={{position:'relative', left:'400px'}}>

				<CFormLabel htmlFor="floatingInput" className='h4' >Time Of Assessment</CFormLabel>
				<p >Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name='assessmentTime'
				value={state.assessmentTime}
				onClick={handleInputChange}

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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Post Oxygen</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>


		</CRow>

		
		<CRow  xs={12}>


		<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-success" type="submit"
  onClick={() => setVisible(!visible)}
>Submit</button>
<CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader onClose={() => setVisible(false)}>
        <CModalTitle>DOTTY CARE</CModalTitle>
      </CModalHeader>
  
      <div class="modal-body mx-3">
	  <div class="md-form mb-4">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="form2" class="form-control validate"/>
          <label data-error="wrong" data-success="right" for="form2">Hospital EMail-Id</label>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-success" onSubmit={submitHandler}>Send <i class="fas fa-paper-plane-o ml-1"></i></button>
      </div>
		
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
</div>

		
			</CRow>
		</form>
	)
}

export default Select
