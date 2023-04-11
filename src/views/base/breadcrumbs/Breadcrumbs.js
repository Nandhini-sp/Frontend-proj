import React from 'react'
import { useState } from 'react'
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
 

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import{
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
	CFormSelect
}from '@coreui/react'


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
	
	const [time, setTime] = useState('');	
	const [visible, setVisible] = useState(false)

const [state, setState] = useState({
		
  timeNotified: "",
  timeEnroute: "",
  timeAtScene: "",
  crewPatient: "",
  timeOutScene: "",
  timeAtDestination: "",
  available: "",
  backArea: "",
	responseToScene: "",
  responseFromScene: "",
  
    driver: "",
    attendent: "",
    assisting: "",
  mileage:"",
 
  patientContact: "",
  destinationDeterminant: "",
  startDate: "",
  endDate: "",
  dateModified: ""
	});
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
		<CContainer className='m-4'>
			<CRow>
				<CCol xs={4}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Time Notified</CFormLabel>
				<p >Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name="timeNotified"
				value={state.timeNotified}
				onClick={handleInputChange}
      		/>
			</CCol>
			<CCol xs={4}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Time En Route</CFormLabel>
				<p className='' sty>Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name="timeEnroute"
				value={state.timeEnroute}
				onClick={handleInputChange}
      		/>
			</CCol>
			<CCol xs={4}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Time At Scene</CFormLabel>
				<p className='' sty>Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name="timeAtDestination"
				value={state.timeAtDestination}
				onClick={handleInputChange}
      		/>
			</CCol>
			</CRow>
			<CRow>
				<CCol xs={4}>
				<CFormLabel htmlFor="floatingInput"className='h3'>Time Out Of Scene</CFormLabel>
				<p className='' sty>Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name="timeOutScene"
				value={state.timeOutScene}
				onClick={handleInputChange}

      		/>
			</CCol>
			<CCol xs={4}>
				<CFormLabel htmlFor="floatingInput"className='h3'>Time out of Scene</CFormLabel>
				<p className='' sty>Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name="timeOutScene"
				value={state.timeOutScene}
				onClick={handleInputChange}
			
      		/>
			</CCol>
			<CCol xs={4}>
				<CFormLabel htmlFor="floatingInput"className='h3'>Time At Destination</CFormLabel>
				<p className='' sty>Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
				name="timeAtDestination"
				value={state.timeAtDestination}
				onClick={handleInputChange}
      		/>
			</CCol>
			</CRow>
		</CContainer>

		<CContainer>

			<CRow className=''>
			<CCol xs={4} className=''>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="crewPatient"
              value={state.crewPatient}
              onChange={handleInputChange}
			  style={{height:"50px"}}
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
              onChange={handleInputChange}
			  style={{height:"50px"}}

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
              onChange={handleInputChange}
			  style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">BackArea</CFormLabel>
          </CFormFloating>
        </CCol>

			</CRow>

		</CContainer>

		<CContainer>
			<CRow>
			<CCol xs={6}>

				<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

				name ="Types_ins"
				value={state.Types_ins}
				onChange={handleInputChange}
				style={{height:"50px"}}
				>

				<option >Response To Scene</option>
				<option value="1">Type</option>
  				<option value="2">Change in Response</option>

  				</CFormSelect>
  			</CCol>

				

				<CCol xs={6}>

				<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

					name ="responseFromScene"
					value={state.responseFromScene}
					onChange={handleInputChange}
					style={{height:"50px"}}
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

				<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

				name ="crewTypes"
				value={state.crewTypes}
				onChange={handleInputChange}
				style={{height:"50px"}}>

				<option>Crew Type</option>
				<option value="1">Driver</option>
  				<option value="2">Attendant</option>
  				<option value="3">Assisting Personal</option>


  				</CFormSelect>
  			</CCol>

				

				<CCol xs={6}>

				<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

					name ="mileage"
					value={state.mileage}
					onChange={handleInputChange}
					style={{height:"50px"}}

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
			<CRow className=''>
			<CCol xs={6} className='mt-3'>
          <CFormFloating className="">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="patientContact"
              value={state.patientContact}
              onChange={handleInputChange}
				style={{height:"50px"}}

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
              onChange={handleInputChange}
				style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Destination Determinant</CFormLabel>
          </CFormFloating>
        </CCol>
			</CRow>
			</CContainer>

			<CContainer>
			<CRow className='mt-3'>
			<CCol xs={4}>
          <CFormFloating className="">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="startDate"
              value={state.startDate}
              onChange={handleInputChange}
				style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Document Start Date</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={4}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="endDate"
              value={state.endDate}
              onChange={handleInputChange}
			  style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Document End Date</CFormLabel>
          </CFormFloating>
        </CCol>
		<CCol xs={4}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="dateModified"
              value={state.dateModified}
              onChange={handleInputChange}
			  style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Date Modified</CFormLabel>
          </CFormFloating>
        </CCol>
			</CRow>
			</CContainer>
		
		
			
			<CRow item xs={12}>


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

        <div class="md-form mb-4">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" id="form2" class="form-control validate"/>
          <label data-error="wrong" data-success="right" for="form2">Ambulance EMail-Id</label>
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

export default BreadCrumbs
