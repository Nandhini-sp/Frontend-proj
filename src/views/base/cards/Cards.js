import React from 'react'
import { useState } from 'react'


import{
	CModal,
	CModalHeader,
	CModalTitle,
	CModalFooter,
	CContainer,
	CRow,
	CCol,
	CFormFloating,
	CFormInput,
	CFormLabel,
	CFormSelect,

}from '@coreui/react'


import { CButton } from '@coreui/react'

import { Input } from 'reactstrap'



const Cards = () => {
	

	const [visible, setVisible] = useState(false)

	

	const [state, setState] = useState({
		serviceCode: "",
		serviceType: "",
		dateOfIncident: "",
		timeOfIncident: "",
		incidentLocation_street: "",
		incidentLocation_city:"",
		incidentLocation_state:"",
		incidentLocation_postalCode:"",
		destinationDeterminant: "",
		graphicLocator: "",
		sceneLocationType: "",
		destinationFacility: "",
		sceneFacility: "",
		destinationLocationAddress: "",
		destinationLocation_street: "",
		destinationLocation_city: "",
		destinationLocation_state: "",
		destinationLocation_postalCode: "",
		servicePayment_responsibility: "",
		servicePayment_number: "",
		EMS: "",
		patientDisposition: ""
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
              name="serviceCode"
              value={state.serviceCode}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Service Code</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="serviceType"
              value={state.serviceType}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Service Type</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
		</CContainer>
		
		<CContainer>
			<CRow className='mb-3'>
				<CCol xs={6}>
					<Input type="Date"
          name="dateOfIncident"
          value={state.dateOfIncident}
          onChange={handleInputChange}></Input>
				</CCol>
				<CCol xs={6}>
					<Input type="Time"
          name="timeOfIncident"
          value={state.timeOfIncident}
          onChange={handleInputChange}></Input>
				</CCol>
			</CRow>
		</CContainer>

		<CContainer className=''>
			<CRow>
				<p>Incident Location</p>
				<CCol xs={6}>
				<CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="incidentLocation_street"
              value={state.incidentLocation_street}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Street</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="incidentLocation_city"
              value={state.incidentLocation_city}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">city</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
				</CCol>
				<CCol xs={6}>
				<CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="incidentLocation_state"
              value={state.incidentLocation_state}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">State</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="incidentLocation_postalCode"
              value={state.incidentLocation_postalCode}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
				</CCol>
			</CRow>
		</CContainer>

		<CContainer>
			<CRow>
				<CCol xs={6}>
				<CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="destinationDeterminant"
        value={state.destinationDeterminant}
        onChange={handleInputChange}>

        <option>Destination Determinantion</option>
        <option value="1">1</option>
          <option value="2"></option>
   
          </CFormSelect>
				</CCol>
				<CCol xs={6}>
				<CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="destinationDeterminant"
        value={state.destinationDeterminant}
        onChange={handleInputChange}>

        <option>Destination Location Type</option>
        <option value="1">1</option>
          <option value="2">2</option>
   
          </CFormSelect>

				</CCol>
			</CRow>
		</CContainer>

		<CContainer>
			<CRow>
			<CCol xs={6}>
          <CFormFloating className="mt-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="graphicLocator"
              value={state.graphicLocator}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Geographic Locator</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mt-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="sceneFacility"
              value={state.sceneFacility}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Scene Facility</CFormLabel>
          </CFormFloating>
        </CCol>
			</CRow>
		</CContainer>
		<CContainer className=''>
			<CRow className='mt-3'>
				<p>Destination Location</p>
				<CCol xs={6}>
				<CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="destinationLocation_street"
              value={state.destinationLocation_street}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Street</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="destinationLocation_city"
              value={state.destinationLocation_city}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">city</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
				</CCol>
				<CCol xs={6}>
				<CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="destinationLocation_state"
              value={state.destinationLocation_state}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">State</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="destinationLocation_postalCode"
              value={state.destinationLocation_postalCode}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Postal Code</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
				</CCol>
			</CRow>
		</CContainer>
		<CContainer>
			<CRow>
				<CCol xs={6}>
				<CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="patientDisposition"
        value={state.patientDisposition}
        onChange={handleInputChange}>

        <option>Patient Disposition</option>
        <option value="1">1</option>
          <option value="2"></option>
   
          </CFormSelect>
				</CCol>
				<CCol xs={6}>
				<CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="EMS"
        value={state.EMS}
        onChange={handleInputChange}>

        <option>Factors Affecting EMS</option>
        <option value="1">1</option>
          <option value="2">2</option>
   
          </CFormSelect>

				</CCol>
			</CRow>
		</CContainer>
		<CContainer className=''>
			<CRow>
				<p>Service Payment</p>
				<CCol xs={6}>
				<CRow>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="servicePayment_responsibility"
              value={state.servicePayment_responsibility}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Response</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={6}>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="servicePayment_number"
              value={state.servicePayment_number}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Number</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
	</CCol>
	</CRow>
		</CContainer>

		
			

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

			

		</form>
		
		
	)
}

export default Cards
