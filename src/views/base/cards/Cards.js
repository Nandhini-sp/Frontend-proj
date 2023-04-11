import React from 'react'
import { useState } from 'react'
import {
	Autocomplete,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
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
	CFormSelect,

}from '@coreui/react'


import { CButton } from '@coreui/react'

// import { useSelector, useDispatch } from 'react-redux'
// import { setIncidentDetails, setIncidentLocation } from '../../features/incidentDetails'
// import ListboxComponent from '../../components/ListboxComponent'
// import DispatchCodeMask from '../../components/DispatchCodeMask'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Input } from 'reactstrap'

const serviceCodes = [
	'1A',
	'1B',
	'1C',
	'1D',
	'1E',
	'1F',
	'1G',
	'1H',
	'1I',
	'1J',
	'1K',
	'1L',
	'1M',
	'1N',
	'1O',
	'1P',
	'1Q',
	'1R',
	'1S',
	'1T',
	'1U',
	'1V',
	'1W',
	'1X',
	'1Y',
	'1Z',
	'2A',
	'2B',
	'2C',
	'2D',
	'2E',
	'2F',
	'2G',
	'2H',
	'2I',
	'2J',
	'2K',
	'2L',
	'2M',
	'2N',
	'2O',
	'2P',
	'2Q',
	'2R',
	'2S',
	'2T',
	'2U',
	'2V',
	'2W',
	'2X',
	'2Y',
	'2Z',
	'3A',
	'3B',
	'3C',
	'3D',
	'3E',
	'3F',
	'3G',
	'3H',
	'3I',
	'3J',
	'3K',
	'3L',
	'3M',
	'3N',
	'3O',
	'3P',
	'3Q',
	'3R',
	'3S',
	'3T',
	'3U',
	'3V',
	'3W',
	'3X',
	'3Y',
	'3Z',
	'4A',
	'4B',
	'4C',
	'4D',
	'4E',
	'4F',
	'4G',
	'4H',
	'4I',
	'4J',
	'4K',
	'4L',
	'4M',
	'4N',
	'4O',
	'4P',
	'4Q',
	'4R',
	'4S',
	'4T',
	'4U',
	'4V',
	'4W',
	'4X',
	'4Y',
	'4Z',
	'5A',
	'5B',
	'5C',
	'5D',
	'5E',
	'5F',
	'5G',
	'5H',
	'5I',
	'5J',
	'5K',
	'5L',
	'5M',
	'5N',
	'5O',
	'5P',
	'5Q',
	'5R',
	'5S',
	'5T',
	'5U',
	'5V',
	'5W',
	'5X',
	'5Y',
	'5Z',
	'6A',
	'6B',
	'6C',
	'6D',
	'6E',
	'6F',
	'6G',
	'6H',
	'6I',
	'6J',
	'6K',
	'6L',
	'6M',
	'6N',
	'6O',
	'6P',
	'6Q',
	'6R',
	'6S',
	'6T',
	'6U',
	'6V',
	'6W',
	'6X',
	'6Y',
	'6Z',
	'7A',
	'7B',
	'7C',
	'7D',
	'7E',
	'7F',
	'7G',
	'7H',
	'7I',
	'7J',
	'7K',
	'7L',
	'7M',
	'7N',
	'7O',
	'7P',
	'7Q',
	'7R',
	'7S',
	'7T',
	'7U',
	'7V',
	'7W',
	'7X',
	'7Y',
	'7Z',
	'8A',
	'8B',
	'8C',
	'8D',
	'8E',
	'8F',
	'8G',
	'8H',
	'8I',
	'8J',
	'8K',
	'8L',
	'8M',
	'8N',
	'8O',
	'8P',
	'8Q',
	'8R',
	'8S',
	'8T',
	'8U',
	'8V',
	'8W',
	'8X',
	'8Y',
	'8Z',
	'9A',
	'9B',
	'9C',
	'9D',
	'9E',
	'9F',
	'9G',
	'9H',
	'9I',
	'9J',
	'9K',
	'9L',
	'9M',
	'9N',
	'9O',
	'9P',
	'9Q',
	'9R',
	'9S',
	'9T',
	'9U',
	'9V',
	'9W',
	'9X',
	'9Y',
	'9Z',
]
const serviceTypes = [
	'911',
	'IHT (Scheduled)',
	'IHT (Unscheduled)',
	'Intercept',
	'Mutual Aid',
	'Stand By',
]
const destinationDeterminations = [
	'Protocol',
	'Patient or Family preference',
	'Closest facility',
	'Diversion',
	'Law Enforcement Choice',
	'On-Line Md Choice',
	"Patient's Md Choice",
	'Specialty Resource Centre',
	'Other',
]
const destinationLocationTypes = [
	'Hospital',
	'EMH ',
	'Nursing home',
	'Recreation / sport area',
	"Doctor's office",
	'Airport',
	'Job site',
	'Highway or street',
	'Residence',
	'Public building',
	'Educational institution',
	'Other EMS unit',
	'Other',
]
const sceneFacilityCodes = [
	'15',
	'39',
	'61',
	'22',
	'51',
	'62',
	'53',
	'41',
	'31',
	'35',
	'42',
	'27',
	'36',
	'63',
	'37',
	'33',
	'72',
	'11',
	'12',
	'34',
	'49',
	'48',
	'13',
	'23',
	'25',
	'43',
	'14',
	'32',
	'21',
	'26',
	'64',
	'38',
]
const facilityCodes = [
	'Saint John Regional Hospital',
	"St. Joseph's Hospital",
	'Ridewood Veterans Wing',
	'Sussex Health Center',
	'Fundy Health Center',
	'Charlotte County Hospital',
	'DECH',
	'Loch Lomond Villa',
	'Saint John Saint Stephen Nursing Home',
	'Kennebec Manor',
	'Centracare',
	'Carleton Kirk Nursing Home',
	'Rocmaura Nursing Home',
	'Ruth Ross',
	'Grand Bay Rehab',
	'Turnbull Nursing Home',
	'VA Snow Center',
]
const patientDispositions = [
	'Treated and Transported By Ambulance Crew',
	'Treated and Transported By Private Vehicle',
	'Treated and Released',
	'Patient Assessed and Transferred to Other Agency at Scene',
	'Advanced Life Support Intercept',
	'No Treatment Rendered',
	'Patient Refused Treatment',
	'DOA',
	'Call Cancelled En Route',
	'No Patient Found',
	'Other',
]
const factorsAffectingEMS = [
	'Adverse weather',
	'Adverse road conditions',
	'Vehicle problems',
	'Unsafe scene',
	'Prolonged extrication (>20 min)',
	'Hazardous materials',
	'Inaccurate or Incomplete directions',
	'Other',
]

