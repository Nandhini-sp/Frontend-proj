import React from 'react'
import { useState } from 'react'
import {
	Grid,
	Paper,
	TextField,
} from '@mui/material'
// import { CButton } from '@coreui/react'


const Select = () => {

	const [state, setState] = useState({
    assessmentTime: "",
    consciousnessLevel: "",
    pulseRate: "",
    siteOfPulseCheck: "",
    temperature: "",
    siteOfTemperatureCheck: "",
    skinColor: "",
    moisture: "",
    bloodPressure: "",
      systolic: "",
    diastolic: "",
    respiration: "",
      bloodGlucose: "",
    oxygenSaturation: "",
    preOxygen: "",
    postOxygen: ""
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
							label="Time Of Assessment"
							fullWidth
							size="small"
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
								name='assessmentTime'
								value={state.assessmentTime}
                      			onChange={handleInputChange}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Level Of Consciousness"
							fullWidth
							size="small"
								name='consciousnessLevel'
								value={state.consciousnessLevel}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Pulse Rate"
							fullWidth
							name='pulseRate'
								value={state.pulseRate}
                      			onChange={handleInputChange}
							size="small"
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Site Of Pulse Check"
							fullWidth
							size="small"
								name='siteOfPulseCheck'
								value={state.siteOfPulseCheck}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Site Of Temperature Check"
							fullWidth
							size="small"
							name='siteOfTemperatureCheck'
								value={state.siteOfTemperatureCheck}
                      			onChange={handleInputChange}
							// value={patientDetails.Given_Name}
							// onChange={(e) => handleChange('Given_Name', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Skin Color"
							fullWidth
							size="small"

								name='skinColor'
								value={state.skinColor}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Temperature"
							fullWidth
							size="small"

								name='temperature'
								value={state.temperature}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							label="Moisture"
							fullWidth
							size="small"

								name='moisture'
								value={state.moisture}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Blood Pressure"
							fullWidth
							size="small"

								name='bloodPressure'
								value={state.bloodPressure}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Systolic"
							fullWidth
							size="small"

								name='systolic'
								value={state.systolic}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Diastolic"
							fullWidth
							size="small"

								name='diastolic'
								value={state.diastolic}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Respiration"
							fullWidth
							size="small"

								name='respiration'
								value={state.respiration}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Blood Glucose"
							fullWidth
							size="small"

								name='bloodGlucose'
								value={state.bloodGlucose}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Oxygen Saturtion"
							fullWidth
							size="small"

								name='oxygenSaturation'
								value={state.oxygenSaturation}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Pre-Oxygen"
							fullWidth
							size="small"

								name='preOxygen'
								value={state.preOxygen}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
          <Grid item xs={12} md={6}>
						<TextField
							label="Post-Oxygen"
							fullWidth
							size="small"

								name='postOxygen'
								value={state.postOxygen}
                      			onChange={handleInputChange}
							// value={patientDetails.Surname}
							// onChange={(e) => handleChange('Surname', e.target.value)}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Grid>
		<Grid item xs={12}>
		<div class="d-grid gap-2 col-6 mx-auto">
  				<button class="btn btn-success" type="submit">Submit</button>
				</div>
</Grid>
		</form>
	)
}

export default Select
