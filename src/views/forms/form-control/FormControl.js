import React from 'react'
import { useState } from 'react';
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
import { CButton } from '@coreui/react'


const formControl = () => {
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
  
    <form
    onSubmit={submitHandler}
    method="post"
    encType="multipart/form-data"
    className="form-horizontal"
    >
    
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
<div className="d-grid gap-2 d-md-flex justify-content-md-end">
  <CButton color="primary" type="submit" className="me-md-2">Submit</CButton>

</div>
</Grid>
</form>
    
  );
}

export default formControl
