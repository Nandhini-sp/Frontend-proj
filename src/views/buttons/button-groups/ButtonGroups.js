import React from 'react'
import { useState } from 'react'

import { CButton, CContainer } from '@coreui/react'

import{
	// CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,
	CRow,
	CCol,
	CFormFloating,
	CFormInput,
	CFormLabel,


}from '@coreui/react'



const ButtonGroups = () => {

	const [visible, setVisible] = useState(false)


	const [state, setState] = useState({
		neroResponse:"",
		bodySystem:"",
		glasGlow:"",
		generalAssessment:"",
		airway:"",
		symptoms:"",
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

		<form onSubmit={submitHandler} method="post" encType="multipart/form-data" className="form-horizontal"
		>
			
			
			<CContainer>
				<CRow>
					<CCol xs={6}>
					
         	 <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="neroResponse"
              value={state.neroResponse}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Nero Response</CFormLabel>
          </CFormFloating>
        </CCol>
					
					<CCol xs={6}>

					
          		<CFormFloating className="mb-3">
            		<CFormInput
              		type="text"
             		 id="floatingInput"
             		 placeholder="FirstName"
              		name="bodySystem"
              		value={state.bodySystem}
              		onChange={handleInputChange}
            		/>
            <CFormLabel htmlFor="floatingInput">Body System</CFormLabel>
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
              name="glasGlow"
              value={state.glasGlow}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Glasgow and pupil</CFormLabel>
          </CFormFloating>
        </CCol>
					
					<CCol xs={6}>

					
          		<CFormFloating className="mb-3">
            		<CFormInput
              		type="text"
             		 id="floatingInput"
             		 placeholder="FirstName"
              		name="generalAssessment"
              		value={state.generalAssessment}
              		onChange={handleInputChange}
            		/>
            <CFormLabel htmlFor="floatingInput">General Assessment</CFormLabel>
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
              name="airway"
              value={state.airway}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Airway</CFormLabel>
          </CFormFloating>
        </CCol>
					
					<CCol xs={6}>

					
          		<CFormFloating className="mb-3">
            		<CFormInput
              		type="text"
             		 id="floatingInput"
             		 placeholder="FirstName"
              		name="symptoms"
              		value={state.symptoms}
              		onChange={handleInputChange}
            		/>
            <CFormLabel htmlFor="floatingInput">Symbtoms</CFormLabel>
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
	)
}

export default ButtonGroups
