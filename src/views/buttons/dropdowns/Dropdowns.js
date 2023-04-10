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

import{
	// CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,

}from '@coreui/react'

import { CButton } from '@coreui/react'


const ComplainBased = () => {


	const [visible, setVisible] = useState(false)

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
		<Grid item xs={12}>


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
				
			</Grid>
		</form>
	)
}

export default ComplainBased
