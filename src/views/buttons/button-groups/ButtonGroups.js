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

const ButtonGroups = () => {

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

		<form
		onSubmit={submitHandler}
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
		>
		<Grid item xs={12} md={6} lg={4}>
			<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
				{/* <Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
					Nero Response
				</Typography> */}
				<Grid container spacing={3}>
					<Grid item xs={12} md={6}>
						<TextField
							label="Nero Restponse"
							fullWidth
							size="small"
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
								name='neroResponse'
								value={state.neroResponse}
                      			onChange={handleInputChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Body System"
							fullWidth
							size="small"
								name='bodySystem'
								value={state.bodySystem}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Glasgow and pupil"
							fullWidth
							name='glasGlow'
								value={state.glasGlow}
                      			onChange={handleInputChange}
							size="small"
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="General Assessment"
							fullWidth
							size="small"
								name='generalAssessment'
								value={state.generalAssessment}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Airway"
							fullWidth
							size="small"
							name='airway'
								value={state.airway}
                      			onChange={handleInputChange}
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Symptoms"
							fullWidth
							size="small"

								name='symptoms'
								value={state.symptoms}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		<button
                    type="submit"
                    size="sm"
                    color="primary"
                    className="ml-2"
                  >
                     Submit
                </button>
		</form>
	)
}

export default ButtonGroups
