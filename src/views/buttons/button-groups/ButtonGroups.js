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
import { CButton, CContainer } from '@coreui/react'

import{
	// CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,

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
			
			<CContainer>
				<CRow>
					<CCol xs={6}>
						
					</CCol>
					<CCol xs={6}>

					</CCol>
				</CRow>
			</CContainer>

		
		</form>
	)
}

export default ButtonGroups
