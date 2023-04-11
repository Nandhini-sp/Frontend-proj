import React from 'react'
import { useState } from 'react'

import { CButton } from '@coreui/react'

import{
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
	

}from '@coreui/react'




const Buttons = () => {
	
	const [visible, setVisible] = useState(false)


	const [state, setState] = useState({
		dateOfInjury:"",
		timeOfInjury:"",	
		coResponders:"",	
		treatmentRendered:"",	
		patientCondition:""	,
		patientDisplacement:"",	
		suspectedIntoxication:"",	
		chiefComplaint:""
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
			<CRow className='mb-3'>
				<CCol xs={6}>
					<InputLabel >Date Of Injury</InputLabel>
					<CFormInput type="Date"

                     name ="dateOfInjury"
                     value={state.dateOfInjury}
                     onChange={handleInputChange}>

					 </CFormInput>
							
					     
				</CCol>
				<CCol xs={6}>
					<InputLabel>Time Of Injurt</InputLabel>
					<CFormInput type="Time"
					name ="timeOfInjury"
                     value={state.timeOfInjury}
                     onChange={handleInputChange}>

					</CFormInput>
				</CCol>
			</CRow>
			<CRow>
			<CCol xs={6}>

			<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

				name ="coResponders"
				value={state.coResponders}
				onChange={handleInputChange}>

				<option>Co-Respondars</option>
				<option value="1">Law Enforcement</option>
  				<option value="2">Fire</option>
  				<option value="3">Other Fire Respondars</option>
  				<option value="4">None</option>
			</CFormSelect>
		</CCol>
				<CCol xs={6}>

					<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

					name ="treatmentsProvided"
					value={state.treatmentsProvided}
					onChange={handleInputChange}>
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
			<CRow className='mt-3'>
			<CCol xs={6}>

			<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

				name ="patientCondition"
				value={state.patientCondition}
				onChange={handleInputChange}>

			<option>Patient Condition at Destination</option>
			<option value="1">Stable</option>
	  		<option value="2">Improved</option>
	  		<option value="3">Deteriorated</option>
	  		<option value="4">None</option>
				</CFormSelect>
				</CCol>
				<CCol xs={6} className=''>
					
				<CFormLabel htmlFor="floatingInput"
                        name="patientDisplacement"
                        value={state.patientDisplacement}
                        onChange={handleInputChange}
            >Patient Displacement</CFormLabel>
            
            <div>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="Yes"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="No"/>
                <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="Other"/>
            </div>  
			
				</CCol>
			</CRow>
		</CContainer>
		<CContainer>
			<CRow>
			<CCol xs={12}>

		<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

			name ="suspectedIntoxication"
			value={state.suspectedIntoxication}
			onChange={handleInputChange}>
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

		<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

			name ="chiefComplaint"
			value={state.chiefComplaint}
			onChange={handleInputChange}>
			<option>Chief Complaint</option>
				<option value="1">Chest Pain</option>
				<option value="2">Yes As Reported bystander </option>
				<option value="3">Yes As Reported byProvider</option>
				<option value="4">Not suspected</option>
		</CFormSelect>
		</CCol>
			</CRow>
		</CContainer>



		<CRow xs={12} className='mt-3'>
			
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

export default Buttons
