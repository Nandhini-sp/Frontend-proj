import React from 'react'
import { useState } from 'react';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
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
} from "@mui/material";
import { CButton, CCol, CContainer, CRow } from '@coreui/react'
import{
	// CButton,
	CModal,
	CModalHeader,
	CModalTitle,
	CModalBody,
	CModalFooter,
  CFormLabel,
  CFormFloating,
  CFormInput,
  CFormSelect,
  CFormCheck,

}from '@coreui/react'


const formControl = () => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState('');	

  const [state, setState] = useState({
    procedureStartTime:"",
procedureType:"",
procedureEndTime:"",
deviceMethod:"",
technicianID:"",
deviceSize:"",  
outcome:"", 
successfull:"",
treatment:"",
totalTime:"",
treatmentType:"",
administrativeRoute:""
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


        <CContainer className='m-4'>
          <CRow>
          <CCol xs={6}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Procedure Start Time</CFormLabel>
				<p >Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
            name="procedureStartTime"
            value={state.procedureStartTime}
            onClick={handleInputChange}
      		/>
			</CCol>
      <CCol xs={6}>
				<CFormLabel htmlFor="floatingInput" className='h3'>Treatment End Time</CFormLabel>
				<p >Selected Time: {time || '-'}</p>
      			<TimePicker
        		placeholder="Select Time"
        		use12Hours
        		showSecond={false}
        		focusOnOpen={true}
        		format="hh:mm A"
        		onChange={e => setTime(e.format('LT'))}
            name="procedureEndTime"
            value={state.procedureEndTime}
            onClick={handleInputChange}
            
      		/>
			</CCol>

          </CRow>
      
          <CRow>
        <CCol xs={4} className='mt-4'>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="FirstName"
              name="procedureType"
              value={state.procedureType}
              onChange={handleInputChange}

            />
            <CFormLabel htmlFor="floatingInput">Types Of Procedure</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={4} className='mt-4'>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="state"
              value={state.deviceMethod}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Device Method</CFormLabel>
          </CFormFloating>
        </CCol>
        <CCol xs={4} className='mt-4'>
          <CFormFloating className="mb-3">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="technicianID"
              value={state.technicianID}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">TechnicianID</CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
           <CRow>
           <CCol xs={4} className="">
          <CFormFloating className="">
            <CFormInput
              type="text"
              id="floatingInput"
              placeholder="Surname"
              name="deviceSize"
              value={state.deviceSize}
              onChange={handleInputChange}
            />
            <CFormLabel htmlFor="floatingInput">Device Size</CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol xs={4}>

			<CFormSelect size="sm" className="mt-3" aria-label="Large select example"

				name ="outcome"
				value={state.outcome}
				onChange={handleInputChange}>

				<option>Outcome</option>
				<option value="1">Stable</option>
  				<option value="2">Improved</option>
  				<option value="3">Deteriorated</option>
			</CFormSelect>
		</CCol>

    <CCol xs={4}>
          
            <CFormLabel htmlFor="floatingInput"
                        name="sucessful"
                        value={state.successfull}
                        onChange={handleInputChange}
            >Successful</CFormLabel>
            
            <div>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="Yes"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="No"/>
            </div>  
        </CCol>

           </CRow>

           
     </CContainer>

    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2, width: "100%" }}>
          <Typography color="textSecondary" gutterBottom>
            Procedure
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Button
                    // onClick={() =>
                    //   handleChange(
                    //     "Proc_Time_Start",
                    //     new Date().toLocaleTimeString("en-US")
                    //   )
                    // }
                    fullWidth
                    variant="outlined"
                  >
                    Start Time
                  </Button>
                  <TextField
                    // onClick={() =>
                    //   handleChange(
                    //     "Proc_Time_Start",
                    //     new Date().toLocaleTimeString("en-US")
                    //   )
                    // }
                    // value={intervention[page - 1].Proc_Time_Start}
                    fullWidth
                    size="small"
                    name='procedureStartTime'
								    value={state.procedureStartTime}
                      			onChange={handleInputChange}
                  />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button
                    // onClick={() =>
                    //   handleChange(
                    //     "Proc_Time_End",
                    //     new Date().toLocaleTimeString("en-US")
                    //   )
                    // }
                    fullWidth
                    variant="outlined"
                  >
                    End Time
                  </Button>
                  <TextField
                    // onClick={() =>
                    //   handleChange(
                    //     "Proc_Time_End",
                    //     new Date().toLocaleTimeString("en-US")
                    //   )
                    // }
                    // value={intervention[page - 1].Proc_Time_End}
                    fullWidth
                    size="small"
                    name='procedureEndTime'
								    value={state.procedureEndTime}
                      			onChange={handleInputChange}
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Stack spacing={2}>
                <TextField

                  label="Type of Procedure"
                  size='small'
                  fullWidth
                  name='procedureType'
								value={state.procedureType}
                      			onChange={handleInputChange}
                
                >

                </TextField>
                <TextField

                    label="Device Method"
                    size='small'
                    fullWidth
                    name='deviceMethod'
								value={state.deviceMethod}
                      			onChange={handleInputChange}

                    >

                  </TextField>
              </Stack>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4} alignItems="flex-start" sx={{display: { xs: 'none', lg: 'block'}}}>
              
            </Grid> */}
            {/* {intervention[page - 1].Procedur === "Other" && ( */}
              <Grid item xs={12} md={6} lg={4} alignItems="flex-start" sx={{display: { xs: 'block', lg: 'none'}}}>
                <TextField
                  size="small"
                  label="Other"
                  // name="Proc_Other"
                  // value={intervention[page - 1].Proc_Other}
                  // onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                />
              </Grid>
            {/* )} */}
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Technician ID"
                name='technicianID'
								value={state.technicianID}
                      			onChange={handleInputChange}
                // value={intervention[page - 1].Procedur_Technician}
                // onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Device Size"
                name='deviceSize'
								value={state.deviceSize}
                      			onChange={handleInputChange}
                // value={intervention[page - 1].Device_Size}
                // onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel id="device-method-label">Outcome</InputLabel>
                <Select
                  labelId="device-method-label"
                  id="device-method"
                  label="Outcome"
                  defaultValue=""
                  name='outcome'
								value={state.outcome}
                      			onChange={handleInputChange}
                  // value={intervention[page - 1].Procedur_outcome}
                  // onChange={(e) =>
                  //   handleChange("Procedur_outcome", e.target.value)
                  // }
                >
                  <MenuItem value="Stable">Stable</MenuItem>
                  <MenuItem value="Improved">Improved</MenuItem>
                  <MenuItem value="Deteriorated">Deteriorated</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl>
                <FormLabel id="successful-radio-group">Successful</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="successful-radio-group"
                  name='successfull'
								value={state.successfull}
                      			onChange={handleInputChange}
                  // value={intervention[page - 1].Procedur_success}
                  // onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2, width: "100%" }}>
          <Typography color="textSecondary" gutterBottom>
            Treatment
          </Typography>
          <Grid container spacing={3}>
            <Grid
              item
              container
              xs={12}
              md={8}
              spacing={3}
              alignItems="flex-end"
            >
              <Grid item xs={12} md={6} alignItems="flex-end">
                
                <TextField
                  fullWidth
                  size='small'
                  label="Treatment"
                  name='treatment'
								value={state.treatment}
                      			onChange={handleInputChange}
                >

                </TextField>

              </Grid>
              <Grid item xs={12} md={6} alignItems="flex-end">
                <Stack direction="row" spacing={2}>
                  <Button
                    // onClick={() =>
                    //   handleChange(
                    //     "Treatment_time",
                    //     new Date().toLocaleTimeString("en-US")
                    //   )
                    // }
                    fullWidth
                    variant="outlined"
                  >
                    Total Time
                  </Button>
                  <TextField
                    // value={intervention[page - 1].Treatment_time}
                    // onChange={(e) =>
                    //   handleChange("Treatment_time", e.target.value)
                    // }
                    fullWidth
                    size="small"
                    name='totalTime'
								    value={state.totalTime}
                      			onChange={handleInputChange}
                  />
                </Stack>
              </Grid>
            </Grid>
            {/* <Grid item container spacing={1} xs={12} md={4}>
              
         
            </Grid> */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="treatment-type-label">
                    Type of Treatment
                  </InputLabel>
                  <Select
                    labelId="treatment-type-label"
                    id="treatment-type"
                    label="Type of Treatment"
                    defaultValue=""
                    name='treatmentType'
								value={state.treatmentType}
                      			onChange={handleInputChange}
                    // value={intervention[page - 1].Treatment_Type}
                    // onChange={(e) =>
                    //   handleChange("Treatment_Type", e.target.value)
                    // }
                  >
                    <MenuItem value="Medication">Medication</MenuItem>
                    <MenuItem value="IV Fluid">IV Fluid</MenuItem>
                    <MenuItem value="Oxygen">Oxygen</MenuItem>
                    <MenuItem value="Defibrillation">Defibrillation</MenuItem>
                    <MenuItem value="No Treatment">No Treatment</MenuItem>
                  </Select>
                </FormControl>
                
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} alignItems="flex-start">
              <Stack spacing={2}>
                <TextField
                  label="Administrative Route"
                  fullWidth
                  size='small'
                  name='administrativeRoute'
								value={state.administrativeRoute}
                      			onChange={handleInputChange}

                >

                </TextField>
                {/* {intervention[page - 1].Admin_Route === "Other" && ( */}
                  
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
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
    
  );
}

export default formControl
