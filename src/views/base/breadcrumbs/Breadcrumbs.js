import React from 'react'
import { useState } from 'react'
import {
	Button,
	// ButtonGroup,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Stack,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
	RadioGroup,
	FormControlLabel,
	Radio,
} from '@mui/material'
import { CButton } from '@coreui/react'

// import { SaveButton, useNotify } from 'react-admin'
// import { useFormContext } from 'react-hook-form'
// import { useSelector, useDispatch } from 'react-redux';
// import { setVehicleDetails } from '../../features/vehicleDetails';

const crewTypes = [
	'EMT-1',
	'EMT-2',
	'EMT-3',
	'EMR',
	'PCP',
	'ACP',
	'CCP',
	'RT',
	'RN',
	'MD',
	'Student',
	'Other',
]

const BreadCrumbs = () => {
	// let dispatch = useDispatch();
	// let vehicleDetails = useSelector(state => state.vehicleDetails);

	// const handleChange = (name, value) => dispatch(setVehicleDetails({ name, value }));
	// const { reset } = useFormContext()
	// const notify = useNotify()

const [state, setState] = useState({
		
  timeNotified: "",
  timeEnroute: "",
  timeAtScene: "",
  crewPatient: "",
  timeOutScene: "",
  timeAtDestination: "",
  available: "",
  backArea: "",
	responseToScene_type: "",
	responseToScene_change:"",
  responseFromScene_type: "",
  responseFromScene_change:"",
  
    driver: "",
    attendent: "",
    assisting: "",
  mileage_out:"",
  mileage_in: "",
  mileage_scene:"",
  mileage_des:"",
  mileage_total:"",
  patientContact: "",
  destinationDeterminant: "",
  startDate: "",
  endDate: "",
  dateModified: ""
	});
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
                className="form-horizontal">
		<Grid container spacing={3}>
			{/* <Grid item xs={12}>
				<Stack direction="row" spacing={2} alignItems="center">
					<Typography variant="button">Number of Patient(s) Transported</Typography>
					<ButtonGroup
						sx={{ '& .Mui-disabled': { color: 'primary.main', borderColor: 'primary.light' } }}
						size="small"
						aria-label="number of patient(s) transported button group"
					>
						<Button>-</Button>
						<Button disableRipple></Button>
						<Button>+</Button>
					</ButtonGroup>
				</Stack>
			</Grid> */}

			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					<Typography color="textSecondary" gutterBottom>
						Time
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button>Notified</Button>
								<TextField 
								name='timeNotified'
								value={state.timeNotified}
                      			onChange={handleInputChange}/>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									En Route
								</Button>
								<TextField 
								name='timeEnroute'
								value={state.timeEnroute}
                      			onChange={handleInputChange}
								fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									At Scene
								</Button>
								<TextField fullWidth size="small" 
								name='timeAtScene'
								value={state.timeAtScene}
                      			onChange={handleInputChange}/>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									Crew Patient
								</Button>
								<TextField fullWidth size="small"
								name='crewPatient'
								value={state.crewPatient}
                      			onChange={handleInputChange} />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									Out Scene
								</Button>
								<TextField fullWidth size="small"
								name='timeOutScene'
								value={state.timeOutScene}
                      			onChange={handleInputChange} />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									At Destination
								</Button>
								<TextField fullWidth size="small" 
								name='timeAtDestination'
								value={state.timeAtDestination}
                      			onChange={handleInputChange}/>
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									Available
								</Button>
								<TextField fullWidth size="small"
									name='available'
									value={state.available}
									  onChange={handleInputChange}  />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button fullWidth variant="outlined">
									Back Area
								</Button>
								<TextField fullWidth size="small"
								name='backArea'
								value={state.backArea}
                      			onChange={handleInputChange} />
							</Stack>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>
						Response to Scene
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<Stack
								direction="row"
								sx={{ justifyContent: { xs: 'space-between', lg: 'space-evenly' } }}
								spacing={2}
								alignItems="center"
							>
								<Typography variant="button">Type</Typography>
								<RadioGroup
						row
						// aria-labelledby="gender-radio-group-label"
						// name="medical_ins"
						// value={state.medical_ins}
						// onChange={handleInputChange}
						name='responseToScene_type'
						value={state.responseToScene_type}
						  onChange={handleInputChange} 
					>
						<FormControlLabel value="cold" control={<Radio />} label="Cold" />
						<FormControlLabel value="hot" control={<Radio />} label="Hot" />
						
					</RadioGroup>
							</Stack>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Stack
								direction="row"
								sx={{ justifyContent: { xs: 'space-between', lg: 'space-evenly' } }}
								spacing={2}
								alignItems="center"
							>
								<Typography variant="button">Change in Response</Typography>
								<RadioGroup
						row
						// aria-labelledby="gender-radio-group-label"
						// value={state.medical_ins}
						// onChange={handleInputChange}
						name='responseToScene_change'
						value={state.responseToScene_change}
						  onChange={handleInputChange} 
					>
						<FormControlLabel value="cold" control={<Radio />} label="Cold" />
						<FormControlLabel value="hot" control={<Radio />} label="Hot" />
						
					</RadioGroup>
							</Stack>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>
						Response from Scene
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<Stack
								direction="row"
								sx={{ justifyContent: { xs: 'space-between', lg: 'space-evenly' } }}
								spacing={2}
								alignItems="center"
							>
								<Typography variant="button">Type</Typography>
								<RadioGroup
						row
						// aria-labelledby="gender-radio-group-label"
						// value={state.medical_ins}

						// onChange={handleInputChange}
						name='responseFromScene_type'
						value={state.responseFromScene_type}
						  onChange={handleInputChange} 
					>
						<FormControlLabel value="cold" control={<Radio />} label="Cold" />
						<FormControlLabel value="hot" control={<Radio />} label="Hot" />
						
					</RadioGroup>
							</Stack>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Stack
								direction="row"
								sx={{ justifyContent: { xs: 'space-between', lg: 'space-evenly' } }}
								spacing={2}
								alignItems="center"
							>
								<Typography variant="button">Change in Response</Typography>
								<RadioGroup
						row
						// aria-labelledby="gender-radio-group-label"
						// value={state.medical_ins}
						// onChange={handleInputChange}
						name='responseFromScene_change'
						value={state.responseFromScene_change}
						  onChange={handleInputChange} 
					>
						<FormControlLabel value="cold" control={<Radio />} label="Cold" />
						<FormControlLabel value="hot" control={<Radio />} label="Hot" />
						
					</RadioGroup>
								
							</Stack>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>
						Crew Type
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl fullWidth size="small">
									<InputLabel id="c-driver-label">Driver</InputLabel>
									<Select
										labelId="c-driver-label"
										id="c-driver"
										label="Driver"
										defaultValue=""
										// value={vehicleDetails.C_driver}
										// onChange={(e) => handleChange(e.target.name, e.target.value)}
										name='driver'
										value={state.driver}
										  onChange={handleInputChange} 
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>
												{item}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{/* {vehicleDetails.C_driver === 'Other' && */}
								{/* <TextField
									size="small"
									label="Other"
									name="C_driv_oth"
									// value={vehicleDetails.C_driv_oth}
									// onChange={(e) => handleChange(e.target.name, e.target.value)}
									fullWidth
								/> */}
								{/* } */}
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl size="small" fullWidth>
									<InputLabel id="c-attendant-label">Attendant</InputLabel>
									<Select
										labelId="c-attendant-label"
										id="c-attendant"
										defaultValue=""
										name='attendent'
										value={state.attendent}
										  onChange={handleInputChange} 
										// value={vehicleDetails.C_attendant}
										// onChange={(e) => handleChange(e.target.name, e.target.value)}
										label="Attendant"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>
												{item}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{/* {vehicleDetails.C_attendant === 'Other' && */}
								{/* <TextField
									size="small"
									label="Other"
									name="C_attn_oth"
									// value={vehicleDetails.C_attn_oth}
									// onChange={(e) => handleChange(e.target.name, e.target.value)}
									fullWidth
								/> */}
								{/* } */}
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl fullWidth size="small">
									<InputLabel id="c-assistant-label">Assistant</InputLabel>
									<Select
										labelId="c-assistant-label"
										id="c-assistant"
										defaultValue=""
										name='assisting'
										value={state.assisting}
										  onChange={handleInputChange} 
										// value={vehicleDetails.C_assistant}
										// onChange={(e) => handleChange(e.target.name, e.target.value)}
										label="Assistant"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>
												{item}
											</MenuItem>
										))}
									</Select>
								</FormControl>
								{/* {vehicleDetails.C_assistant === 'Other' && */}
								{/* <TextField
									size="small"
									label="Other"
									name="C_asst_oth"
									// value={vehicleDetails.C_asst_oth}
									// onChange={(e) => handleChange(e.target.name, e.target.value)}
									fullWidth
								/> */}
								{/* } */}
							</Stack>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>
						Mileage
					</Typography>
					<Grid container justifyContent="center" spacing={2}>
						<Grid item xs={12} md>
							<TextField
								label="Out"
								size="small"
								name='mileage_out'
								value={state.mileage_out}
                      			onChange={handleInputChange} 
								// value={vehicleDetails.M_Out}
								// onChange={(e) => handleChange('M_Out', e.target.value)}
								fullWidth
							/>
						</Grid>

						<Grid item xs={12} md>
							<TextField
								label="At Scene"
								size="small"
								name='mileage_scene'
								value={state.mileage_scene}
                      			onChange={handleInputChange} 
								// value={vehicleDetails.M_atScene}
								// onChange={(e) => handleChange('M_atScene', e.target.value)}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="At Destination"
								size="small"
								// value={vehicleDetails.M_atDest}
								// onChange={(e) => handleChange('M_atDest', e.target.value)}
								fullWidth
								name='mileage_des'
								value={state.mileage_des}
                      			onChange={handleInputChange} 
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="In"
								size="small"
								name='mileage_in'
								value={state.mileage_in}
                      			onChange={handleInputChange} 
								// value={vehicleDetails.M_In}
								// onChange={(e) => handleChange('M_In', e.target.value)}
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="Total"
								size="small"
								// value={vehicleDetails.M_Total}
								// onChange={(e) => handleChange('M_Total', e.target.value)}
								fullWidth
								name='mileage_total'
								value={state.mileage_total}
                      			onChange={handleInputChange} 
							/>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>
						Patient Info
					</Typography>
					<Grid container justifyContent="center" spacing={2}>
						<Grid item xs={12} md>
							<TextField
								label="Patient Contact"
								size="small"
								name='patientContact'
								value={state.patientContact}
                      			onChange={handleInputChange} 
								// value={vehicleDetails.M_Out}
								// onChange={(e) => handleChange('M_Out', e.target.value)}
								fullWidth
							/>
						</Grid>

						<Grid item xs={12} md>
							<TextField
								label="Destination Determinant"
								size="small"
								// value={vehicleDetails.M_atScene}
								// onChange={(e) => handleChange('M_atScene', e.target.value)}
								fullWidth
								name='destinationDeterminant'
								value={state.destinationDeterminant}
                      			onChange={handleInputChange} 
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="Document Start Date"
								size="small"
								// value={vehicleDetails.M_atDest}
								// onChange={(e) => handleChange('M_atDest', e.target.value)}
								fullWidth
								name='startDate'
								value={state.startDate}
                      			onChange={handleInputChange} 
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="Document End Date"
								size="small"
								// value={vehicleDetails.M_In}
								// onChange={(e) => handleChange('M_In', e.target.value)}
								fullWidth
								name='endDate'
								value={state.endDate}
                      			onChange={handleInputChange} 
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="Date Modified"
								size="small"
								// value={vehicleDetails.M_Total}
								// onChange={(e) => handleChange('M_Total', e.target.value)}
								fullWidth
								name='dateModified'
								value={state.dateModified}
                      			onChange={handleInputChange} 
							/>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			
			<Grid item xs={12}>
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <CButton color="primary" type="submit" className="me-md-2">submit</CButton>

</div>
</Grid>
		</Grid>
		</form>
	)
}

export default BreadCrumbs
