import React from 'react'
import  { useState } from "react"

// import {
// 	Autocomplete,
// 	Button,
// 	FormControl,
// 	Grid,
// 	InputLabel,
// 	MenuItem,
// 	Paper,
// 	Select,
// 	Stack,
// 	TextField,
// 	Typography,
// } from '@mui/material'

import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	InputLabel,
	Radio,
	RadioGroup,
	Select,
	TextField,
	Paper,
	Typography,
	MenuItem,
	
} from '@mui/material'


const accordion = () => {


		
	const [state, setState] = useState({
		firstname: "",
		surname: "",
		street:"",
		city:"",
		state:"",
		postal_code:"",
		country:"",
		telephone_no:"",
		aadhar_no:"",
		DOB:"",
		age:"",
		gender:"",
		medical_ins:"",
		typesOfInsurance:"",
		govt_ins_Id:"",
		coverage_Amount:"",
		govt_benefits:"",
		private_ins_id:"",
		private_benefits:"",
		hospital_chart_no:"",
		commends:"",
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

	  const Types_ins = ['Private',
						'Goverment'];
	
	const Benefides_scheme = ['Aayushman Bharat Yojana','Pradhan Mantri Jeeven Jyoti Beema Yojana']		
	
	const Private_Benefides_scheme = [
		'Individual',
		'Family Floater',
		'Group Health',
		'Senior Citizen health',
		'Maternity Health ',
		'Critical Illness ',
		'Top-up health plan',
	]



	return (
		
			
    <form 
				onSubmit={submitHandler}
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
		<Grid container spacing={3}>

			<Grid item xs={12} md={6}>
				<TextField
					name = "firstname"
					label="FirstName"
					fullWidth
					size="small"
					value={state.firstname}
                      onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					name="surname"
					label="Surname"
					fullWidth
					size="small"
					value={state.surname}
					onChange={handleInputChange}
				/>

			</Grid>
			<Grid item xs={6} md={12}>
				<TextField
					name="street"
					label="Street Address"
					fullWidth
					size="small"
					value={state.street}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					name="city"
					label="City"
					fullWidth
					size="small"
					value={state.city}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					name="state"
					label="State"
					fullWidth
					size="small"
					// value={patientDetails.Province}
					// onChange={(e) => handleChange('Province', e.target.value)}
					// value={name} 
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //     alert(e.target.value);
                    //   }}
					value={state.state}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					name="postal_code"
					label="Postal Code"
					fullWidth
					size="small"
					// value={patientDetails.PostalCode}
					// onChange={(e) => handleChange('PostalCode', e.target.value)}
					// value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //     alert(e.target.value);
                    //   }}
					value={state.postal_code}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					name='country'
					label="Country"
					fullWidth
					size="small"
					// value={patientDetails.Country}
					// onChange={(e) => handleChange('Country', e.target.value)}
					// value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //     alert(e.target.value);
                    //   }}
					value={state.country}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					name='telephone_no'
					label="Telephone No."
					fullWidth
					size="small"
					// value={patientDetails.Tel_No}
					// onChange={(e) => handleChange('Tel_No', e.target.value)}
					// value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //     alert(e.target.value);
                    //   }}
					value={state.telephone_no}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
					<TextField
						name="aadhar_no"
						fullWidth
						size="small"
						label="Aadhar Number"
						value={state.aadhar_no}
						onChange={handleInputChange}
					/>
					
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					name='DOB'
					label="Date of Birth"
					fullWidth
					size="small"
					value={state.DOB}
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					name='age'
					label="Age"
					fullWidth
					size="small"
					pattern="[0-9]*"
					value={state.age}
					onChange={handleInputChange}
				/>

			</Grid>
			<Grid item xs={12} md={4}>
				<FormControl size="small" fullWidth>
					<FormLabel id="gender-radio-group-label">Gender</FormLabel>
					<RadioGroup
						row
						aria-labelledby="gender-radio-group-label"
						name="gender"
						value={state.gender}
						onChange={handleInputChange}
					>
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</Grid>
			{/* <Grid item xs={12} md={4}>
				<FormControl size="small" fullWidth>
					<FormLabel id="gender-radio-group-label">Medical Insurance</FormLabel>
					<RadioGroup
						row
						// aria-labelledby="gender-radio-group-label"
						name="medical_ins"
						value={state.medical_ins}
						onChange={handleInputChange}
					>
						<FormControlLabel value="yes" control={<Radio />} label="Yes" />
						<FormControlLabel value="no" control={<Radio />} label="No" />
						
					</RadioGroup>
				</FormControl>
			</Grid> */}
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
				<FormControl size="small" fullWidth>
					<FormLabel id="gender-radio-group-label">Medical Insurance</FormLabel>
					<RadioGroup
						row
						// aria-labelledby="gender-radio-group-label"
						name="medical_ins"
						value={state.medical_ins}
						onChange={handleInputChange}
					>
						<FormControlLabel value="yes" control={<Radio />} label="Yes" />
						<FormControlLabel value="no" control={<Radio />} label="No" />
						
					</RadioGroup>
				</FormControl>
					<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
						(fill the below details only if Medical Insurance exist)
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<FormControl fullWidth size="small">
								<InputLabel>Type Of Insurance</InputLabel>
								<Select
									labelId="dest-facility-code-label"
									id="dest-facility-code"
									name="Dest_Facility_Code"
									defaultValue=""
									// value={incidentDetails.Dest_Facility_Code}
									// onChange={(e) => handleChange('Dest_Facility_Code', e.target.value)}
									label="Facility Code"
									
									className="typesOfInsurance"
					
									value={state.type}
									onChange={handleInputChange}

								>
									{Types_ins.map((item, index) => (
										<MenuItem key={index} value={item}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
						<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
						(For Goverment Insurance)
						</Typography>
							<TextField
								label="Insurance Id Number"
								size="small"
								fullWidth
								name="govt_ins_Id"
					
									value={state.govt_ins_Id}
									onChange={handleInputChange}
								// value={incidentDetails.Dest_Street}
								// onChange={(e) => handleChange('Dest_Street', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								label="Maximum Coverage Amount"
								size="small"
								fullWidth
								name="coverage_Amount"
					
									value={state.coverage_Amount}
									onChange={handleInputChange}
								// value={incidentDetails.Dest_Community}
								// onChange={(e) => handleChange('Dest_Community', e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
						<FormControl fullWidth size="small">
								<InputLabel>Types Of Benefides Scheme</InputLabel>
								<Select
									labelId="dest-facility-code-label"
									id="dest-facility-code"
									name="Benefides_scheme"
									defaultValue=""
									// value={incidentDetails.Dest_Facility_Code}
									// onChange={(e) => handleChange('Dest_Facility_Code', e.target.value)}
									label="Types Benefides Scheme"
									className="govt_benefits"
					
									value={state.type}
									onChange={handleInputChange}

								>
									{Benefides_scheme.map((item, index) => (
										<MenuItem key={index} value={item}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>

						</Grid>
						<Grid item xs={12}>
						<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
						(For Private Insurance)
						</Typography>
							<TextField
								label="Insurance Id Number"
								size="small"
								fullWidth
								name="private_ins_id"
					
									value={state.private_ins_id}
									onChange={handleInputChange}
								// value={incidentDetails.Dest_Street}
								// onChange={(e) => handleChange('Dest_Street', e.target.value)}
							/>
						</Grid>
						
						<Grid item xs={12}>
						<FormControl fullWidth size="small">
								<InputLabel>Types Of Benefides Scheme</InputLabel>
								<Select
									labelId="dest-facility-code-label"
									id="dest-facility-code"
									name="Benefides_scheme"
									defaultValue=""
									// value={incidentDetails.Dest_Facility_Code}
									// onChange={(e) => handleChange('Dest_Facility_Code', e.target.value)}
									label="Types Benefides Scheme"
									className="private_benefits"
					
									value={state.type}
									onChange={handleInputChange}

								>
									{Private_Benefides_scheme.map((item, index) => (
										<MenuItem key={index} value={item}>
											{item}
										</MenuItem>
									))}
								</Select>
							</FormControl>

						</Grid>
						
					</Grid>
				</Paper>
			</Grid>
			
			<Grid item xs={12} md={4}>
				<TextField
					name="hospital_chart_no"
					label="Hospital Chart No."
					fullWidth
					size="small"
					value={state.hospital_chart_no}
					onChange={handleInputChange}
				/>

			</Grid>
			<Grid item xs={12}>
				<TextField
					name='commends'
					label="Commends"
					fullWidth
					size="small"
					multiline
					rows={6}
					value={state.commends}
					onChange={handleInputChange}
				/>
			</Grid>

			<button
                    type="submit"
                    size="sm"
                    color="primary"
                    className="ml-2"
                  >
                     Submit
                  </button>
                  {/* <CButton type="reset" size="sm" color="danger">
                    <cIcon name="cil-ban" /> Reset
                  </CButton> */}

				  </Grid>
			</form>
			
		
	)
}

export default accordion
