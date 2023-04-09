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

const ComplainBased = () => {

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
							label="Respiration"
							fullWidth
							size="small"
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
								name='respiration'
								value={state.respiration}
                      			onChange={handleInputChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Seizure"
							fullWidth
							size="small"
								name='seizure'
								value={state.seizure}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Toxic exposure"
							fullWidth
							name='toxicExposure'
								value={state.toxicExposure}
                      			onChange={handleInputChange}
							size="small"
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Cardiac Arrest"
							fullWidth
							size="small"
								name='cardiacArrest'
								value={state.cardiacArrest}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Chest Pain"
							fullWidth
							size="small"
							name='chestPain'
								value={state.chestPain}
                      			onChange={handleInputChange}
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Neonatal"
							fullWidth
							size="small"

								name='neonatal'
								value={state.neonatal}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Obstetric"
							fullWidth
							size="small"

								name='obstetric'
								value={state.obstetric}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Trauma"
							fullWidth
							size="small"

								name='trauma'
								value={state.trauma}
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

export default ComplainBased
