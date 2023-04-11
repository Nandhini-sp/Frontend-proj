import React from 'react'
import { useState } from 'react';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import{
	// CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,
  CFormLabel,
  CFormFloating,
  CFormInput,
  CFormSelect,
  CFormCheck,

}from '@coreui/react'


const formControl = () => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState('');	

  const [state, setState] = useState({
    procedureStartTime:"",
procedureType:"",
procedureEndTime:"",
deviceMethod:"",
technicianID:"",
deviceSize:"",  
outcome:"", 
successfull:"",
treatment:"",
totalTime:"",
treatmentType:"",
administrativeRoute:""
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


        <CContainer className='m-4'>
          <CRow>
          <CCol xs={6}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Procedure Start Time</CFormLabel>
				<p >Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
            name="procedureStartTime"
            value={state.procedureStartTime}
            onClick={handleInputChange}
      		/>
			</CCol>
      <CCol xs={6}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Treatment End Time</CFormLabel>
				<p >Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
            name="procedureEndTime"
            value={state.procedureEndTime}
            onClick={handleInputChange}
            
      		/>
			</CCol>

          </CRow>
      
          <CRow>
        <CCol xs={4} className='mt-4'>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="procedureType"
              value={state.procedureType}
              onChange={handleInputChange}

            />
            <CFormLabel htmlFor="floatingInput">Types Of Procedure</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={4} className='mt-4'>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="state"
              value={state.deviceMethod}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Device Method</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={4} className='mt-4'>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="technicianID"
              value={state.technicianID}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">TechnicianID</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
           <CRow>
           <CCol xs={4} className="">
          <CFormFloating className="">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="deviceSize"
              value={state.deviceSize}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Device Size</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={4}>

			<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

				name ="outcome"
				value={state.outcome}
				onChange={handleInputChange}>

				<option>Outcome</option>
				<option value="1">Stable</option>
  				<option value="2">Improved</option>
  				<option value="3">Deteriorated</option>
			</CFormSelect>
		</CCol>

    <CCol xs={4}>
          
            <CFormLabel htmlFor="floatingInput"
                        name="sucessful"
                        value={state.successfull}
                        onChange={handleInputChange}
            >Successful</CFormLabel>
            
            <div>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="Yes"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="No"/>
            </div>  
        </CCol>

           </CRow>

          <CRow>

          <CCol xs={6} className="mt-3">
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="treatment"
              value={state.treatment}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Treatment</CFormLabel>
            </CFormFloating>
            </CCol>

            <CCol xs={6} className=''>

			      <CFormSelect size="lg" className="mt-3" aria-label="Large select example"

				      name ="treatmentType"
				      value={state.treatmentType}
				      onChange={handleInputChange}>

				        <option>Outcome</option>
				        <option value="1">Medication</option>
  				      <option value="2">IVF</option>
  				      <option value="3">Oxygen</option>
  				      <option value="4">No Treatment</option>
			    </CFormSelect>
        </CCol>

        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="todalTime"
              value={state.totalTime}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Total Time</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="adminstrativeRoute"
              value={state.administrativeRoute}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Administrative Route</CFormLabel>
          </CFormFloating>
        </CCol>
	
    
          </CRow>

          
           
     </CContainer>

    
   
    <CRow xs={12}>
    

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
    
  );
}

export default formControl