const Cards = () => {
	// let dispatch = useDispatch()
	// let incidentDetails = useSelector((state) => state.incidentDetails)
	// let patientDetails = useSelector((state) => state.patientDetails)

	// const handleChange = (name, value) => dispatch(setIncidentDetails({ name, value }))

	// const handleSameAddress = (e) => {
	// 	e.preventDefault()

	// 	const street = patientDetails.Street
	// 	const city = patientDetails.Community
	// 	const province = patientDetails.Province
	// 	const postalCode = patientDetails.PostalCode

	// 	dispatch(setIncidentLocation({ street, city, province, postalCode }))
	// }

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
					<InputLabel></InputLabel>
					<Input type="Date"></Input>
				</CCol>
				<CCol xs={6}>
					<InputLabel></InputLabel>
					<Input type="Time"></Input>
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
              name="firstname"
              value={state.firstname}
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
              name="surname"
              value={state.surname}
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
              name="firstname"
              value={state.firstname}
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
              name="surname"
              value={state.surname}
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
        
        name ="Types_ins"
        value={state.Types_ins}
        onChange={handleInputChange}>

        <option>Destination Determinantion</option>
        <option value="1">1</option>
          <option value="2"></option>
   
          </CFormSelect>
				</CCol>
				<CCol xs={6}>
				<CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="Types_ins"
        value={state.Types_ins}
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
              name="serviceCode"
              value={state.serviceCode}
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
              name="serviceType"
              value={state.serviceType}
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
              name="firstname"
              value={state.firstname}
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
              name="surname"
              value={state.surname}
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
              name="firstname"
              value={state.firstname}
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
              name="surname"
              value={state.surname}
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
        
        name ="Types_ins"
        value={state.Types_ins}
        onChange={handleInputChange}>

        <option>Patient Disposition</option>
        <option value="1">1</option>
          <option value="2"></option>
   
          </CFormSelect>
				</CCol>
				<CCol xs={6}>
				<CFormSelect size="lg" className="mt-3" aria-label="Large select example"
        
        name ="Types_ins"
        value={state.Types_ins}
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
              name="firstname"
              value={state.firstname}
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
              name="surname"
              value={state.surname}
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
