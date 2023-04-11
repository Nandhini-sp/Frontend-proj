import React from 'react'
import { useState } from 'react'
import {
	// Checkbox,
	// FormControl,
	// FormControlLabel,
	// FormGroup,
	Grid,
	// InputLabel,
	// MenuItem,
	Paper,
	// Select,
	// Stack,
	// TextField,
	// ToggleButton,
	// ToggleButtonGroup,
	TextField,
	Typography,

} from '@mui/material'

import{
	// CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,
	CContainer,
	CRow,
	CCol,
	CFormFloating,
	CFormInput,
	CFormLabel,


}from '@coreui/react'

import { CButton } from '@coreui/react'


const ComplainBased = () => {


	const [visible, setVisible] = useState(false)

	const [state, setState] = useState({
		respiration: "",
		seizure:"",
		toxicExposure:"",
		cardiacArrest: "",
		chestPain: "",
		neonatal:"",
		obstetric: "",
		trauma	:""	
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

<CContainer>
				<CRow>
					<CCol xs={6}>
					
         	 <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="respiration"
              value={state.respiration}
              onChange={handleInputChange}
			  style={{height:"50px"}}

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
              		name="seizure"
              		value={state.seizure}
              		onChange={handleInputChange}
					  style={{height:"50px"}}

            		/>
            <CFormLabel htmlFor="floatingInput">Seizure</CFormLabel>
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
              name="toxicExposure"
              value={state.toxicExposure}
              onChange={handleInputChange}
			  style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Toxic Exposure</CFormLabel>
          </CFormFloating>
        </CCol>
					
					<CCol xs={6}>

					
          		<CFormFloating className="mb-3">
            		<CFormInput
              		type="text"
             		 id="floatingInput"
             		 placeholder="FirstName"
              		name="cardiacArrest"
              		value={state.cardiacArrest}
              		onChange={handleInputChange}
					  style={{height:"50px"}}

            		/>
            <CFormLabel htmlFor="floatingInput">CardiacArrest</CFormLabel>
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
              name="chestPain"
              value={state.chestPain}
              onChange={handleInputChange}
			  style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Chest Pain</CFormLabel>
          </CFormFloating>
        </CCol>
					
					<CCol xs={6}>

					
          		<CFormFloating className="mb-3">
            		<CFormInput
              		type="text"
             		 id="floatingInput"
             		 placeholder="FirstName"
              		name="neonatal"
              		value={state.neonatal}
              		onChange={handleInputChange}
					  style={{height:"50px"}}

            		/>
            <CFormLabel htmlFor="floatingInput">Neonatal</CFormLabel>
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
              name="obstetricc"
              value={state.obstetric}
              onChange={handleInputChange}
			  style={{height:"50px"}}

            />
            <CFormLabel htmlFor="floatingInput">Obstetric</CFormLabel>
          </CFormFloating>
        </CCol>
					
					<CCol xs={6}>

					
          		<CFormFloating className="mb-3">
            		<CFormInput
              		type="text"
             		 id="floatingInput"
             		 placeholder="FirstName"
              		name="trauma"
              		value={state.trauma}
              		onChange={handleInputChange}
					  style={{height:"50px"}}

            		/>
            <CFormLabel htmlFor="floatingInput">Trauma</CFormLabel>
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

export default ComplainBased
