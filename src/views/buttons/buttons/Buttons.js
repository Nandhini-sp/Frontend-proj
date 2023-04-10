import React from 'react'
import { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { setPatientHistory, toggleBodySystemItem } from '../../../features/patientHistory'
import {
	Checkbox,
	FormControl,
	FormControlLabel,
	// FormGroup,
	// FormLabel,
	// submitHandler,
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
} from '@mui/material'
import { CButton } from '@coreui/react'


import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import DatePicker from '@mui/lab/DatePicker'

// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// import { DatePicker } from '@mui/x-date-pickers'

// const bodySystems = [
// 	'Cardiovascular',
// 	'Central Nervous System',
// 	'Endocrine',
// 	'GI',
// 	'Integumentary',
// 	'Musculoskeletal',
// 	'Renal',
// 	'Reproductive',
// 	'Respiratory',
// ]
const coResponders = ['Law Enforcement', 'Fire', 'Other First Responders', 'None']
const destinationConditions = ['Stable', 'Improved', 'Deteriorated']
const treatmentsProvided = ['Yes', 'No', 'Unknown', 'Not applicable']
const suspectedIntoxication = [
	'Yes as reported by patient',
	'Yes as reported by bystander',
	'Yes as suspected by provider',
	'Not suspected',
]
const chiefComplaints = [
	'Abdominal Pain/Problems',
	'Allergies/Envenomations',
	'Animal Bites/Attacks',
	'Assault/Sexual Assault',
	'Back Pain (Non Traumatic)',
	'Breathing Problems',
	'Burns(Scalds)/Explosions',
	'Carbon Monoxide/Inhal/HAZMAT',
	'Cardiac or Resp Arrest/Death',
	'Chest Pain',
	'Choking',
	'Convulsions/Seizures',
	'Diabetic Problems',
	'Drowning/Diving/Scuba Accident',
	'Electrocution/Lightning',
	'Eye Problems/Injuries',
	'Falls',
	'Headache',
	'Heart Problems/A.I.C.D.',
	'Heat/Cold Exposure',
	'Hemorrhage/Lacerations',
	'Industrial/Machinery Accidents',
	'Overdose/Poisoning(Ingestion)',
	'Pregnancy/Childbirth/Miscarria',
	'Psych/Abnorml Behavior/Suicide',
	'Sick Person (Spec diagnosis)',
	'Stab/Gunshot/Penetrating Traum',
	'Stroke (CVA)',
	'Traffic/Transportation Acc',
	'Traumatic Injuries (Specific)',
	'Unconscious/Fainting (Near)',
	'Unknown Problem (Man Down)',
	'Interfacility',
	'Weakness',
]

const Buttons = () => {
	

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

		<form
			onSubmit={submitHandler}
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
			>

<Grid container spacing={3}>

<Grid item xs={12}>	
	<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
		{/* <Typography color="textSecondary" gutterBottom>
			Patient History
		</Typography> */}

			<LocalizationProvider dateAdapter={AdapterDateFns}>
					<Grid container spacing={3}>
				
				<Grid item xs={12} md={6}>
					
					<TextField
						label="Date of Injury"
						size="small"
						fullWidth
						type="date"

								name='dateOfInjury'
								value={state.dateOfInjury}
                      			onChange={handleInputChange}
						
						InputLabelProps={{
							shrink: true,
						}}
						
					/>

				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label="Time of Injury"
						size="small"
						fullWidth
						type="time"

								name='timeOfInjury'
								value={state.timeOfInjury}
                      			onChange={handleInputChange}
						
						InputLabelProps={{
							shrink: true,
						}}
						
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-co-responders-label">Co-Responders</InputLabel>
						<Select
							labelId="g-co-responders-label"
							id="g-co-responders"
								name='coResponders'
								value={state.coResponders}
                      			onChange={handleInputChange}
							label="Co-Responders"
							defaultValue=""
							
						>
							{coResponders.map((item, index) => (
								<MenuItem key={index} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-treatment-rendered-label">
							Treatment Provided by Co-Responders
						</InputLabel>
						<Select
							labelId="g-treatment-rendered-label"
							id="g-treatment-rendered"
								name='treatmentRendered'
								value={state.treatmentRendered}
                      			onChange={handleInputChange}
							label="Treatment Provided by Co-Responders"
							defaultValue=""
						
						>
							{treatmentsProvided.map((item, index) => (
								<MenuItem key={index} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-pt-condi-dest-label">Patient Condition at Destination</InputLabel>
						<Select
							labelId="g-pt-condi-dest-label"
							id="g-pt-condi-dest"
							
							label="Patient Condition at Destination"
							defaultValue=""

								name='patientCondition'
								value={state.patientCondition}
                      			onChange={handleInputChange}
						
						>
							{destinationConditions.map((item, index) => (
								<MenuItem key={index} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack spacing={3} direction="row" alignItems="center">
						<Typography color="textSecondary" sx={{ width: '50%' }}>
							Patient Displacement
						</Typography>
						<FormControl fullWidth size="small">
							
							<RadioGroup
								row
								aria-labelledby="dpatient-displacement-label"
								name='patientDisplacement'
								value={state.patientDisplacement}
                      			onChange={handleInputChange}
								
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</Stack>
				</Grid>
				<Grid item xs={12} md={10}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-susp-intoxi-label">Suspected Intoxication</InputLabel>
						<Select
							labelId="g-susp-intoxi-label"
							id="g-susp-intoxi"
							label="Suspected Intoxication"
							defaultValue=""
								name='suspectedIntoxication'
								value={state.suspectedIntoxication}
                      			onChange={handleInputChange}
							
						>
							{suspectedIntoxication.map((item, index) => (
								<MenuItem key={index} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={2}>
					<FormControlLabel
						control={
							<Checkbox
								
								name="G_DNR_Order"
								
							/>
						}
						label="DNR Order"
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth size="small">
						<InputLabel id="chief-complaint-label">Chief Complaint</InputLabel>
						<Select
							labelId="chief-complaint-label"
							id="chief-complaint"
						
							label="Chief Complaint"
							defaultValue=""
								name='chiefComplaint'
								value={state.chiefComplaint}
                      			onChange={handleInputChange}
						>

							{chiefComplaints.map((item, index) => (
								<MenuItem key={index} value={item}>
									{item}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</LocalizationProvider>

		</Paper>
		</Grid>
		</Grid>

		<Grid item xs={12}>
			
		<div class="d-grid gap-2 col-6 mx-auto">
  				<button class="btn btn-success" type="submit">Submit</button>
				</div>
			</Grid>

		
		</form>

	)
}

export default Buttons
